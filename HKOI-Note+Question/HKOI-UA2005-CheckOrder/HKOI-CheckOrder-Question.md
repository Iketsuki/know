### Task ID: UA2005
### Task Title: Check Ascending Order in Array

-----

### 📚 Quick Lesson

**Concept:**
- Checking if an array is in ascending order
- Handling edge cases (empty array, all equal values, single element)
- Integer, float, and string arrays

-----

### 🖥️ Main Statement

**Story:**
Write a program that reads an integer N (array length), then reads N elements (integers, floats, or strings) into an array. Print "Ascending" if the array is in ascending order, otherwise print "Not ascending". If the array is empty (N=0), print "Empty array".

**Input:**
- The first line contains an integer N (0 ≤ N ≤ 100)
- The second line contains N elements (if N > 0), separated by spaces

**Output:**
- If N = 0, print "Empty array"
- Otherwise, print "Ascending" or "Not ascending"

**Sample Tests:**
Input:
```
5
1 2 3 4 5
```
Output:
```
Ascending
```

Input:
```
4
apple banana cherry date
```
Output:
```
Ascending
```

Input:
```
3
2 2 2
```
Output:
```
Ascending
```

Input:
```
4
5 4 3 2
```
Output:
```
Not ascending
```

Input:
```
0
```
Output:
```
Empty array
```

**Starter Code**
Copy the code and edit it if you need.

```python
N = int(input())
if N == 0:
    print("Empty array")
else:
    arr = input().split()
    # TODO: Check and print if the array is in ascending order
```
