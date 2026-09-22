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

def main():
    # Edge cases
    gen_case(0, [], "1-1", "Empty array\nEmpty array\nEmpty array\nEmpty array\n")  # empty array
    gen_case(1, [42], "1-2", "42\n42\n42.00\n0\n")         # single element
    gen_case(5, [7,7,7,7,7], "1-3", "7\n7\n7.00\n0\n")   # all equal
    gen_case(3, [-5, 0, 5], "1-4", "5\n-5\n0.00\n1\n")    # negative and positive
    # Sample test
    gen_case(5, [3,7,2,7,1], "1-5", "7\n1\n4.00\n2\n")
    # Random cases
    for i in range(6, 16):
        n = random.randint(1, 100)
        arr = [random.uniform(-100, 100) for _ in range(n)]
        if n == 0:
            expected = "Empty array\n"*4
        else:
            mx = max(arr)
            mn = min(arr)
            avg = sum(arr)/n
            cnt = sum(1 for v in arr if v > avg)
            mx_str = f"{int(mx)}" if mx == int(mx) else f"{mx}"
            mn_str = f"{int(mn)}" if mn == int(mn) else f"{mn}"
            expected = f"{mx_str}\n{mn_str}\n{avg:.2f}\n{cnt}\n"
        gen_case(n, arr, f"1-{i}", expected)

if __name__ == "__main__":
    main()
