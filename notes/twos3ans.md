## ✅ Answer Key and Explanations

### Part A: Conversion (8-bit)

| No. | Decimal Number | Step 1: Positive Binary | Step 2: One's Complement | Step 3: Two's Complement (Answer) |
| :---: | :---: | :---: | :---: | :---: |
| **A1** | $60_{10}$ | $00111100$ | N/A | **00111100** |
| **A2** | $-60_{10}$ | $00111100$ | $11000011$ | **11000100** |
| **A3** | $-127_{10}$ | $01111111$ | $10000000$ | **10000001** |
| **A4** | $0_{10}$ | $00000000$ | N/A | **00000000** |
| **A5** | $-8_{10}$ | $00001000$ | $11110111$ | **11111000** |

### Part B: Conversion (4-bit)

| No. | Decimal Number | Two's Complement (Answer) |
| :---: | :---: | :---: |
| **B1** | $5_{10}$ | **0101** |
| **B2** | $-5_{10}$ | **1011** |
| **B3** | $7_{10}$ | **0111** |
| **B4** | $-8_{10}$ | **1000** |

### Part C: Arithmetic (8-bit)

**C1: $60_{10} - 40_{10} = 20_{10}$**

* $60_{10}$ in TC: **00111100**
* $-40_{10}$ in TC: **11011000**
* Calculation ($60 + (-40)$):
    $$\begin{array}{r} 00111100 \\ + 11011000 \\ \hline (1)00010100 \end{array}$$
* Result: $\text{Binary: } \mathbf{00010100}, \quad \text{Decimal: } \mathbf{20}$
    * [cite_start]*Explanation: The extra 9th bit (carry) is ignored[cite: 16].*

**C2: $15_{10} - 120_{10} = -105_{10}$**

* $15_{10}$ in TC: **00001111**
* $-120_{10}$ in TC: **10001000**
* Calculation ($15 + (-120)$):
    $$\begin{array}{r} 00001111 \\ + 10001000 \\ \hline 10010111 \end{array}$$
* Result: $\text{Binary: } \mathbf{10010111}, \quad \text{Decimal: } \mathbf{-105}$

### Part D: Range and Overflow

1.  **D1: Range (16-bit)**

* $N=16$.
* Smallest Negative: $-2^{16-1} = -2^{15} = -32,768$
* Largest Positive: $2^{16-1}-1 = 2^{15}-1 = 32,767$
    $$\text{Range: } [\mathbf{-32,768}, \mathbf{32,767}]$$

2.  **D2: Overflow (4-bit)**

| Addition (Decimal) | Expected Decimal Result | Binary (4-bit TC) | Final Binary Result | Overflow? (Yes/No) |
| :---: | :---: | :---: | :---: | :---: |
| $6 + 3$ | $9$ | $0110 + 0011$ | $1001$ | [cite_start]**Yes** [cite: 18, 19] |
| $-5 + (-4)$ | $-9$ | $1011 + 1100$ | $(1)0111$ | [cite_start]**Yes** [cite: 18, 20] |
| $2 + 5$ | $7$ | $0010 + 0101$ | $0111$ | **No** |

**Overflow Explanation:**

* [cite_start]**$6 + 3$:** Adding two positive numbers results in a negative number ($1001$, which is $-7$)[cite: 19]. The expected result $9$ is outside the range $[-8, 7]$. [cite_start]**Overflow occurs**[cite: 18].
* [cite_start]**$-5 + (-4)$:** Adding two negative numbers results in a positive number ($0111$, which is $7$)[cite: 20]. The expected result $-9$ is outside the range $[-8, 7]$. [cite_start]**Overflow occurs**[cite: 18].
