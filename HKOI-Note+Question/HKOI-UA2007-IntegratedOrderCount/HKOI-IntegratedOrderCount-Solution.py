N = int(input())
if N == 0:
    for _ in range(2):
        print("Empty array")
else:
    arr = input().split()
    X = input()
    is_asc = True
    is_desc = True
    for i in range(N-1):
        if arr[i] > arr[i+1]:
            is_asc = False
        if arr[i] < arr[i+1]:
            is_desc = False
    if is_asc:
        print("Ascending")
    elif is_desc:
        print("Descending")
    else:
        print("Not ordered")
    count = 0
    for i in range(N):
        if arr[i] == X:
            count += 1
    print(count)
