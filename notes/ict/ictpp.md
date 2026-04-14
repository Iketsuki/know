### 251BQ8 Competitive Coffee Brewing Scorecard

In a professional coffee brewing competition, five judges assign a score from **0 to 100** to each barista. To ensure fairness, the **highest** and **lowest** scores are dropped. The average of the remaining three scores becomes the final score.

**Example Calculation:**

| Barista | Judge 1 | Judge 2 | Judge 3 | Judge 4 | Judge 5 | Final Score |
| --- | --- | --- | --- | --- | --- | --- |
| Barista A | 98 | 94 | 95 | 96 | 90 | **95.00** |
| Barista B | 95 | 88 | 90 | 90 | 91 | **90.33** |

---

### Part (a)

The competition uses a program with the following variables:

* `JS`: An array for storing scores given by the five judges (indexes 1 to 5).
* `Smax`: An integer variable; `JS[Smax]` stores the highest score index.
* `Smin`: An integer variable; `JS[Smin]` stores the lowest score index.
* `FS`: A variable for storing the final score.

**(i) According to the scores of Barista C below, write down the values of the variables after execution.**

| Judge | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| **Barista C** | 68 | 84 | 82 | 80 | 92 |

| Variable | Value |
| --- | --- |
| `Smax` | __________ |
| `Smin` | __________ |
| `FS` | __________ |

**(ii) What data type should `FS` be? Why?**

______________________________________________________________________________________

---

<div style="page-break-after: always;"></div>

### Part (b)

The pseudocode for computing the highest score is:

```text
N ← 5
Smax ← 1
for i from 2 to N
    if JS[i] > JS[Smax]
        Smax ← i

```

**(i) How many times will `if JS[i] > JS[Smax]` be executed?**

______________________________________________________________________________________

**(ii) What is the benefit of using `N` instead of `5` in the loop?**

______________________________________________________________________________________

---

### Part (c)

**Assume all five scores are stored in `JS[1]` through `JS[5]`. Write a program segment in Python to compute `Smax`, `Smin`, and `FS`.**

```python
# Assume JS = [0, score1, score2, score3, score4, score5] 
# (using index 1-5 as per instructions)
Smax = 1
Smin = 1
# Write your code below to find Smax and Smin





# Write your code below to calculate FS




```

---

### Part (d)

**Complete the following Python program segment to ensure that the scores (`sc`) entered by the judges are valid (0 ≤ sc ≤ 100).**

```python
sc = int(input())
while ( _________________________________________________ ):
    print('Invalid input. Please input again.')
    sc = int(input())

```

---

<div style="page-break-after: always;"></div>

### Q2 232DQ1 Logistics Center Simulation: Package Sorting

Leo is developing a simulation for a logistics sorting center. He uses a **Queue (A)** to manage incoming packages. The queue is implemented using an **array (L)** with indices from **1 to 5**. He has designed subprograms using the following global variables:

| Global Variable | Description |
| --- | --- |
| `L` | An array for storing the elements in A with indices from 1 to 5 |
| `C` | A variable for storing the current number of elements in A |

| Subprogram | Description |
| --- | --- |
| `enq(A, K)` | Inserts a package `K` into the queue `A` if `A` is not full |
| `deq(A)` | Removes and returns the first package in `A` if `A` is not empty |

---

### Part (a)

Suppose that initially **C = 0**. After sequentially executing `enq(A, Electronics)` and `enq(A, Books)`, **C = 2** and the array looks like this:

| i | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| **L[i]** | Electronics | Books |  |  |  |

The subprogram `enq(A, K)` should output the message **'Full!'** when the queue is already at capacity. Complete the pseudocode for `enq` below:

**enq(A, K)**

```text
if _____________________________ then
    output 'Full!'
else
    C ← C + 1
    L[______] ← K

```

---

<div style="page-break-after: always;"></div>

### Part (b)

**(i)** Suppose that **C = 3** and the current state of the queue is:

| i | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| **L[i]** | Books | Clothing | Toys |  |  |

After executing `deq(A)`, the first item is removed, all other items shift forward, and **C = 2**:

| i | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| **L[i]** | Clothing | Toys |  |  |  |

Fill in the content of **L** after further sequentially executing:
`deq(A)`, `enq(A, Tools)`, `enq(A, Sports)`, and `deq(A)`.

| i | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| **L[i]** | ________ | ________ | ________ | ________ | ________ |

**(ii)** Complete the pseudocode for `deq` below. Note that when an item is removed from index 1, all subsequent items must shift one position to the left.

**deq(A)**

```text
if C = 0 then
    output 'Empty!'
else
    tmp ← L[1]
    j ← 1
    while j < C do
        L[j] ← _________________
        j ← j + 1
    
    C ← _________________
    return tmp

```

