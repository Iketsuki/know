### Task ID: UA2007
### Task Title: Order and Count in Array

-----

### 📚 Quick Lesson

**Concepts Combined:**
- Checking order (ascending/descending)
- Counting elements by condition
- Handling edge cases (empty array, all equal values, single element)
- Integer, float, and string arrays

-----

### 🖥️ Main Statement

**Story:**
Write a program that reads an integer N (array length), then reads N elements (integers, floats, or strings) into an array, and a value X. Print:
1. "Ascending" if the array is in ascending order, "Descending" if in descending order, or "Not ordered" otherwise (if N=0, print "Empty array")
2. The count of elements equal to X (if N=0, print "Empty array")

**Input:**
- The first line contains an integer N (0 ≤ N ≤ 100)
- The second line contains N elements (if N > 0), separated by spaces
- The third line contains a value X (string)

**Output:**
- If N = 0, print "Empty array" twice (one per line)
- Otherwise, print:
    - "Ascending", "Descending", or "Not ordered"
    - The count of elements equal to X

**Sample Tests:**
Input:
```
5
1 2 3 4 5
3
```
Output:
```
Ascending
1
```

Input:
```
4
apple banana cherry date
banana
```
Output:
```
Ascending
1
```

Input:
```
3
2 2 2
2
```
Output:
```
Ascending
3
```

Input:
```
4
5 4 3 2
3
```
Output:
```
Descending
1
```

Input:
```
0
apple
```
Output:
```
Empty array
Empty array
```

**Starter Code**
Copy the code and edit it if you need.

```python
N = int(input())
if N == 0:
    for _ in range(2):
        print("Empty array")
else:
    arr = input().split()
    X = input()
    # TODO: Implement all required outputs
```
