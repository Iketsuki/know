N = int(input())
if N == 0:
    print("Empty array")
else:
    arr = list(map(float, input().split()))
    X = float(input())
    Count = 0
    for i in range(N):
        if arr[i] > X:
            Count = Count + 1
    print(Count)
