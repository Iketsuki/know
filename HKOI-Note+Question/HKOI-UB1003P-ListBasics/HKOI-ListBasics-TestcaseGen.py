import os

def write_case(folder, name, n, arr, v):
    in_path = os.path.join(folder, name + '.in')
    out_path = os.path.join(folder, name + '.out')
    with open(in_path, 'w') as fi:
        fi.write(str(n) + '\n')
        fi.write(' '.join(map(str, arr)) + '\n')
        fi.write(str(v) + '\n')
    # expected output
    cnt = 0
    idx = -1
    for i in range(len(arr)):
        if arr[i] == v:
            cnt += 1
            if idx == -1:
                idx = i
    # max
    imax = 0
    for i in range(1, len(arr)):
        if arr[i] > arr[imax]:
            imax = i
    maxval = arr[imax]
    # strict ascending
    is_strict_asc = True
    for i in range(1, len(arr)):
        if arr[i] <= arr[i-1]:
            is_strict_asc = False
            break

    with open(out_path, 'w') as fo:
        fo.write(str(cnt) + '\n')
        fo.write(str(idx) + '\n')
        fo.write(str(maxval) + '\n')
        fo.write(('YES' if is_strict_asc else 'NO') + '\n')

def main():
    base = os.path.dirname(__file__)
    tests_dir = os.path.join(base, 'tests')
    os.makedirs(tests_dir, exist_ok=True)

    # Boundary cases
    write_case(tests_dir, '1-1_min_n_single_1', 1, [5], 5)
    write_case(tests_dir, '1-2_min_n_not_found', 1, [5], 3)
    write_case(tests_dir, '1-3_all_equal', 5, [2,2,2,2,2], 2)
    write_case(tests_dir, '1-4_strict_asc', 4, [1,2,3,4], 4)
    write_case(tests_dir, '1-5_strict_desc', 4, [4,3,2,1], 3)
    # Larger sizes
    write_case(tests_dir, '1-6_random_small', 7, [1,3,3,7,9,3,10], 3)
    write_case(tests_dir, '1-7_max_at_start', 5, [100,1,2,3,4], 100)
    write_case(tests_dir, '1-8_max_at_end', 5, [1,2,3,4,101], 50)

    print('Testcase files created in', tests_dir)

if __name__ == '__main__':
    main()
