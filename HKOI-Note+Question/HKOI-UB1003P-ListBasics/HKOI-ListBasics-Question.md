### Task ID: UB1003
### Task Title: List Basics (count, find, max/min, order check)

-----

### 📚 Quick Lesson

You will practice basic list algorithms using loops, conditionals and indexing. You may use `input().split()` to read a line of integers, and `len()`; avoid high-level helpers like `.count()`, `.index()`, `max()`, `min()`, `sorted()`.

-----

### 🖥️ Main Statement

Given an integer `n` (1 ≤ n ≤ 100) and a line with `n` integers `a1 a2 ... an`, followed by an integer `v`, perform the following and print each result on a separate line:

1. The count of occurrences of `v` in the list.
2. The first index (0-based) where `v` appears; print `-1` if not found.
3. The maximum value in the list.
4. `YES` if the list is strictly ascending (each element > previous), otherwise `NO`.

Input:
```
n
a1 a2 ... an
v
```

Output: four lines as described above.

Sample Input 1:
```
5
1 3 3 7 9
3
```
Sample Output 1:
```
2
1
9
NO
```

Sample Input 2:
```
4
1 2 3 4
5
```
Sample Output 2:
```
0
-1
4
YES
```

-----

Notes:
- Use only loops, indexing (`arr[i]`), conditionals and `len()` for processing. Students may use `input().split()` to read the list.
