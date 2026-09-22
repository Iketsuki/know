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

def main():
    # Edge cases
    gen_case(0, [], 5, "1-1", "Empty array\n")  # empty array
    gen_case(1, [42], 42, "1-2", "0\n")         # single element, not greater
    gen_case(5, [7,7,7,7,7], 7, "1-3", "0\n")   # all equal
    gen_case(3, [-5, 0, 5], 0, "1-4", "1\n")    # negative and positive
    # Sample test
    gen_case(5, [3,7,2,7,1], 4, "1-5", "2\n")
    gen_case(3, [1.5,2.5,3.5], 2, "1-6", "2\n")
    # Random cases
    for i in range(7, 16):
        n = random.randint(1, 100)
        arr = [random.uniform(-100, 100) for _ in range(n)]
        x = random.uniform(-100, 100)
        count = sum(1 for v in arr if v > x)
        expected = f"{count}\n"
        gen_case(n, arr, x, f"1-{i}", expected)

if __name__ == "__main__":
    main()
