# ICT T02Q02: SQL & Database Concepts
### Question 1: Inventory Management (SQL)

A retail store uses a table `PRODUCT` to manage its stock.

Table: PRODUCT

| Field name | Description | Example |
| --- | --- | --- |
| PID | Product ID (Primary Key) | P882 |
| PNAME | Product Name | Wireless Mouse |
| CATEGORY | Type: EL-Electronics, HO-Home, FD-Food | EL |
| PRICE | Unit Price ($) | 150 |
| STOCK | Current quantity in warehouse | 12 |
| SUPP_EMAIL | Supplier contact email | tech@supp.com |

**Write SQL statements for the following:**

 **(a)** List the names (`PNAME`) and prices of all 'Electronics' (EL) products with a price between 100 and 500 inclusive. (2 marks)
```
{SELECT PNAME, PRICE FROM PRODUCT WHERE CATEGORY = 'EL' AND PRICE BETWEEN 100 AND 500}

```
 **(b)** List the product IDs and names of products where the supplier's email ends with '@gmail.com'. (2 marks)
```
{SELECT PID, PNAME FROM PRODUCT [1] WHERE SUPP_EMAIL LIKE '%@gmail.com' [1] }


```
 **(c)** Calculate the total value (Price  Stock) of all 'Food' (FD) products. (2 marks)
```
{SELECT SUM(PRICE * STOCK) [1]  FROM PRODUCT WHERE CATEGORY = 'FD'[1] }


```
 **(d)** Find the average price of products for each category, but only display categories where the average price is higher than 50. (3 marks)
{SELECT CATEGORY, AVG(PRICE) FROM PRODUCT [1] GROUP BY CATEGORY [ must select as well 1]  HAVING AVG(PRICE) > 50 [1] }


<div style="page-break-after: always;"></div>


### Question 2: Employee Attendance (Database & Spreadsheet)

A company uses a table `ATTENDANCE` to track staff work hours. 
Table: ATTENDANCE

| EMP_ID | ENAME | HOURS_WORKED | LATE_COUNT |
| --- | --- | --- | --- |
| E01 | Sam Lau | 40 | 0 |
| E02 | Ivy Cheung | 38 | 2 |
| E03 | Ben Kwok | 42 | 5 |
| E04 | Ada Wong | 35 | 1 |

**(a)** State the **Primary Key** of the `ATTENDANCE` table and explain its required properties in a database. (2 marks) 
{EMP_ID.[1] Not Null, Unique.[either property: 1]}
<br>

**(b)** What is the output of the following SQL statement? (1 mark) 
```
SELECT COUNT(_____{NAME  [1] }) 
FROM ATTENDANCE 
WHERE HOURS_WORKED < 40 AND LATE_COUNT > 0
```
{2 [1] }
<br><br>
**(c)** The company uses a spreadsheet to calculate bonuses based on performance. The teacher enters a formula in cell **E2** and then **copies it down** to the range **E3:E100**.

|  | A | B | C | D | E |
| --- | --- | --- | --- | --- | --- |
| **1** | ID | Name | Hours | Late | Bonus |
| **2** | E01 | Sam Lau | 40 | 0 |  |
| **3** | E02 | Ivy Cheung | 38 | 2 |  |
| **...** | ... | ... | ... | ... | ... |
| **101** | **Target** |  | 40 | 0 |  |

**i)** The bonus is **500** if the employee's `Hours` is at least the target in **C101** AND their `Late` count is exactly the target in **D101**. Otherwise, the bonus is **0**. Complete the formula for cell **E2**, ensuring it can be copied down correctly: (3 marks) 

`=IF(AND(C2 >=` ___{$C$101 [1]}, `D2 =` ___{$D$101 [1]3rd mark for correct use of absolute referencing with $ [1]} `), 500, 0)` 

**ii)** In the database table, `HOURS_WORKED` is set to a **Numeric** data type. If a clerk accidentally enters "Forty" (text) into this field, what will happen? (1 mark)
{A **Data Type** Mismatch error will occur, or the system will reject the input because "Forty" is **text/ string** and the field requires a number. [bolded words are required 1]}
<br><br>
**iii)** It is suggested to use the employee's `ENAME` as the Primary Key instead of `EMP_ID`. Give one reason why this is a poor database design choice. (1 mark)
{Names can be **repeated/ not unique** [bolded words required: 1]}
<div style="page-break-after: always;"></div>

3. Bonus MC:
**Which of the following SQL statements will correctly retrieve the names of all products that are either in the 'Home' category or have a price less than 50?** (1 mark)

A) `SELECT PNAME FROM PRODUCT WHERE CATEGORY = 'HO' OR PRICE < 50
B) `SELECT PNAME FROM PRODUCT WHERE CATEGORY = 'HO' AND PRICE < 50`
C) `SELECT PNAME FROM PRODUCT WHERE CATEGORY = 'HO' OR PRICE > 50`
D) `SELECT PNAME FROM PRODUCT WHERE CATEGORY = 'HO' AND PRICE > 50`
{A [1] }
4. Bonus MC:
**Which SQL clauses are used to filter records based on a specified condition after grouping the results?** (1 mark)
i. `WHERE`
ii. `GROUP BY`
iii. `HAVING`
A. i only
B. ii only
C. iii only
D. ii and iii
{C [1] }
