### **Worksheet: Mastering the XLOOKUP Function**

**Instructions for Students:**
Work with a partner. Read the supplementary notes on the `XLOOKUP` function to help you answer the questions below. The goal is to write the correct `XLOOKUP` formula for each task. Use the `XLOOKUP` function to find data. Unlike the old `VLOOKUP`, `XLOOKUP` only needs three main parts: **What** you are looking for, **Where** to find it, and **What** to bring back.

#### **Reference Data**

`=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode])`

Use the following spreadsheet data from your notes to complete the tasks.

**Table 1: Student Information**

|  | **A (Class)** | **B (No.)** | **C (Name)** | **D (Score)** |
| --- | --- | --- | --- | --- |
| **1** | **Class** | **Number** | **Name** | **Score** |
| **2** | 1B | 9 | Ben | -2.5 |
| **3** | 1A | 15 | Ada | 7.45 |
| **4** | 1A | 16 | Amy | 8.9 |
| **5** | 1B | 22 | Benedict | 4.75 |
| **6** | 1A | 24 | Cole | 5.3 |
| **7** | 1C | 34 | Carmen | 5.3 |

---
<div style="page-break-after: always;"></div>

### **Tasks**

#### **Part 1: Basic Lookups**
Your first task is to find information about students using their name or class number.

1.  Write a formula to find the **Class** of the student named **"Ben"**.
<br><br>
2.  Write a formula to find the **Name** of the student whose **Class Number** is **22**.
<br><br>
3.  Write a formula to find the **Reward** for someone who achieved **"Rank B"**.
<br><br>

#### **Part 2: Handling Missing Information (`if_not_found`)**
Sometimes, the value you are looking for does not exist.

1.  Imagine you use the formula `=XLOOKUP(20, B2:B7, C2:C7)` to find the name of a student with Class Number 20. According to your notes, what result will you get?
<br><br>
2.  Write a new formula that will display the message **"Student Not Found"** if you search for a student with Class Number 20.
<br><br>

<div style="page-break-after: always;"></div>

#### **Part 3: Finding the Right Rank (`match_mode`)**
A teacher needs to assign ranks based on scores. Use the table below and the `[match_mode]` option to find the correct rank. A student gets the rank if their score is greater than or equal to the score listed.

**Table 3: Rank Thresholds**

|  | **F (Rank)** | **G (Min Score)** |
| --- | --- | --- |
| **1** | Rank A | 8 |
| **2** | Rank B | 4 |
| **3** | Rank C | 0 |


1.  Ada scored **7.45**. Write a formula that finds the correct rank for her score by looking for the next smaller item.
<br><br>
2.  A new student scored **9.5**. Write a formula to find their rank. What rank do they get?
<br><br>

#### **Part 4: Searching with Wildcards (`match_mode`)**
Now, let's find students using only parts of their names. Remember to set `[match_mode]` to `2` for wildcard searches.

1.  Write a formula to find the first student whose name **starts with "C"**.
<br><br>
2.  Write a formula to find the first student whose name **ends with "en"**.
<br><br>
3.  Write a formula to find the first student whose name contains the letter **"m"**.
<br><br>

---
### **Answer Key**

<details>
  <summary>Click to view</summary>

#### **Part 1: Basic Lookups**
1.  `=XLOOKUP("Ben", C2:C7, A2:A7)` -> Result: `1B`
2.  `=XLOOKUP(22, B2:B7, C2:C7)` -> Result: `Benedict`
3.  `=XLOOKUP("Rank B", H6:I6, H7:I7)` -> Result: `Pen`

#### **Part 2: Handling Missing Information (`if_not_found`)**
1.  The result will be an `#N/A` error.
2.  `=XLOOKUP(20, B2:B7, C2:C7, "Student Not Found")`

#### **Part 3: Finding the Right Rank (`match_mode`)**
1.  `=XLOOKUP(7.45, G1:G4, F1:F4, , -1)` -> Result: `Rank B`
2.  `=XLOOKUP(9.5, G1:G4, F1:F4, , -1)` -> Result: `Rank A`

#### **Part 4: Searching with Wildcards (`match_mode`)**
1.  `=XLOOKUP("C*", C2:C7, C2:C7, , 2)` -> Result: `Cole`
2.  `=XLOOKUP("*en", C2:C7, C2:C7, , 2)` -> Result: `Ben`
3.  `=XLOOKUP("*m*", C2:C7, C2:C7, , 2)` -> Result: `Amy`
</details>

---

### 💡 Tip:
 `XLOOKUP` is superior to `VLOOKUP` because:

1. It can look to the **left** (finding Class by Name).
2. It doesn't break if you **insert a new column**.
3. It handles errors (`#N/A`) automatically without extra functions.
