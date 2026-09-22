### Task ID: UA2010
### Task Title: Reverse an Array

-----

### 📚 Quick Lesson

**Concept:**
To reverse an array, you can use a loop to print elements from the last index to the first.

**Example:**
Given an array of N integers, print them in reverse order:
```python
arr = [1, 2, 3, 4, 5]
for i in range(len(arr)-1, -1, -1):
    print(arr[i])
```
This prints:
```
5
4
3
2
1
```

-----

### 🖥️ Main Statement

**Story:**
Read an integer N, then read N integers into an array. Print the array in reverse order, one element per line.

**Input:**
- The first line contains an integer N (1 ≤ N ≤ 100)
- The second line contains N integers

**Output:**
- Print the N integers in reverse order, one per line

**Sample Tests:**
Input:
```
5
1 2 3 4 5
```
Output:
```
5
4
3
2
1
```

**Starter Code**
Copy the code and edit it if you need.

```python
N = int(input())
arr = list(map(int, input().split()))
# TODO: Print the array in reverse order using index i
```
