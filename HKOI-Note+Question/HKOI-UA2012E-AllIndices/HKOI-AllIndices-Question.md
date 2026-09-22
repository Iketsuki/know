### Task ID: UA2012E
### Task Title: Find All Indices of a Value (Extension)

-----

### 📚 Quick Lesson

**Concept:**
To find all indices where a value occurs in an array, use a loop and check each element.

**Example:**
Given an array and a value X, print all indices where X occurs:
```python
arr = [1, 2, 3, 2, 4]
X = 2
for i in range(len(arr)):
    if arr[i] == X:
        print(i)
```
This prints:
```
1
3
```

-----

### 🖥️ Main Statement

**Story:**
Read an integer N, then read N integers into an array, and a value X. Print all indices (0-based) where X occurs, one per line. If X does not occur, print "Not found".

**Input:**
- The first line contains an integer N (1 ≤ N ≤ 100)
- The second line contains N integers
- The third line contains the value X

**Output:**
- Print all indices where X occurs, or "Not found" if X does not occur

**Sample Tests:**
Input:
```
5
1 2 3 2 4
2
```
Output:
```
1
3
```

Input:
```
4
5 6 7 8
3
```
Output:
```
Not found
```

**Starter Code**
Copy the code and edit it if you need.

```python
N = int(input())
arr = list(map(int, input().split()))
X = int(input())
# TODO: Print all indices where arr[i] == X
```
