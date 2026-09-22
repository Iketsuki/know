import os
import random
import string

def gen_case(n, arr, c, idx, expected):
    case_dir = os.path.join(os.path.dirname(__file__), 'tests')
    os.makedirs(case_dir, exist_ok=True)
    in_path = os.path.join(case_dir, f"{idx}.in")
    out_path = os.path.join(case_dir, f"{idx}.out")
    with open(in_path, 'w') as fin:
        fin.write(f"{n}\n")
        if n > 0:
            fin.write(' '.join(arr) + '\n')
        fin.write(f"{c}\n")
    with open(out_path, 'w') as fout:
        fout.write(expected)

def main():
    # Edge cases
    gen_case(0, [], 'a', "1-1", "Empty array\nEmpty array\nEmpty array\n")  # empty array
    gen_case(1, ['apple'], 'a', "1-2", "apple\napple\n1\n")         # single element
    gen_case(3, ['aaa','aaa','aaa'], 'a', "1-3", "aaa\naaa\n3\n")   # all equal
    gen_case(3, ['cat','car','cup'], 'c', "1-4", "cat\ncar\n3\n")   # all start with c
    gen_case(3, ['dog','elephant','fox'], 'a', "1-5", "elephant\ndog\n0\n") # none start with a
    # Sample test
    gen_case(5, ['apple','banana','cherry','date','apricot'], 'a', "1-6", "banana\napple\n2\n")
    # Random cases
    for i in range(7, 16):
        n = random.randint(1, 10)
        arr = [''.join(random.choices(string.ascii_lowercase, k=random.randint(2,8))) for _ in range(n)]
        c = random.choice(string.ascii_lowercase)
        if n == 0:
            expected = "Empty array\nEmpty array\nEmpty array\n"
        else:
            longest = max(arr, key=len)
            shortest = min(arr, key=len)
            count = sum(1 for s in arr if s.lower().startswith(c))
            expected = f"{longest}\n{shortest}\n{count}\n"
        gen_case(n, arr, c, f"1-{i}", expected)

if __name__ == "__main__":
    main()
