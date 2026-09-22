import os
import random

def gen_case(n, arr, x, idx, expected):
    case_dir = os.path.join(os.path.dirname(__file__), 'tests')
    os.makedirs(case_dir, exist_ok=True)
    in_path = os.path.join(case_dir, f"{idx}.in")
    out_path = os.path.join(case_dir, f"{idx}.out")
    with open(in_path, 'w') as fin:
        fin.write(f"{n}\n")
        if n > 0:
            fin.write(' '.join(map(str, arr)) + '\n')
        fin.write(f"{x}\n")
    with open(out_path, 'w') as fout:
        fout.write(expected)

def get_order(arr):
    is_asc = all(arr[i] <= arr[i+1] for i in range(len(arr)-1))
    is_desc = all(arr[i] >= arr[i+1] for i in range(len(arr)-1))
    if is_asc:
        return "Ascending\n"
    elif is_desc:
        return "Descending\n"
    else:
        return "Not ordered\n"

def main():
    # Edge cases
    gen_case(0, [], 'apple', "1-1", "Empty array\nEmpty array\n")  # empty array
    gen_case(1, [42], 42, "1-2", "Ascending\n1\n")         # single element
    gen_case(5, [7,7,7,7,7], 7, "1-3", "Ascending\n5\n")   # all equal
    gen_case(3, [1,2,3], 2, "1-4", "Ascending\n1\n")        # strictly ascending
    gen_case(3, [3,2,1], 2, "1-5", "Descending\n1\n")      # strictly descending
    # Sample test
    gen_case(5, [1,2,3,4,5], 3, "1-6", "Ascending\n1\n")
    gen_case(4, ["apple","banana","cherry","date"], "banana", "1-7", "Ascending\n1\n")
    gen_case(3, [2,2,2], 2, "1-8", "Ascending\n3\n")
    gen_case(4, [5,4,3,2], 3, "1-9", "Descending\n1\n")
    # Random cases
    for i in range(10, 16):
        n = random.randint(1, 100)
        arr = [random.choice([random.randint(-100, 100), random.choice(['a','b','c','d','e'])]) for _ in range(n)]
        x = random.choice(arr) if arr else 'x'
        order = get_order(arr) if n > 0 else "Empty array\n"
        count = arr.count(x) if n > 0 else "Empty array"
        expected = f"{order}{count}\n" if n > 0 else "Empty array\nEmpty array\n"
        gen_case(n, arr, x, f"1-{i}", expected)

if __name__ == "__main__":
    main()
