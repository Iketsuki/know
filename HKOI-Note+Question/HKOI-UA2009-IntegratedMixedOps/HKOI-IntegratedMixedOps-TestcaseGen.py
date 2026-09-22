import os
import random
import string

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
    gen_case(0, [], "1-1", "0\n0\nNone\nNone\n")  # empty array
    gen_case(4, ['cat','dog','fish','bird'], "1-2", "0\n4\nNone\nfish\n") # all strings
    gen_case(4, [1,2,3,4], "1-3", "4\n0\n4.0\nNone\n") # all numbers
    gen_case(6, [3.5,'apple',7,2.1,'banana',5], "1-4", "3\n2\n7.0\nbanana\n") # mixed
    # Random cases
    for i in range(5, 16):
        n = random.randint(1, 10)
        arr = []
        for _ in range(n):
            if random.random() < 0.5:
                arr.append(random.uniform(-100, 100))
            else:
                arr.append(''.join(random.choices(string.ascii_lowercase, k=random.randint(2,8))))
        nums = [float(x) for x in arr if isinstance(x, float) or (isinstance(x, str) and x.replace('.','',1).replace('-','',1).isdigit())]
        strs = [x for x in arr if isinstance(x, str) and not (x.replace('.','',1).replace('-','',1).isdigit())]
        expected = f"{len(nums)}\n{len(strs)}\n"
        expected += f"{max(nums)}\n" if nums else "None\n"
        expected += f"{max(strs, key=len)}\n" if strs else "None\n"
        gen_case(n, arr, f"1-{i}", expected)

if __name__ == "__main__":
    main()
