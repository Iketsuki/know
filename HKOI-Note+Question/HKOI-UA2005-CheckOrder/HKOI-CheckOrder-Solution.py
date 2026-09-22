N = int(input())
if N == 0:
    print("Empty array")
else:
    arr = input().split()
    IsAscending = True
    for i in range(N-1):
        if arr[i] > arr[i+1]:
            IsAscending = False
            break
    if IsAscending:
        print("Ascending")
    else:
        print("Not ascending")
