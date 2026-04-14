---
tags: [python, testing, stub]
moc: [[Python - Testing (MOC)]]
difficulty: Beginner
bloom_level: Understand
learning_objectives:
  - "Define what a stub is and when to use one."
  - "Create simple stubs and placeholder functions in Python."
  - "Understand the difference between stubs and mocks."
---

# Stub

A *stub* is a simple placeholder implementation used during development or testing to stand in for a real component.

## When to use stubs

- Replace unfinished or slow components while developing.
- Provide predictable behavior for tests.
- Isolate the unit under test from external dependencies.

## Simple stub patterns in Python

- Placeholder that raises until implemented:

```python
def fetch_data():
    raise NotImplementedError('fetch_data not implemented yet')
```

- Lightweight stub returning canned data (useful in tests):

```python
def fetch_data_stub():
    return {'id': 1, 'name': 'stub'}
```

## Replacing functions in tests

Use a stub to replace a dependency during a unit test. Example with `unittest.mock`:

```python
from unittest.mock import patch

def real_fetch():
    # imagine slow network call
    return {'id': 99}

def process():
    data = real_fetch()
    return data['id'] * 2

def test_process():
    with patch('__main__.real_fetch', return_value={'id': 5}):
        assert process() == 10
```

## Stub vs Mock

- Stub: simple implementation returning fixed data or minimal behavior.
- Mock: richer test-double that can verify interactions (calls, args).

## Best Practices

- Keep stubs small and predictable.
- Document when a stub is temporary and should be replaced.
- Prefer explicit test doubles (mocks/stubs) over modifying global state.

## Exercises

- Write a stub for a database query and use it in a test for a function that formats results.
- Replace a stub with a simple mock and assert it was called with expected arguments.
