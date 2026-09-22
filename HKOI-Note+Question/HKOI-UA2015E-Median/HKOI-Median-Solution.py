N = int(input())
arr = list(map(int, input().split()))
arr.sort()
if N % 2 == 1:
    print(arr[N//2])
else:
    print((arr[N//2-1] + arr[N//2]) / 2)
