---

## ✅ Answer Key and Explanations

### Part A: Conversion (8-bit)

**1. $-45_{10}$**

* **Step 1:** Convert $45_{10}$ to 8-bit binary:
    $$\text{Step 1 Result: } 00101101$$
* **Step 2:** Find the One's Complement (Flip bits):
    $$\text{Step 2 Result: } 11010010$$
* **Step 3:** Find the Two's Complement (Add 1):
    $$\text{Final Answer: } \mathbf{11010011}$$
    * ( $11010010 + 1 = 11010011$ )

**2. $-1_{10}$**

* $1_{10} = 00000001$
* One's Complement: $11111110$
* Two's Complement (Add 1): $\mathbf{11111111}$
    $$\text{Final Answer: } \mathbf{11111111}$$

### Part B: Binary Subtraction (8-bit)

**3. $15_{10} - 10_{10}$** (Target Answer: $5_{10}$)

* $15_{10}$ in Two's Complement:
    $$\mathbf{00001111}$$
* $-10_{10}$ in Two's Complement:
    * $10_{10} = 00001010$
    * One's Complement: $11110101$
    * $-10_{10} = \mathbf{11110110}$
* Calculate $15_{10} + (-10_{10})$:
    $$\begin{array}{r} 00001111 \\ + 11110110 \\ \hline (1)00000101 \end{array}$$
* Result (Ignore extra bit):
    $$\mathbf{00000101}$$
    * (This is $5_{10}$, which is correct.)

### Part C: Range and Overflow

**4. Maximum Range (4-bit)**

* $N=4$.
* Smallest Negative: $-2^{N-1} = -2^{4-1} = -2^3 = -8$
* Largest Positive: $2^{N-1}-1 = 2^{4-1}-1 = 2^3-1 = 7$
    $$\text{Range: } [\mathbf{-8}, \mathbf{7}]$$

**5. Overflow Check (4-bit)**

* The 4-bit range is $[-8, 7]$.
* A. $5+2 = 7$. (7 is in the range. **No overflow**.)
* B. $7+1 = 8$. (8 is **out of range** (too big). **Overflow occurs** because adding two positives results in a negative in 4-bit two's complement (0111 + 0001 = 1000, where 1000 is -8)).
* C. $3 + (-5) = -2$. (-2 is in the range. **No overflow**.)

$$\text{Answer: } \mathbf{B}$$
