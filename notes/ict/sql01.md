# 🕵️‍♂️ SQL Mission Part 1: Data Detectives

**Names:** ___________________________ & ___________________________

## 🧭 Section 1: The Basics (The "Show Me" Tools)

*To get data, we use `SELECT` (what columns?) and `FROM` (which table?).*

**Syntax Summary:**

> `SELECT` ( column_name , _______ ) `FROM` ( _______ );
> *Tip: Use `*` to show ALL columns.*

| ID | Goal | SQL Code (Write it here!) |
| --- | --- | --- |
| **1** | Show **all columns** for every row in the `CITY` table. | `________________________________` |
| **2** | Show only the **NAME** and **POPULATION** for all cities. | `________________________________` |
| **3** | Show a list of **unique** (no duplicates) districts. | `SELECT ________ DISTRICT FROM CITY;` |

---

## 🔍 Section 2: Filtering (The "Finding" Tools)

*Use `WHERE` to filter your results. Use `AND` or `OR` to add more rules.*

**Syntax Summary:**

> `SELECT * FROM Table WHERE column` ( `=` , `!=` , `<` , `>` ) `value`;
> *Note: For text, use single quotes like 'USA'. For numbers, use no quotes.*

| ID | Goal | SQL Code (Write it here!) |
| --- | --- | --- |
| **4** | Find cities in **'USA'** with a population over **100,000**. | `________________________________` |
| **5** | Find employees in **Group 1** OR those with a salary under **1500**. | `________________________________` |
| **6** | Find all cities that are **NOT** in the 'USA'. | `________________________________` |
| **7** | Find employees whose `group_id` is **1, 2, or 3**. | `WHERE group_id IN (__, __, __);` |
| **8** | Find cities with a population **between** 100k and 200k. | `WHERE POPULATION _______ 100000 ____ 200000;` |

---

<div style="page-break-after: always;"></div>

## 👻 Section 3: The "Empty" & "Hidden" Data

*Sometimes data is missing (`NULL`) or we only know part of a name (`LIKE`).*

**Syntax Summary:**

| Goal | Symbol/Keyword | Example |
| :--- | :--- | :--- |
| Missing Data | `IS NULL` | `WHERE col IS NULL` |
| Starts with... | `LIKE 'A%'` | `%` means many letters. |
| Specific length| `LIKE 'R___'` | `_` means **one** letter. |
---

| ID | Goal | SQL Code (Write it here!) |
| --- | --- | --- |
| **9** | Find cities where the `DISTRICT` is **missing** (NULL). | `________________________________` |
| **11** | Find cities **starting** with the letter **'A'**. | `________________________________` |
| **12** | Find employees with a **4-letter** name starting with **'R'**. | `WHERE name LIKE 'R___';` |

---

## 🧹 Section 4: Intermediate Cleaning (The "Make it Pretty" Tools)

*Use functions to change how text and numbers look.*

**Syntax Summary:**

* `UPPER(col)`: Makes text BIG.
* `LEN(col)`: Counts the letters.
* `TRIM(col)`: Removes extra empty spaces.

| ID | Goal | SQL Code (Write it here!) |
| --- | --- | --- |
| **15** | Show employee names in all **UPPERCASE**. | `SELECT ________(name) FROM Employee;` |
| **14** | Show the city name and the **length** (number of letters) of the name. | `SELECT NAME, ____(NAME) FROM CITY;` |
| **17** | Select city names but **trim** (remove) the empty spaces around them. | `________________________________` |
| **13** | Show the **top 3** highest-paid employees. | `ORDER BY salary ____ LIMIT 3;` |

---

### 🛑 STOP!
* Did you remember the semicolon `;` at the end?
* Did you use `' '` for text?
