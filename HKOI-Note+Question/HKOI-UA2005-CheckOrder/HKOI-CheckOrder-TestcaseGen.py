import os
import random

def gen_case(n, arr, idx, expected):
    case_dir = os.path.join(os.path.dirname(__file__), 'tests')
    os.makedirs(case_dir, exist_ok=True)
    in_path = os.path.join(case_dir, f"{idx}.in")
    out_path = os.path.join(case_dir, f"{idx}.out")
    with open(in_path, 'w') as fin:
        fin.write(f"{n}\n")
        if n > 0:
            fin.write(' '.join(map(str, arr)) + '\n')
    with open(out_path, 'w') as fout:
        fout.write(expected)

def is_ascending(arr):
    return all(arr[i] <= arr[i+1] for i in range(len(arr)-1))

def main():
    # Edge cases
    gen_case(0, [], "1-1", "Empty array\n")  # empty array
    gen_case(1, [42], "1-2", "Ascending\n")   # single element
    gen_case(5, [7,7,7,7,7], "1-3", "Ascending\n") # all equal
    gen_case(3, [1,2,3], "1-4", "Ascending\n") # strictly ascending
    gen_case(3, [3,2,1], "1-5", "Not ascending\n") # strictly descending
    # Sample test
    gen_case(5, [1,2,3,4,5], "1-6", "Ascending\n")
    gen_case(4, ["apple","banana","cherry","date"], "1-7", "Ascending\n")
    gen_case(3, [2,2,2], "1-8", "Ascending\n")
    gen_case(4, [5,4,3,2], "1-9", "Not ascending\n")
    # Random cases
    for i in range(10, 16):
        n = random.randint(1, 100)
        arr = [random.randint(-100, 100) for _ in range(n)]
        expected = "Ascending\n" if is_ascending(arr) else "Not ascending\n"
        gen_case(n, arr, f"1-{i}", expected)

if __name__ == "__main__":
    main()
