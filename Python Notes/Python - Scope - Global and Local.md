---
tags: [python, scope, basics]
moc: [[Python - Scope (MOC)]]
difficulty: Beginner
bloom_level: Understand
learning_objectives:
  - "Define global and local scope."
  - "Recognize common scope-related errors."
  - "Use `global` appropriately and safely."
---

# Python - Scope - Global and Local

## What is Scope?

Scope determines where a name (variable) is visible in a program.

- **Global scope**: names defined at the top level of a module — available throughout that module.
- **Local scope**: names defined inside a function — visible only within that function.

## Examples

Global variable example:

```python
message = 'Hello'  # global

def show():
    print(message)  # reads global

show()  # Hello
```

Local variable example:

```python
def greet():
    name = 'Alice'  # local to greet()
    print(name)

greet()    # Alice
# print(name)  # Error: name is not defined (outside function)
```

## Modifying globals inside functions

By default, assigning to a name inside a function creates a local variable. To modify a module-level variable, use `global`.

```python
count = 0

def inc():
    global count
    count += 1

inc()
print(count)  # 1
```

Use `global` sparingly — heavy use makes code harder to reason about. Prefer returning values or using objects.

## Common Error: UnboundLocalError

If you assign to a name in a function, Python treats it as local everywhere in that function. Trying to read it before assignment raises `UnboundLocalError`.

```python
value = 10

def f():
    print(value)  # attempts to read local 'value' but not yet assigned
    value = 5     # assignment makes 'value' local -> UnboundLocalError

# fix: either remove the assignment, use a different name, or declare global
```

## Best Practices

- Prefer passing values into functions and returning results instead of using `global`.
- Use immutable values for simple state; use objects (instances) or explicit containers for shared mutable state.
- Keep functions small and side-effect free when possible.

## Exercises

- Write a function that increments a counter without using `global` (return the new value).
- Explain why `UnboundLocalError` happens in the example above.

## Tips

- **Global**: defined at module top-level
- **Local**: defined inside functions
- Avoid overusing `global`; prefer explicit parameters and return values

## Related Concepts
- [[Python - Functions - Parameters & Return Values]]
- [[Python - Scope - Namespaces & Lifetimes]]
