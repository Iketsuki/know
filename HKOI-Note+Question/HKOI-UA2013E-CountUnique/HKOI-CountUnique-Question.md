### Task ID: UA2013E
### Task Title: Count Unique Elements (Extension)

-----

### 📚 Quick Lesson

**Concept:**
To count unique elements in an array, you can use a set to store seen values.

**Example:**
Given an array, count the number of unique elements:
```python
arr = [1, 2, 2, 3, 4, 4]
unique = set()
for i in range(len(arr)):
    unique.add(arr[i])
print(len(unique))
```
This prints `4`.

-----

### 🖥️ Main Statement

**Story:**
Read an integer N, then read N integers into an array. Print the number of unique elements in the array.

**Input:**
- The first line contains an integer N (1 ≤ N ≤ 100)
- The second line contains N integers

**Output:**
- Print the number of unique elements

**Sample Tests:**
Input:
```
6
1 2 2 3 4 4
```
Output:
```
4
```

Input:
```
4
5 5 5 5
```
Output:
```
1
```

**Starter Code**
Copy the code and edit it if you need.

```python
N = int(input())
arr = list(map(int, input().split()))
# TODO: Count and print the number of unique elements using index i
```
