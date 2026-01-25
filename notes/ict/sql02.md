# 🚀 SQL Mission Part 2: The Data Master

**Names:** ___________________________ & ___________________________

Welcome to Part 2! Now we move from just finding rows to **calculating** answers and **grouping** data together.

---

## 🔢 Section 1: Aggregates (The "Stat-Crunchers")

*Aggregate functions take many rows and turn them into **one single number**.*

**Syntax Summary:**

> `SELECT FUNCTION(column_name) AS AliasName FROM Table;`
> *Functions: `COUNT`, `SUM`, `AVG` (Average), `MIN` (Lowest), `MAX` (Highest)*

| ID | Goal | SQL Code (Write it here!) |
| --- | --- | --- |
| **36** | **Count** the total number of employees as 'TotalEmp'. | `________________________________` |
| **37** | Calculate the **Sum** of all salaries as 'TotalSalary'. | `________________________________` |
| **38** | Find the **Average** salary as 'AvgSalary'. | `________________________________` |
| **39** | Find the **Lowest** and **Highest** salary in one query. | `________________________________` |
| **40** | Count how many **unique** CountryCodes exist. | `________________________________` |

---

## 🏘️ Section 2: Grouping (The "Organizer")

*`GROUP BY` puts rows with the same value into "buckets" so you can calculate stats for each bucket.*

**Syntax Summary:**

> `SELECT column, AGG_FUNCTION(col) FROM Table GROUP BY column;`

| ID | Goal | SQL Code (Write it here!) |
| --- | --- | --- |
| **41** | Count how many cities are in **each** CountryCode. | `________________________________` |
| **42** | Find the average salary for **each** `group_id`. | `________________________________` |
| **44** | Find the **Max Population** in each District. | `________________________________` |

---

<div style="page-break-after: always;"></div>

## ⚖️ Section 3: HAVING (The "Group Filter")

*`WHERE` filters rows. `HAVING` filters groups. You use `HAVING` after the `GROUP BY`.*

**The Difference Rule:**

* **WHERE**: Filters **before** the math.
* **HAVING**: Filters **after** the math (on the result of `SUM`, `AVG`, etc.).

| ID | Goal | SQL Code (Write it here!) |
| --- | --- | --- |
| **43** | Show `group_ids` where the average salary is **over 3000**. | `________________________________` |
| **37** | Show CountryCodes where the average population is **under 150k**. | `________________________________` |

---

## 🏆 Section 4: Integrated Mastery (The "Boss" Levels)

*Combine everything: Filters, Math, Grouping, and Sorting!*

| ID | Goal | SQL Code (Write it here!) |
| --- | --- | --- |
| **46** | Find the avg salary per group, but **only** for employees whose names start with 'A'. | `________________________________` |
| **51** | Calculate 'Efficiency' (`salary/months`). Show Name and Efficiency. **Sort** by Efficiency (High to Low). | `________________________________` |
| **54** | Find employees hired in **January** (Month 1). Sort by hire_date. | `________________________________` |
| **55** | **THE FINAL BOSS:** Show Group ID and Total Salary ('GroupSum'). Only show groups where GroupSum < 5000. Order by GroupSum. | `SELECT ________________________` |

---

### 🎓 Mission Complete!

**Check your logic:**

1. Does `GROUP BY` come before or after `WHERE`? 
2. Does `ORDER BY` always come at the very end? 
3. Did you use `AS` to name your new calculation columns?
