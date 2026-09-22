N = int(input())
arr = list(map(int, input().split()))
first = arr[0]
for i in range(1, N):
    arr[i-1] = arr[i]
arr[-1] = first
print(' '.join(map(str, arr)))
