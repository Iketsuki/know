## WS12A: Answer Key — Python Magic

### Part 1: The "Stub" Technique (Testing)
Fill the function so it always returns True:
```python
def checkUsername():
    return True
if checkUsername():
    print("Now let's create account")
```

### Part 2: Trace the Output (a, b, and c)

#### A) The "Local Conflict" (The Error)
Q: What happens?
A: CRASH: UnboundLocalError (local variable 'user' referenced before assignment)

#### B) The "Global Bridge" (The Success)
Starting state after `init()`: `user = ["AK99", "4A05"]`, `userCount = 2`
After calling `createAcc2(newUsername)` the globals become:
- `user` -> `["a", "b", newUsername]`
- `userCount` -> `3`

So the output for `print("after 2", user, userCount)` is:
```
after 2 ['a', 'b', newUsername] 3
```

#### C) The "Parameter" Trap (The Partial Change)
Behavior inside `createAcc3(newUsername, user, userCount)`:
- `user[0] = "a"` — changes the original (passed-in) list object.
- `user = user + [newUsername]` — creates a new list and assigns it to the local `user` only.
- `user[1] = "b"` — changes the local list (the new one), not the caller's second element.
- `userCount += 1` — changes the local `userCount` only.

So, with `init()` resetting to `['AK99','4A05']`, `2` then:
- `print("in 3", user, userCount)` inside the function prints the local values:
```
in 3 ['a', 'b', newUsername] 3
```
- `print("after 3", user, userCount)` after the call (outside) shows the caller's values:
```
after 3 ['a', '4A05'] 2
```

### Part 3: Analysis (The "Why")
Finding: Lists (and other mutable containers) are mutable, but Numbers and Strings are immutable.

- Mutable: Lists, Dictionaries, Sets (their contents can be changed in-place).
- Immutable: Numbers, Strings, Tuples (reassignment creates new objects).

---

File: notes/ict/ws12a.md — answer key for WS12
