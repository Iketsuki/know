N = int(input())
if N == 0:
    print("Empty array")
else:
    arr = list(map(float, input().split()))
    Total = 0
    for i in range(N):
        Total = Total + arr[i]
    if Total == int(Total):
        print(int(Total))
    else:
        print(Total)
