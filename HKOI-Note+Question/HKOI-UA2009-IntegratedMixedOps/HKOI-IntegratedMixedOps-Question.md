### Task ID: UA2009
### Task Title: Mixed Array Operations

-----

### 📚 Quick Lesson

**Concepts Combined:**
- Handling arrays of mixed types (integers, floats, strings)
- Counting numeric and string elements
- Finding the maximum numeric value and the longest string
- Handling edge cases (empty array, all numbers, all strings)

-----

### 🖥️ Main Statement

**Story:**
Write a program that reads an integer N (array length), then reads N elements (each can be an integer, float, or string) into an array. Print:
1. The count of numeric elements (integers or floats)
2. The count of string elements (non-numeric)
3. The maximum numeric value (or "None" if no numeric elements)
4. The longest string (or "None" if no string elements)

**Input:**
- The first line contains an integer N (0 ≤ N ≤ 100)
- The second line contains N elements (if N > 0), separated by spaces

**Output:**
- If N = 0, print 0, 0, None, None (one per line)
- Otherwise, print:
    - The count of numeric elements
    - The count of string elements
    - The maximum numeric value (or "None")
    - The longest string (or "None")

**Sample Tests:**
Input:
```
6
3.5 apple 7 2.1 banana 5
```
Output:
```
3
2
7.0
banana
```

Input:
```
0
```
Output:
```
0
0
None
None
```

Input:
```
4
cat dog fish bird
```
Output:
```
0
4
None
fish
```

Input:
```
4
1 2 3 4
```
Output:
```
4
0
4.0
None
```

**Starter Code**
Copy the code and edit it if you need.

```python
N = int(input())
if N == 0:
    print(0)
    print(0)
    print("None")
    print("None")
else:
    arr = input().split()
    # TODO: Implement all required outputs
```
