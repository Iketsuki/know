## ⏱️ Practical Test: The 7-Second Challenge

**Objective:** Create a game where players try to stop a timer exactly at **7 seconds**. You will learn how the `micro:bit` keeps track of time using "Running Time."

**Instructions:**

* **Rename your file:** `7SecGame_Class_ClassNumber.py`
* **Target:** Stop the timer as close to **7.000 seconds** as possible!

---

### 🧠 The Concept: What is `running_time()`?

The `micro:bit` has an internal stopwatch that starts the moment you turn it on.

* The command `running_time()` tells you how many **milliseconds** have passed.
* **1000 milliseconds = 1 second.**
* To turn milliseconds into seconds, we use math: `running_time() / 1000`.
* https://www.online-stopwatch.com/split-timer/full-screen/ 

---

### Phase 1: Planning the Game (Level: Apply)

To calculate how long your game lasted, you need two "snapshots" of time:

1. **The Start:** When you press Button A.
2. **The End:** When you press Button B.
3. **The Result:** `End Time - Start Time = Total Time`.

#### 🧪 Lab Check 1: Fill in the Blanks

1. If the `micro:bit` has been on for 5 seconds, `running_time()` will return the number __________.
2. If I press Button A at **3000ms** and Button B at **8000ms**, how many seconds passed? __________ seconds.
3. Why do we set `start_time = 0` at the very top of the code before the loop?
Answer: ___________________________________________________________

---
<div style="page-break-after: always;"></div>

### Phase 2: Building the Features (Level: Analyze)

**Mission Requirements:**

1. **Start (Button A):** When pressed, "save" the current time into the `start_time` variable. Show a "GO" icon or a checkmark.
2. **Stop (Button B):** When pressed:
* Calculate the `total_time` (End - Start).
* Show the result on the LED screen using `display.scroll()`.


3. **The Judge (Conditionals):** * **IF** the time is exactly 7 seconds (or between 6.9 and 7.1): Show a **HAPPY** face and speak "You win!"
* **ELSE:** Show a **SAD** face and speak "Try again!"



#### 🧪 Lab Check 2: Fill in the Blanks

1. To calculate the total time in seconds, the math is: `(running_time() - start_time) / ____`.
2. To check if the player won, I use an `if` statement: `if total_time == ____:`.
3. To make the game more exciting, I should add a `music.play()` sound when the button is __________.

---

### 🛠️ Programming Workspace

**Task:** Complete the code. Remember to use `import speech` and `import music` at the top!

```python
# Imports go at the top
from microbit import *

# Code in a 'while True:' loop repeats forever
start_time = 0

while True:
    if button_a.was_pressed():
        start_time = running_time()
        # display.scroll(start_time/1000)    

        # 2. Calculate the elapsed time
        # 3. Show the time on the screen
        # 4. Use IF/ELSE to check if it is 7 seconds

```

---

<div style="page-break-after: always;"></div>

### ✅ Practical Test Rubric

| Criteria | Points | Check |
| --- | --- | --- |
| **Correct Filename** (`7SecGame_Class_No.py`) | 5 | [ ] |
| **Start Logic:** Button A saves `running_time()` | 10 | [ ] |
| **Stop Logic:** Button B calculates and scrolls time | 10 | [ ] |
| **Winning Logic:** Different output for 7 seconds | 15 | [ ] |
| **Audio:** Uses speech or music feedback | 10 | [ ] |
| **TOTAL** | **50** |  |

---

**Next Step:** Would you like me to provide the **Answer Key** for the Lab Checks or a **Sample Solution** for the 7-Second Game?
