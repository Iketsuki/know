### Task ID: UA2015E
### Task Title: Find Median in Array (Extension)

-----

### 📚 Quick Lesson

**Concept:**
To find the median, sort the array and pick the middle value (or average the two middle values if even length).

**Example:**
Given an array, find the median:
```python
arr = [3, 1, 4, 2]
arr.sort()
N = len(arr)
if N % 2 == 1:
    median = arr[N//2]
else:
    median = (arr[N//2-1] + arr[N//2]) / 2
print(median)
```
This prints `2.5`.

-----

### 🖥️ Main Statement

**Story:**
Read an integer N, then read N integers into an array. Print the median value (as a float if needed).

**Input:**
- The first line contains an integer N (1 ≤ N ≤ 100)
- The second line contains N integers

**Output:**
- Print the median value

**Sample Tests:**
Input:
```
5
1 2 3 4 5
```
Output:
```
3
```

Input:
```
4
3 1 4 2
```
Output:
```
2.5
```

**Starter Code**
Copy the code and edit it if you need.

```python
N = int(input())
arr = list(map(int, input().split()))
# TODO: Find and print the median value using index i
```
