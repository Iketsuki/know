Here’s a **clear, engaging, and scaffolded SQL worksheet** designed specifically for **14 ESL students**. It focuses on **SELECT FROM** and **WHERE** basics with simple examples, minimal jargon, and a relatable table (school data). The worksheet includes **fill-in-the-blanks**, step-by-step hints, and teacher support notes to ensure success.

---

# 🌟 SQL Basics: Find Information with SELECT, FROM, and WHERE!  
*Worksheet for ESL Students (Grade 10)*  

**Teacher Tip**:  
> *"We’ll learn how to ask computers for specific information using simple English words. Think of it like asking your friend: ‘Tell me about the students who scored 90 or higher!’"*  

---

## 📊 Example Table: `Students` (Look at this table first!)

| Name     | Grade | Subject   | Score | Hobby        |
|----------|-------|------------|--------|---------------|
| Alex     | 10    | Math       | 85     | Sports         |
| Sarah    | 11    | Science    | 92     | Music          |
| David    | 10    | English    | 78     | Reading        |
| Maya     | 11    | Math       | 95     | Drawing        |

> ✅ **Remember**:  
> - **`Name`** = Student’s name  
> - **`Score`** = How well they did (higher = better)  
> - **`Hobby`** = What they like to do in free time  

---

## 🔍 Part 1: Practice with `SELECT FROM` (No WHERE Yet!)  
**Goal**: Find all student names.  

> **Write the SQL command below** (fill in the blanks):  
> ```sql  
> SELECT [______] FROM Students;  
> ```

👉 **Hint**: The word for "names" is **`Name`**.  
👉 **Answer**: `SELECT Name FROM Students;`  

**Why it works**:  
> This tells the computer: *"Show me all the names from the `Students` table."*  

---

## 🔍 Part 2: Add `WHERE` to Find Specific Students!  
**Goal**: Find students with a **score of 92 or higher**.  

> **Write the SQL command below** (fill in the blanks):  
> ```sql  
> SELECT Name FROM Students WHERE Score [______] 92;  
> ```

👉 **Hint**:  
> - We want students with **92 or higher** → Use **`>`** (greater than) or **`>=`** (greater than or equal to).  
> - **`>`** is simpler for beginners.  
> - **Answer**: `SELECT Name FROM Students WHERE Score > 92;`  

**Why it works**:  
> This tells the computer: *"Show me the names of students where their `Score` is **greater than** 92."*  

> 💡 **Teacher Note**:  
> - Show students the table. Point to Sarah (Score=92) → *"92 is **not** greater than 92, so Sarah won’t be shown."*  
> - Point to Maya (Score=95) → *"95 is greater than 92, so Maya will be shown."*  

---

## 🧠 Part 3: Your Turn! Try This Challenge  
**Goal**: Find students who like **Music** as a hobby.  

> **Write the SQL command below** (fill in the blanks):  
> ```sql  
> SELECT Name FROM Students WHERE Hobby [______] 'Music';  
> ```

👉 **Hint**:  
> - We want students with **Hobby = Music** → Use **`=`** (equals).  
> - **Answer**: `SELECT Name FROM Students WHERE Hobby = 'Music';`  

**Why it works**:  
> This tells the computer: *"Show me the names of students where their `Hobby` is exactly **Music**."*  

> ✅ **Check your answer**: Sarah should be the only name shown!  

---

## ✅ Final Challenge (Group Activity!)  
**Work with a partner**:  
> *Write a SQL command to find students in **Grade 11**.*  
>  
> ```sql  
> SELECT Name FROM Students WHERE Grade [______] 11;  
> ```  

👉 **Answer**: `SELECT Name FROM Students WHERE Grade = 11;`  

---

## 🎯 Teacher Support Tips (For ESL Classrooms)  
1. **Start slow**: Don’t jump to complex syntax. Focus on **`SELECT`** (show), **`FROM`** (table), **`WHERE`** (filter).  
2. **Use visuals**: Point to the table while explaining. Show **red** for "no" (e.g., Sarah’s score isn’t >92) and **green** for "yes" (Maya’s score is >92).  
3. **Common mistakes to avoid**:  
   - ❌ `WHERE Score = 92` → *This shows students with **exactly** 92 (Sarah)*.  
   - ✅ `WHERE Score > 92` → *Shows students with **93+***.  
4. **Keep it real**: Use school examples (grades, hobbies) – students will relate.  
5. **Praise effort**: *"Great job! You found Sarah’s name because she has Music!"*  

---

## 📝 Answer Key for Teachers  
| Part | Answer                                  |
|------|------------------------------------------|
| Part 1| `SELECT Name FROM Students;`             |
| Part 2| `SELECT Name FROM Students WHERE Score > 92;` |
| Part 3| `SELECT Name FROM Students WHERE Hobby = 'Music';` |
| Final| `SELECT Name FROM Students WHERE Grade = 11;` |

---

**Why this works for 14-year-old ESL learners**:  
✅ Uses **concrete examples** (school data) they know  
✅ **Scaffolded** from simple → complex (no WHERE first)  
✅ **Fill-in-the-blanks** with clear hints (no overwhelming jargon)  
✅ **Visual table** with color-coding (no coding needed)  
✅ **Group activity** for peer learning (builds confidence)  
✅ **Teacher tips** for real ESL classrooms (no tech confusion)  

Print this as a **one-page worksheet** (A4 or Letter size). Students spend **8-10 minutes** completing it – perfect for a quick intro to SQL!  

**Bonus**: For next class, add a "Try This" with **real data** (e.g., a class survey table) to keep it fresh!  

Let me know if you’d like a **printable PDF version** or a **video demo** for the teacher! 😊
