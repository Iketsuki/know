## 🔢 Two's Complement: Comprehensive Worksheet (Corrected Layout)

This worksheet covers conversion, arithmetic, range, and overflow using both 4-bit and 8-bit systems.

### 📝 Exercise Section

#### Part A: Conversion (8-bit)

Convert the following decimal numbers to their **8-bit Two's Complement** representation. 

| No. | Decimal Number | Step 1: Positive Binary | Step 2: One's Complement | Step 3: Two's Complement (Answer) |
| :---: | :---: | :---: | :---: | :---: |
| **A1** | $60_{10}$ | | | |
| **A2** | $-60_{10}$ | | | |
| **A3** | $-127_{10}$ | | | |
| **A4** | $0_{10}$ | | | |
| **A5** | $-8_{10}$ | | | |

#### Part B: Conversion (4-bit)

Convert the following decimal numbers to their **4-bit Two's Complement** representation.

| No. | Decimal Number | Two's Complement (Answer) |
| :---: | :---: | :---: |
| **B1** | $5_{10}$ | |
| **B2** | $-5_{10}$ | |
| **B3** | $7_{10}$ | |
| **B4** | $-8_{10}$ | |

#### Part C: Arithmetic (8-bit)

Calculate the following subtractions using 8-bit Two's Complement **addition**. State the final 8-bit result in binary and the decimal value it represents.

1.  **C1: $60_{10} - 40_{10}$**
    * $60_{10}$ in TC:
        $$\rule{5cm}{0.15mm}$$
    * $-40_{10}$ in TC:
        $$\rule{5cm}{0.15mm}$$
    * Calculation ($60 + (-40)$): 
        $$\rule{5cm}{0.15mm}$$
    * Result: $\text{Binary: } \rule{3cm}{0.15mm}, \quad \text{Decimal: } \rule{1cm}{0.15mm}$

2.  **C2: $15_{10} - 120_{10}$**
    * $15_{10}$ in TC:
        $$\rule{5cm}{0.15mm}$$
    * $-120_{10}$ in TC:
        $$\rule{5cm}{0.15mm}$$
    * Calculation ($15 + (-120)$):
        $$\rule{5cm}{0.15mm}$$
    * Result: $\text{Binary: } \rule{3cm}{0.15mm}, \quad \text{Decimal: } \rule{1cm}{0.15mm}$

#### Part D: Range and Overflow

1.  [cite_start]**D1: Range.** Write the maximum range for a 16-bit Two's Complement system using the formula $[-2^{N-1}, 2^{N-1}-1]$[cite: 17]:
    $$\text{Range: } [\rule{3cm}{0.15mm}, \rule{3cm}{0.15mm}]$$

2.  **D2: Overflow (4-bit).** The 4-bit range is $[-8, 7]$. Indicate whether the following additions result in a **valid** answer (No Overflow) or an **Overflow** (Result out of range). 

| Addition (Decimal) | Expected Decimal Result | Binary (4-bit TC) | Final Binary Result | Overflow? (Yes/No) |
| :---: | :---: | :---: | :---: | :---: |
| $6 + 3$ | $9$ | $0110 + 0011$ | | |
| $-5 + (-4)$ | $-9$ | $1011 + 1100$ | | |
| $2 + 5$ | $7$ | $0010 + 0101$ | | |

