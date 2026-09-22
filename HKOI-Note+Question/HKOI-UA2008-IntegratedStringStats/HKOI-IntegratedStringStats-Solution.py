N = int(input())
if N == 0:
    for _ in range(3):
        print("Empty array")
else:
    arr = input().split()
    C = input().strip().lower()
    longest = arr[0]
    shortest = arr[0]
    count = 0
    for s in arr:
        if len(s) > len(longest):
            longest = s
        if len(s) < len(shortest):
            shortest = s
        if s.lower().startswith(C):
            count += 1
    print(longest)
    print(shortest)
    print(count)
