### Task ID: UA2014E
### Task Title: Rotate Array Left (Extension)

-----

### 📚 Quick Lesson

**Concept:**
To rotate an array left by one position, move each element to the previous index, and the first element to the end.

**Example:**
Given an array, rotate it left by one:
```python
arr = [1, 2, 3, 4, 5]
first = arr[0]
for i in range(1, len(arr)):
    arr[i-1] = arr[i]
arr[-1] = first
print(arr)
```
This prints `[2, 3, 4, 5, 1]`.

-----

### 🖥️ Main Statement

**Story:**
Read an integer N, then read N integers into an array. Print the array after rotating it left by one position, space-separated.

**Input:**
- The first line contains an integer N (2 ≤ N ≤ 100)
- The second line contains N integers

**Output:**
- Print the rotated array, space-separated

**Sample Tests:**
Input:
```
5
1 2 3 4 5
```
Output:
```
2 3 4 5 1
```

Input:
```
3
7 8 9
```
Output:
```
8 9 7
```

**Starter Code**
Copy the code and edit it if you need.

```python
N = int(input())
arr = list(map(int, input().split()))
# TODO: Rotate the array left by one using index i
```
