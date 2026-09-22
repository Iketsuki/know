N = int(input())
if N == 0:
    for _ in range(4):
        print("Empty array")
else:
    arr = list(map(float, input().split()))
    Max = arr[0]
    Min = arr[0]
    Sum = 0
    for i in range(N):
        if arr[i] > Max:
            Max = arr[i]
        if arr[i] < Min:
            Min = arr[i]
        Sum = Sum + arr[i]
    Average = Sum / N
    Count = 0
    for i in range(N):
        if arr[i] > Average:
            Count = Count + 1
    if Max == int(Max):
        print(int(Max))
    else:
        print(Max)
    if Min == int(Min):
        print(int(Min))
    else:
        print(Min)
    print(f"{Average:.2f}")
    print(Count)
