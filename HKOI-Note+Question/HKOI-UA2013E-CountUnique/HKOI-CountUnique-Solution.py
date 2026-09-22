N = int(input())
arr = list(map(int, input().split()))
unique = set()
for i in range(N):
    unique.add(arr[i])
print(len(unique))
