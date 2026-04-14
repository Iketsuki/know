# List & String Exercises (no built-ins except `len()`)

## Goal
- Practice manual list and string algorithms using only indexing, loops, conditionals and `len()`.

## Warm-ups
- W1 Count occurrences: Given `L` and `v`, count how many times `v` appears in `L`.
- W2 Sum & average: Compute the sum and average of numeric list `L` using a loop.
- W3 First index: Return the first index of `v` in `L` or `-1` if not found.

## Core algorithm tasks
- A1 Max & Min: Find the maximum and minimum values (and their indices) in `L`.
- A2 Count distinct: Count how many distinct values appear in `L` (use nested loops).
- A3 Order check: Determine whether `L` is strictly ascending, strictly descending, all equal, or none.
- A4 Sliding-window max: For window size `k`, compute max for each consecutive window using loops.

## List mutation tasks (simulate array semantics)
- M1 Append: Manually add an item to the end of a list (show approach using a separate length `C`).
- M2 Insert at index: Insert `x` at position `p` by shifting elements right.
- M3 Remove first occurrence: Remove the first `v` by shifting elements left and decrementing `C`.
- M4 Move item: Move an element from index `i` to `j` while preserving order.

> Constraint: For mutation tasks, when asked, simulate a fixed-size backing array `L[0..N-1]` with current length `C`.

## String operations
- S1 Count character/substring: Count occurrences of a character or substring without `count()`.
- S2 First/last index of char: Find the first and last position of `ch` in a string.
- S3 Reverse string: Build the reversed string by iterating indices.
- S4 Split by char: Split a string on a single character into a list of substrings using loops.

## Composite problems
- C1 Judge scores: Given five scores `JS[1..5]`, compute `Smax`, `Smin`, and final score after dropping highest and lowest.
- C2 Queue array: Implement `enq(A,K)` and `deq(A)` over array `L[1..5]` with `C` counter; print `Full!` or `Empty!` appropriately.
- C3 Shopping cart: Process commands `add x`, `insert i x`, `move i j`, `remove x` and print final list.

## Challenges
- CH1 Top-3 distinct values without sorting: find the three largest distinct numbers using repeated passes.
- CH2 Longest increasing contiguous subsequence: compute its length.

## Hints
- Use only: indexing (`L[i]`), `while`/`for` loops built with counters (prefer `while` to avoid `range()`), conditionals, assignments and `len()`.
- Avoid built-ins: `max()`, `min()`, `sorted()`, `list.append()`, `list.insert()`, `.count()`, `.index()`, `.split()`, etc.

## Next steps
- Ask if you want printable worksheet formatting, per-exercise pseudocode scaffolds, full reference solutions, or test-case generators.
