N = int(input())
arr = list(map(int, input().split()))
max1 = max2 = float('-inf')
for i in range(N):
    if arr[i] > max1:
        max2 = max1
        max1 = arr[i]
    elif arr[i] > max2 and arr[i] != max1:
        max2 = arr[i]
if max2 == float('-inf'):
    print("No second max")
else:
    print(max2)
