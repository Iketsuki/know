N = int(input())
if N == 0:
    print("Empty array")
else:
    arr = list(map(float, input().split()))
    Sum = 0
    for i in range(N):
        Sum = Sum + arr[i]
    Average = Sum / N
    print(f"{Average:.2f}")
