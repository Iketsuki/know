# 2D-array Scaffolding Proposal

## Goal
Teach students safe 2D indexing, traversal, updates, and simple algorithms using minimal, focused blanks that train indices and loop structure.

## Learning objectives
- Read/access elements (`a[row][col]`)
- Iterate rows and columns with index loops (`for i in range(___, ___)` / `for j in range(___, ___)`)
- Update elements and store results (`res[___][___] = ...`)
- Use simple conditionals on elements (`if ___:`)
- Compute row/col/diagonal aggregates

## Scaffold levels (progression)
1. Access single element (1 blank: `a[___][___]`) — focus: row/col positions.
2. Row traversal (1 blank in `range`) — `for j in range(___, ___): print(a[s][j])`.
3. Column traversal (1 blank in `range`) — mirror of row traversal.
4. Nested loops read-only (2 blanks: outer/inner ranges) — full matrix traversal pattern.
5. Update cell (2 blanks: index positions in `res[___][___]`) — storing computed values.
6. Conditional writes (1 blank in `if ___:`) — e.g., replace negatives or zeros.
7. Simple algorithms (2 blanks): row sums, diagonal sum, transpose mapping `res[___][___] = a[___][___]`.
8. Short synthesis (2 blanks): flattening, find max with indices.

## Exercise template fields
- `id`, `title`, `skill`, `difficulty`
- `question` — 1–2 sentence prompt
- `initialCode` — scaffolded Python using `___` for blanks; prefer index-based loops
- `expectedOutput` — string or example output

## Blank conventions
- Use `range(___, ___)` or `range(___, ___, ___)` for loops depending on task complexity.
- Use `if ___:` for conditionals.
- Use `res[___][___]` or `a[___][___]` for index blanks.
- Prefer explicit bounds teaching (e.g., `range(len(a))`) but present them as blanks when the lesson aims to teach bounds.

## Hints & answers plan
- Create a parallel answers JSON file with filled-in code for each exercise.
- Include a one-line teacher hint explaining the key idea (index mapping, bounds, or conditional logic).

## Next steps
1. Approve this proposal.
2. Implement exercise templates (1-blank and 2-blank variants).
3. Draft the 15 beginner exercises and save them to `02_2d_simple.json`.
4. Generate the answers file and short hints.
5. Optionally run quick Python checks to validate `expectedOutput`.

---
Created for classroom-ready 2D-array scaffolding; ready for your approval.
