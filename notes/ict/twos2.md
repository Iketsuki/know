## 💡 Example 1: Converting $-123_{10}$ to Two's Complement

We want to find the 8-bit Two's Complement representation of **$-123_{10}$**.

| Step | Action | Binary Result (8-bit) | Explanation |
| :--- | :--- | :--- | :--- |
| **1** | Convert the **positive** number $123_{10}$ to binary. | $01111011$ | $123 = 64 + 32 + 16 + 8 + 2 + 1$. We use a leading 0 for the sign bit (positive). |
| **2** | Find the **One's Complement** (Flip all bits). | $10000100$ | Change every 0 to 1, and every 1 to 0. |
| **3** | Find the **Two's Complement** (Add 1 to Step 2 result). | $\mathbf{10000101}$ | $10000100 + 1 = 10000101$. This final number represents $-123_{10}$. |

---

## ➕ Example 2: Binary Subtraction

Let's calculate **$124_{10} - 123_{10}$** using 8-bit Two's Complement addition.

### Step 1: Get the Two's Complement for both numbers.

* **$124_{10}$ (Positive):** This is just its normal 8-bit binary form.
    $$124_{10} = 01111100$$
* **$-123_{10}$ (Negative):** We already found this in Example 1.
    $$-123_{10} = 10000101$$

### Step 2: Add the two binary numbers.

We add $01111100$ and $10000101$:

$$\begin{array}{r} 01111100 \quad (124) \\ + 10000101 \quad (-123) \\ \hline (1)00000001 \end{array}$$


### Step 3: Check for an extra bit.

* There is an extra bit (a carry-out '1') at the 9th position (shown in parentheses above).
* **Ignore this extra bit.** The computer only keeps the result that fits in the 8 bits.

### Final Answer:

The final 8-bit result is $\mathbf{00000001}$.

This is the binary representation of $1_{10}$, which is the correct answer for $124 - 123 = 1$.


## 🔢 Two's Complement: Worksheet

### 💡 Concept Review

| Concept | Description |
| :--- | :--- |
| **Goal** | To represent **negative numbers** in binary code. |
| **Subtraction** | $A - B$ is calculated as $A + (-B)$. |
| **Range (N bits)** | $[ -2^{N-1}, 2^{N-1}-1 ]$. |
| **Overflow** | Occurs if adding two positives results in a negative, OR adding two negatives results in a positive. |

---

### 📝 Exercise Section

#### Part A: Conversion (8-bit)

Use the 3 steps to convert the following decimal numbers to their 8-bit Two's Complement representation: 

1.  **$-45_{10}$**
    * Step 1: Convert $45_{10}$ to 8-bit binary:
        $$\text{Step 1 Result: } \rule{5cm}{0.15mm}$$
    * Step 2: Find the One's Complement (Flip bits):
        $$\text{Step 2 Result: } \rule{5cm}{0.15mm}$$
    * Step 3: Find the Two's Complement (Add 1):
        $$\text{Final Answer: } \rule{5cm}{0.15mm}$$

2.  **$-1_{10}$**
    * Final Answer:
        $$\text{Final Answer: } \rule{5cm}{0.15mm}$$

#### Part B: Binary Subtraction (8-bit)

Calculate the following subtraction in 8-bit binary using Two's Complement:

3.  **$15_{10} - 10_{10}$**

    * $15_{10}$ in Two's Complement:
        $$\rule{5cm}{0.15mm}$$
    * $-10_{10}$ in Two's Complement (show work):
        $$\rule{5cm}{0.15mm}$$
    * Calculate $15_{10} + (-10_{10})$: 
        $$\rule{5cm}{0.15mm}$$
    * Result (Ignore extra bit):
        $$\rule{5cm}{0.15mm}$$

#### Part C: Range and Overflow

4.  **Maximum Range:** What is the range of numbers (from smallest negative to largest positive) that can be represented by 4-bit Two's Complement?
    $$\text{Range: } [\rule{2cm}{0.15mm}, \rule{2cm}{0.15mm}]$$

5.  **Overflow Check:** Using a 4-bit system, which of these additions would cause an **Overflow**? (Circle the correct letter) 

    A. $5 + 2$
    B. $7 + 1$
    C. $3 + (-5)$

