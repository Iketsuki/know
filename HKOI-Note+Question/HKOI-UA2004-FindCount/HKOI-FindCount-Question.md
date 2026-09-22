### Task ID: UA2004
### Task Title: Find Count in Array (Condition)

-----

### 📚 Quick Lesson

**Concept:**
- Counting elements in an array that satisfy a condition
- Handling edge cases (empty array, all elements satisfy/do not satisfy condition)
- Integer and float arrays

-----

### 🖥️ Main Statement

**Story:**
Write a program that reads an integer N (array length), then reads N numbers (integers or floats) into an array, and an integer X. Print the count of elements in the array that are greater than X. If the array is empty (N=0), print "Empty array".

**Input:**
- The first line contains an integer N (0 ≤ N ≤ 100)
- The second line contains N numbers (if N > 0), separated by spaces
- The third line contains an integer X

**Output:**
- If N = 0, print "Empty array"
- Otherwise, print the count of elements greater than X

**Sample Tests:**
Input:
```
5
3 7 2 7 1
4
```
Output:
```
2
```

Input:
```
3
1.5 2.5 3.5
2
```
Output:
```
2
```

Input:
```
0
5
```
Output:
```
Empty array
```

Input:
```
4
5 5 5 5
5
```
Output:
```
0
```

**Starter Code**
Copy the code and edit it if you need.

```python
N = int(input())
if N == 0:
    print("Empty array")
else:
    arr = list(map(float, input().split()))
    X = float(input())
    # TODO: Count and print the number of elements greater than X
```
