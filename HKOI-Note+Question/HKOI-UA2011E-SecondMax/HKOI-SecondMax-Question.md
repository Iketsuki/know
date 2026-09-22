### Task ID: UA2011E
### Task Title: Find Second Maximum in Array (Extension)

-----

### 📚 Quick Lesson

**Concept:**
To find the second largest value in an array, you can keep track of both the largest and the second largest as you loop through the array.

**Example:**
Given an array of N integers, find the second largest:
```python
arr = [3, 7, 2, 7, 1]
max1 = max2 = float('-inf')
for i in range(len(arr)):
    if arr[i] > max1:
        max2 = max1
        max1 = arr[i]
    elif arr[i] > max2 and arr[i] != max1:
        max2 = arr[i]
print(max2)
```
This prints `3` for the above array.

-----

### 🖥️ Main Statement

**Story:**
Read an integer N, then read N integers into an array. Print the second largest value in the array. If all values are equal, print "No second max".

**Input:**
- The first line contains an integer N (2 ≤ N ≤ 100)
- The second line contains N integers

**Output:**
- Print the second largest value, or "No second max" if it does not exist

**Sample Tests:**
Input:
```
5
3 7 2 7 1
```
Output:
```
3
```

Input:
```
4
5 5 5 5
```
Output:
```
No second max
```

**Starter Code**
Copy the code and edit it if you need.

```python
N = int(input())
arr = list(map(int, input().split()))
# TODO: Find and print the second largest value using index i
```
