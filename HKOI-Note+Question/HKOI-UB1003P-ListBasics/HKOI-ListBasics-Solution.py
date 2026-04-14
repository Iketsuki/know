import sys

def main():
    n = int(sys.stdin.readline())
    parts = sys.stdin.readline().split()
    arr = [int(parts[i]) for i in range(len(parts))]
    v = int(sys.stdin.readline())

    # 1. count occurrences of v
    cnt = 0
    i = 0
    while i < len(arr):
        if arr[i] == v:
            cnt = cnt + 1
        i = i + 1

    # 2. first index of v (0-based) or -1
    idx = -1
    i = 0
    while i < len(arr):
        if arr[i] == v:
            idx = i
            break
        i = i + 1

    # 3. max value (manual)
    imax = 0
    i = 1
    while i < len(arr):
        if arr[i] > arr[imax]:
            imax = i
        i = i + 1
    maxval = arr[imax]

    # 4. strictly ascending check
    is_strict_asc = True
    i = 1
    while i < len(arr):
        if arr[i] <= arr[i-1]:
            is_strict_asc = False
            break
        i = i + 1

    print(cnt)
    print(idx)
    print(maxval)
    print('YES' if is_strict_asc else 'NO')

if __name__ == '__main__':
    main()
