N = int(input())
if N == 0:
    print("Empty array")
else:
    arr = list(map(int, input().split()))
    Min = arr[0]
    for i in range(1, N):
        if arr[i] < Min:
            Min = arr[i]
    print(Min)
