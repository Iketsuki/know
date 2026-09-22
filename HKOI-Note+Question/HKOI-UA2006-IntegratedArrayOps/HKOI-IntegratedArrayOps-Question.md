### Task ID: UA2006
### Task Title: Integrated Array Operations

-----

### 📚 Quick Lesson

**Concepts Combined:**
- Finding max, min, and average in an array
- Counting elements by condition
- Handling edge cases (empty array, all equal values)
- Integer and float arrays

-----

### 🖥️ Main Statement

**Story:**
Write a program that reads an integer N (array length), then reads N numbers (integers or floats) into an array. Then, print the following on separate lines:
1. The maximum value in the array (or "Empty array" if N=0)
2. The minimum value in the array (or "Empty array" if N=0)
3. The average value of the array, rounded to 2 decimal places (or "Empty array" if N=0)
4. The count of elements greater than the average (or "Empty array" if N=0)

**Input:**
- The first line contains an integer N (0 ≤ N ≤ 100)
- The second line contains N numbers (if N > 0), separated by spaces

**Output:**
- If N = 0, print "Empty array" four times (one per line)
- Otherwise, print:
    - Maximum value
    - Minimum value
    - Average (rounded to 2 decimal places)
    - Count of elements greater than the average

**Sample Tests:**
Input:
```
5
3 7 2 7 1
```
Output:
```
7
1
4.00
2
```

Input:
```
0
```
Output:
```
Empty array
Empty array
Empty array
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
5
5.00
0
```

**Starter Code**
Copy the code and edit it if you need.

```python
N = int(input())
if N == 0:
    for _ in range(4):
        print("Empty array")
else:
    arr = list(map(float, input().split()))
    # TODO: Implement all required outputs
```
