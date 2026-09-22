N = int(input())
arr = list(map(int, input().split()))
X = int(input())
found = False
for i in range(N):
    if arr[i] == X:
        print(i)
        found = True
if not found:
    print("Not found")
