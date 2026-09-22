N = int(input())
if N == 0:
    print(0)
    print(0)
    print("None")
    print("None")
else:
    arr = input().split()
    nums = []
    strs = []
    for s in arr:
        try:
            val = float(s)
            nums.append(val)
        except ValueError:
            strs.append(s)
    print(len(nums))
    print(len(strs))
    if nums:
        print(max(nums))
    else:
        print("None")
    if strs:
        longest = max(strs, key=len)
        print(longest)
    else:
        print("None")
