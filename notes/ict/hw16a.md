## HW16A: Answer Key — The "List Mystery" Continued

### Question 1: The Score Keeper
Code:
```python
score = 0
names = ["Player1"]

def update_game(s, n):
    s = s + 10
    n[0] = "Winner"

update_game(score, names)

print("Q1 Score:", score)
print("Q1 Names:", names)
```
Output Q1:
- Score: `0`
- Names: `['Winner']`

Explanation: `s` is a local name bound to a new number (numbers are immutable), so `score` stays `0`. `n[0] = ...` mutates the list, so `names` becomes `['Winner']`.

---
### Question 2: The List Replacement Trap
Code:
```python
items_a = ["Milk"]
items_b = ["Bread"]

def version_a(my_list):
    my_list[0] = "Eggs"

def version_b(my_list):
    my_list = ["Juice", "Water"]

version_a(items_a)
version_b(items_b)

print("Q2 A:", items_a)
print("Q2 B:", items_b)
```
Output Q2:
- A: `['Eggs']`
- B: `['Bread']`

Explanation: `my_list[0] = ...` mutates the original list. `my_list = [...]` rebinds the local name to a new list — it does not change the caller's list.

---
### Question 3: The "Multiple Bridge" Challenge
Code:
```python
x = 10
y = [10]

def boost_value(val):
    val = val + 90

def boost_list(lst):
    global x
    x = 50
    lst[0] = lst[0] + 90

boost_value(x)
boost_list(y)

print("Q3 x:", x)
print("Q3 y:", y)
```
Output Q3:
- x: `50`
- y: `[100]`

Explanation: `boost_value` only rebinds the local `val` (numbers immutable), so `x` remains unchanged until `boost_list` sets it via `global x`. `lst[0] = ...` mutates the list, increasing `y[0]` by 90.

---
### Quick Summary
- Numbers & Strings: Immutable (functions cannot change them without `global`).
- Lists: Mutable (functions can change items with `list[index] = ...`, but assigning `list = [...]` inside a function creates a local binding unless `global` is used).

File: notes/ict/hw16a.md
