### Task ID: UA2003
### Task Title: Find Total in Array

-----

### 📚 Quick Lesson

**Concept:**
- Calculating the sum of array elements
- Handling edge cases (empty array, all equal values)
- Integer and float arrays

-----

### 🖥️ Main Statement

**Story:**
Write a program that reads an integer N (array length), then reads N numbers (integers or floats) into an array. Print the total (sum) of the array. If the array is empty (N=0), print "Empty array".

**Input:**
- The first line contains an integer N (0 ≤ N ≤ 100)
- The second line contains N numbers (if N > 0), separated by spaces

**Output:**
- If N = 0, print "Empty array"
- Otherwise, print the total (sum) value

**Sample Tests:**
Input:
```
5
3 7 2 7 1
```
Output:
```
20
```

Input:
```
3
1.5 2.5 3.5
```
Output:
```
7.5
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
20
```

**Starter Code**
Copy the code and edit it if you need.

```python
N = int(input())
if N == 0:
    print("Empty array")
else:
    arr = list(map(float, input().split()))
    # TODO: Find and print the total (sum) value
```
