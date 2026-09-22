### **Teacher’s Guide & Answer Key**

#### **Part 1: The "Unsigned" Reality vs. The "Signed" Visual**

**1. Pattern Spotting**
* **Binary pattern for 7:** `0111`
* **After 7 (Unsigned context):**
    * Binary: `1000`
    * Decimal: `8`
    * *Teacher Note: This is the crucial moment of cognitive dissonance. Students expect 8, but the tool shows -8. This drives the need to understand the "Sign Bit."*

**2. Hexadecimal Translation**

| Tool Value (Signed) | Binary Pattern (Visible) | Hexadecimal Digit |
| :--- | :--- | :--- |
| -2 | `1110` | `E` |
| 5 | `0101` | `5` |
| -8 | `1000` | `8` |

* **Critical Thinking:** Hexadecimal is useful because it is a direct shorthand for binary (every 4 bits = 1 hex digit). It describes the "raw data" pattern accurately regardless of whether the computer interprets that data as a positive number, a negative number, or a color code.

---

#### **Part 2: Cracking the Code (2's Complement)**

**3. The MSB Rule**
* **First bit for positive:** `0`
* **First bit for negative:** `1`

**4. The Conversion Challenge (-3)**
* **Step A (Positive 3):** `0011`
* **Step B (Flip bits):** `1100`
* **Step C (Add 1):** `1101`
* **Step D:** [x] Yes

---

#### **Part 3: The Limits of Storage (Range)**

**5. Observation (4-bit)**
* **Max Positive:** `7`
* **Most Negative:** `-8`

**6. Prediction (5-bit)**
* **Calculation:** $2^4 - 1 = 15$
* **Calculation:** $-2^4 = -16$
* *Verification:* Students should see the wheel expand to show -16 to 15.

---

#### **Part 4: Overflow & The "Wheel"**

**7. Visualizing Math (5 + 2)**
* **Did the arrow cross the break?** [ ] No

**8. Forcing the Error (5 + 4)**
* **Tool Result:** `-7`
* **Why?** The answer is mathematically 9 (`1001` in binary). Because the first bit is `1`, the signed system interprets it as a negative number. We "overflowed" the positive capacity (7) and wrapped around to the negative side.

**9. Unsigned vs Signed Overflow**
* **Unsigned value of 1001:** `9`
* **Did overflow occur (Unsigned)?** No.
* *Explanation:* A 4-bit unsigned system has a range of 0–15. The number 9 fits perfectly. This highlights that "Overflow" depends entirely on how we interpret the bits.

---

#### **Part 5: Master Challenge (Assessment)**

**1. The Crash (0111 -> 1000)**
* **If Signed:** `-8` (Total failure for an odometer!)
* **If Unsigned:** `8` (Correct behavior)

**2. The Bug Fix (Track up to 20)**
* **Can you do this with 4 bits?** No. 4 bits unsigned maxes out at 15 ($2^4 - 1$).
* **Minimum bits needed:** `5` bits. (5 bits unsigned = 0 to 31).

**3. Hex Translation (1101)**
* **Decimal if Signed:** `-3`
* **Decimal if Unsigned:** `13`
* **Hexadecimal:** `D`
