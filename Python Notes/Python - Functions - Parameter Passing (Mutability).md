---
tags: [python, functions, mutability]
moc: [[Python - Functions (MOC)]]
difficulty: Beginner
bloom_level: Apply
learning_objectives:
  - "Explain how parameter passing works in Python."
  - "Differentiate mutable and immutable behavior in functions."
  - "Show safe patterns for modifying arguments."
---

# Python - Functions - Parameter Passing (Mutability)

## How Python passes parameters

Python passes references to objects (sometimes described as "pass-by-object-reference"). Whether a function can change the caller's data depends on the object's mutability.

## Immutable objects (numbers, strings, tuples)

Assigning to a parameter name or performing operations that create new objects does not change the caller's object.

```python
def add_one(n):
    n += 1
    return n

x = 5
print(add_one(x))  # 6
print(x)           # 5 (unchanged)
```

Strings behave similarly — operations produce new strings; original remains unchanged.

## Mutable objects (lists, dicts, sets, user objects)

Functions can modify the contents of mutable objects in-place; those changes are visible to the caller.

```python
def append_item(lst):
    lst.append(4)

my_list = [1, 2, 3]
append_item(my_list)
print(my_list)  # [1, 2, 3, 4]
```

## Reassignment vs mutation

- Mutating (e.g., `lst.append()`, `d['k']=v`) changes the object itself.
- Reassigning the parameter name (e.g., `lst = []`) only changes the local reference.

```python
def reset_local(lst):
    lst = []          # local reassignment — caller unchanged

def clear_inplace(lst):
    lst.clear()       # mutation — caller sees change

data = [1,2,3]
reset_local(data)
print(data)  # [1,2,3]
clear_inplace(data)
print(data)  # []
```

## Safe patterns

- If you want to avoid side effects, copy the argument (`lst.copy()` or `list(lst)`) and modify the copy.
- If you expect a function to update a value, document the side effect or return the new value instead.

```python
def sorted_copy(seq):
    s = list(seq)
    s.sort()
    return s

original = [3,1,2]
new = sorted_copy(original)
print(original)  # [3,1,2]
print(new)       # [1,2,3]
```

## Common mistakes

- Expecting reassignment inside a function to modify caller's variable.
- Mutating an argument unintentionally (surprising callers).

## Exercises

- Write a function that appends an item but does not modify the original list (return a new list).
- Explain the output of a function that assigns a parameter to a new list vs calls `list.clear()`.

## Tips

- **Immutable**: safe from in-place modification (numbers, strings, tuples).
- **Mutable**: can be changed in-place (lists, dicts, sets) — be explicit.
- When in doubt, copy before modifying.

## Related
- [[Python - Functions - Parameters & Return Values]]
- [[Python - Scope - Global and Local]]
