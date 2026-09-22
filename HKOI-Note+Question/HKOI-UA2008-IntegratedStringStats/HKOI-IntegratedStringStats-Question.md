### Task ID: UA2008
### Task Title: String Array Statistics

-----

### 📚 Quick Lesson

**Concepts Combined:**
- Finding the longest and shortest string in an array
- Counting strings that start with a given letter
- Handling edge cases (empty array, all equal strings, case sensitivity)

-----

### 🖥️ Main Statement

**Story:**
Write a program that reads an integer N (array length), then reads N strings into an array, and a single character C. Print:
1. The longest string in the array (or "Empty array" if N=0)
2. The shortest string in the array (or "Empty array" if N=0)
3. The count of strings that start with the character C (case-insensitive, or "Empty array" if N=0)

**Input:**
- The first line contains an integer N (0 ≤ N ≤ 100)
- The second line contains N strings (if N > 0), separated by spaces
- The third line contains a single character C

**Output:**
- If N = 0, print "Empty array" three times (one per line)
- Otherwise, print:
    - The longest string
    - The shortest string
    - The count of strings starting with C (case-insensitive)

**Sample Tests:**
Input:
```
5
apple banana cherry date apricot
a
```
Output:
```
banana
fig
2
```

Input:
```
0
a
```
Output:
```
Empty array
Empty array
Empty array
```

Input:
```
3
cat car cup
c
```
Output:
```
cat
car
3
```

**Starter Code**
Copy the code and edit it if you need.

```python
N = int(input())
if N == 0:
    for _ in range(3):
        print("Empty array")
else:
    arr = input().split()
    C = input().strip().lower()
    # TODO: Implement all required outputs
```
