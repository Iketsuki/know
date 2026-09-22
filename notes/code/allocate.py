from __future__ import annotations

import argparse
import csv
import re
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional


PREF_TIMESTAMP = "Timestamp"
PREF_EMAIL = "Email Address"
PREF_CLASS = "Class"
PREF_CLASS_NO = "Class number"
PREF_HELPER = "2. Are you interested in serving as a student ambassador on that day?"
PREF_1 = "Preference 1"
PREF_2 = "Preference 2"
PREF_3 = "Preference 3"
PREF_ACCEPT_OTHER = "1(b). I am willing to accept workshops other than those selected above."

QUOTA_NAME = "Name"
QUOTA_QUOTA = "Quota"
WECHAT_KEY = "wechatminiprogram"


def collapse_spaces(text: str) -> str:
	return re.sub(r"\s+", " ", text).strip()


def normalize_workshop_key(name: str) -> str:
	cleaned = collapse_spaces(name).lower()
	return re.sub(r"[^a-z0-9]+", "", cleaned)


def parse_timestamp(raw: str) -> datetime:
	raw = collapse_spaces(raw)
	return datetime.strptime(raw, "%m/%d/%Y %H:%M:%S")


def parse_int(value: str, default: int = 0) -> int:
	try:
		return int(collapse_spaces(str(value)))
	except (TypeError, ValueError):
		return default


def parse_grade(class_name: str) -> int:
	m = re.match(r"\s*(\d+)", class_name or "")
	if not m:
		return 99
	return int(m.group(1))


def helper_flag(raw: str) -> bool:
	return collapse_spaces(raw).lower().startswith("interested")


def yes_flag(raw: str) -> bool:
	return collapse_spaces(raw).lower().startswith("yes")


@dataclass
class WorkshopState:
	name: str
	participant_quota: int
	helper_only_quota: int = 4
	helper_and_participant_quota: int = 2
	participant_filled: int = 0
	helper_only_filled: int = 0
	helper_and_participant_filled: int = 0

	@property
	def participant_remaining(self) -> int:
		return self.participant_quota - self.participant_filled

	@property
	def helper_only_remaining(self) -> int:
		return self.helper_only_quota - self.helper_only_filled

	@property
	def helper_and_participant_remaining(self) -> int:
		return self.helper_and_participant_quota - self.helper_and_participant_filled


@dataclass
class Student:
	timestamp: datetime
	email: str
	class_name: str
	class_number: int
	grade: int
	helper: bool
	accept_other: bool
	preferences: List[str]
	allocated_workshop: str = ""
	status: str = "unallocated"


def load_quota_csv(path: Path) -> Dict[str, WorkshopState]:
	workshops: Dict[str, WorkshopState] = {}

	with path.open("r", encoding="utf-8-sig", newline="") as f:
		reader = csv.DictReader(f)
		for row in reader:
			raw_name = collapse_spaces(row.get(QUOTA_NAME, ""))
			if not raw_name:
				continue

			key = normalize_workshop_key(raw_name)
			if not key:
				continue

			quota = parse_int(row.get(QUOTA_QUOTA, "0"), default=0)
			helper_and_participant_quota = 4 if key == WECHAT_KEY else 2
			workshops[key] = WorkshopState(
				name=raw_name,
				participant_quota=quota,
				helper_and_participant_quota=helper_and_participant_quota,
			)

	return workshops


def load_and_dedupe_students(path: Path) -> List[Student]:
	latest_by_student: Dict[str, Student] = {}

	with path.open("r", encoding="utf-8-sig", newline="") as f:
		reader = csv.DictReader(f)
		for row in reader:
			ts = parse_timestamp(row.get(PREF_TIMESTAMP, ""))
			email = collapse_spaces(row.get(PREF_EMAIL, "")).lower()
			class_name = collapse_spaces(row.get(PREF_CLASS, ""))
			class_number = parse_int(row.get(PREF_CLASS_NO, "0"), default=0)
			grade = parse_grade(class_name)
			helper = helper_flag(row.get(PREF_HELPER, ""))
			accept_other = yes_flag(row.get(PREF_ACCEPT_OTHER, ""))

			prefs = [
				collapse_spaces(row.get(PREF_1, "")),
				collapse_spaces(row.get(PREF_2, "")),
				collapse_spaces(row.get(PREF_3, "")),
			]

			student = Student(
				timestamp=ts,
				email=email,
				class_name=class_name,
				class_number=class_number,
				grade=grade,
				helper=helper,
				accept_other=accept_other,
				preferences=prefs,
			)

			key = email if email else f"{class_name}-{class_number}"

			prev = latest_by_student.get(key)
			if prev is None or student.timestamp > prev.timestamp:
				latest_by_student[key] = student

	students = list(latest_by_student.values())
	students.sort(
		key=lambda s: (
			priority_group(s),
			s.grade,
			s.class_name,
			s.class_number,
			s.email,
		)
	)
	return students


def sync_workshop_names(students: List[Student], workshops: Dict[str, WorkshopState]) -> None:
	# Prefer workshop display names from student preference text when keys match.
	for student in students:
		for pref in student.preferences:
			if not pref:
				continue
			key = normalize_workshop_key(pref)
			if key in workshops:
				workshops[key].name = pref


def priority_group(student: Student) -> int:
	high_grade = 3 <= student.grade <= 5
	low_grade = 1 <= student.grade <= 2

	if high_grade and student.helper:
		return 0
	if high_grade and not student.helper:
		return 1
	if low_grade and student.helper:
		return 2
	if low_grade and not student.helper:
		return 3
	return 4


def try_assign(student: Student, workshop: WorkshopState) -> bool:
	if workshop.participant_remaining > 0:
		workshop.participant_filled += 1
		student.allocated_workshop = workshop.name
		if student.helper and workshop.helper_and_participant_remaining > 0:
			workshop.helper_and_participant_filled += 1
			student.status = "helper and participant"
		else:
			student.status = "participant"
		return True

	if student.helper and workshop.helper_only_remaining > 0:
		workshop.helper_only_filled += 1
		student.allocated_workshop = workshop.name
		student.status = "helper only"
		return True

	return False


def try_assign_helper_and_participant(student: Student, workshop: WorkshopState) -> bool:
	if not student.helper:
		return False
	if workshop.participant_remaining <= 0:
		return False
	if workshop.helper_and_participant_remaining <= 0:
		return False

	workshop.participant_filled += 1
	workshop.helper_and_participant_filled += 1
	student.allocated_workshop = workshop.name
	student.status = "helper and participant"
	return True


def try_assign_participant_only(student: Student, workshop: WorkshopState) -> bool:
	if workshop.participant_remaining <= 0:
		return False

	workshop.participant_filled += 1
	student.allocated_workshop = workshop.name
	student.status = "participant"
	return True


def round_one_allocate(students: List[Student], workshops: Dict[str, WorkshopState]) -> None:
	for group_id in range(5):
		group_students = [s for s in students if priority_group(s) == group_id and not s.allocated_workshop]
		for student in group_students:
			if student.helper:
				# Helper-first flow: try helper+participant in choice 1 -> 2 -> 3.
				for pref in student.preferences:
					if not pref:
						continue
					key = normalize_workshop_key(pref)
					workshop = workshops.get(key)
					if workshop is None:
						continue
					if try_assign_helper_and_participant(student, workshop):
						break

				if student.allocated_workshop:
					continue

				# If helper quota is full, fall back to participant in choice 1.
				first_pref = student.preferences[0] if student.preferences else ""
				if first_pref:
					first_key = normalize_workshop_key(first_pref)
					first_workshop = workshops.get(first_key)
					if first_workshop and try_assign_participant_only(student, first_workshop):
						continue

				# If choice 1 has no participant seat, still allow helper-only on chosen workshops.
				for pref in student.preferences:
					if not pref:
						continue
					key = normalize_workshop_key(pref)
					workshop = workshops.get(key)
					if workshop is None:
						continue
					if student.helper and workshop.helper_only_remaining > 0:
						workshop.helper_only_filled += 1
						student.allocated_workshop = workshop.name
						student.status = "helper only"
						break
			else:
				for pref in student.preferences:
					if not pref:
						continue
					key = normalize_workshop_key(pref)
					workshop = workshops.get(key)
					if workshop is None:
						continue
					if try_assign(student, workshop):
						break


def round_two_clearing(students: List[Student], workshops: Dict[str, WorkshopState]) -> None:
	workshop_keys = list(workshops.keys())

	for group_id in range(5):
		group_students = [
			s
			for s in students
			if priority_group(s) == group_id and not s.allocated_workshop and s.accept_other
		]

		for student in group_students:
			pref_keys = {normalize_workshop_key(p) for p in student.preferences if p}

			other_keys = [k for k in workshop_keys if k not in pref_keys]
			if not other_keys:
				other_keys = workshop_keys[:]

			other_keys.sort(
				key=lambda k: (
					-(workshops[k].participant_remaining),
					-(workshops[k].helper_only_remaining if student.helper else 0),
					workshops[k].name,
				)
			)

			for key in other_keys:
				if try_assign(student, workshops[key]):
					break


def write_student_result(path: Path, students: List[Student]) -> None:
	fieldnames = [
		"Email",
		"Class",
		"Class number",
		"Allocated workshop",
		"Status",
	]
	with path.open("w", encoding="utf-8", newline="") as f:
		writer = csv.DictWriter(f, fieldnames=fieldnames)
		writer.writeheader()
		for s in sorted(students, key=lambda x: (x.class_name, x.class_number, x.email)):
			writer.writerow(
				{
					"Email": s.email,
					"Class": s.class_name,
					"Class number": s.class_number,
					"Allocated workshop": s.allocated_workshop,
					"Status": s.status,
				}
			)


def write_workshop_result(path: Path, workshops: Dict[str, WorkshopState]) -> None:
	fieldnames = [
		"Workshop",
		"Participant quota",
		"Filled participant places",
		"Remaining participant places",
		"Helper-only quota",
		"Helper-only filled",
		"Helper and participant quota",
		"Helper and participant",
		"Total helpers",
	]

	items = sorted(workshops.values(), key=lambda w: w.name)
	with path.open("w", encoding="utf-8", newline="") as f:
		writer = csv.DictWriter(f, fieldnames=fieldnames)
		writer.writeheader()
		for w in items:
			writer.writerow(
				{
					"Workshop": w.name,
					"Participant quota": w.participant_quota,
					"Filled participant places": w.participant_filled,
					"Remaining participant places": w.participant_remaining,
					"Helper-only quota": w.helper_only_quota,
					"Helper-only filled": w.helper_only_filled,
					"Helper and participant quota": w.helper_and_participant_quota,
					"Helper and participant": w.helper_and_participant_filled,
					"Total helpers": w.helper_only_filled + w.helper_and_participant_filled,
				}
			)


def main() -> None:
	base_dir = Path(__file__).resolve().parent

	parser = argparse.ArgumentParser(description="Workshop allocation script")
	parser.add_argument(
		"--preference-csv",
		default=str(base_dir / "Ignite 18_ Workshop preferences and students ambassador recruitment (Responses) - Form Responses 1.csv"),
		help="Path to preference CSV",
	)
	parser.add_argument(
		"--quota-csv",
		default=str(base_dir / "Workshop Allocation_draft - Sheet3.csv"),
		help="Path to quota CSV",
	)
	parser.add_argument(
		"--out-students",
		default=str(base_dir / "allocated_students.csv"),
		help="Path to output allocation-by-student CSV",
	)
	parser.add_argument(
		"--out-workshops",
		default=str(base_dir / "allocated_workshops.csv"),
		help="Path to output workshop-summary CSV",
	)
	args = parser.parse_args()

	preference_path = Path(args.preference_csv)
	quota_path = Path(args.quota_csv)
	out_students = Path(args.out_students)
	out_workshops = Path(args.out_workshops)

	workshops = load_quota_csv(quota_path)
	students = load_and_dedupe_students(preference_path)
	sync_workshop_names(students, workshops)

	round_one_allocate(students, workshops)
	round_two_clearing(students, workshops)

	write_student_result(out_students, students)
	write_workshop_result(out_workshops, workshops)

	total_students = len(students)
	allocated_students = sum(1 for s in students if s.allocated_workshop)
	helper_only = sum(1 for s in students if s.status == "helper only")

	print(f"Students (deduped): {total_students}")
	print(f"Allocated: {allocated_students}")
	print(f"Unallocated: {total_students - allocated_students}")
	print(f"Helper-only allocations: {helper_only}")
	print(f"Student result written to: {out_students}")
	print(f"Workshop summary written to: {out_workshops}")


if __name__ == "__main__":
	main()
