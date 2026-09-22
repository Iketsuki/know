### Task ID: UA2000
### Task Title: Find Maximum in Array

-----

### 📚 Quick Lesson

**Concept:**
- Traversing an array to find the largest value
- Handling edge cases (empty array, all equal values)

-----

### 🖥️ Main Statement

**Story:**
Write a program that reads an integer N (array length), then reads N integers into an array. Print the maximum value in the array. If the array is empty (N=0), print "Empty array".

**Input:**
- The first line contains an integer N (0 ≤ N ≤ 100)
- The second line contains N integers (if N > 0)

**Output:**
- If N = 0, print "Empty array"
- Otherwise, print the maximum value in the array

**Sample Tests:**
Input:
```
5
3 7 2 7 1
```
Output:
```
7
```

Input:
```
0
```
Output:
```
Empty array
```

Input:
```
4
5 5 5 5
```
Output:
```
5
```

**Starter Code**
Copy the code and edit it if you need.

```python
N = int(input())
if N == 0:
    print("Empty array")
else:
    arr = list(map(int, input().split()))
    # TODO: Find and print the maximum value
```
