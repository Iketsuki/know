## 🪙 Practical Test: The Digital Coin Flipper

**Objective:** Use your skills to create a digital "Coin Flipper." Instead of rolling a 1–6 dice, your `micro:bit` will choose between **Heads** or **Tails**.

**Important Instructions:**

* **Rename your file:** Before you start, save your work as `CoinFlip_ClassClassNumber.py` (or `.hex`).
* **Example:** `CoinFlip_2A05.py`

---

### 📋 The Project Requirements

Your program must include the following **4 Features**:

#### 1. The Trigger (Input)

The coin should only flip when you **shake** the `micro:bit`.

* *Hint:* Which sensor detects a shake?

#### 2. The Random Choice (Logic)

The computer must pick a random number.

* Since a coin has only 2 sides, your `random.randint` should be between **1 and 2**.
* Let **1 = Heads** and **2 = Tails**.

#### 3. Visual & Audio Feedback (Output)

When the coin is "flipping" (before the result shows):

* Play a short **music** note or melody.
* **Challenge:** Can you make the screen show a loading animation or flash?

#### 4. The Result (Conditionals)

* **IF** the result is Heads: Show a custom **Image** (like a large 'H') and **speak** "Heads!"
* **IF** the result is Tails: Show a custom **Image** (like a large 'T') and **speak** "Tails!"
  
#### 5. Bonus (Additional Features)
Think of more fancy features (e.g. volume button/ more visuals/ animation/ game functions).

Describe your additional feature implemented below:

---
<br>

---

### 🧪 Practical Lab Check: Planning your Code

**Fill in the blanks to plan your logic before you code:**

1. To choose between two options, I will use the code: `result = random._____________(__, __)`.
2. I need to use an `if` statement to check the result.
`result == 1:` means the coin is __________.
`result == 2:` means the coin is __________.
3. To make the `micro:bit` talk, I must remember to put `import __________` at the very top of my script.
4. Write the code to show a simple "T" for Tails using coordinates or a string:
`tails_image = Image("_____:_____:_____:_____:_____")`

---

### 🛠️ Programming Workspace

Use the [micro:bit Python Editor](https://python.microbit.org/) to write your code.

---

### ✅ Rubric (How you will be graded)

| Criteria | Points | Check |
| --- | --- | --- |
| **Correct Filename** | 5 | [   ] |
| **Shake Sensor** | 10 | [   ] |
| **Random Logic** | 10 | [   ] |
| **Sound/Speech** | 10 | [   ] |
| **Custom Images** | 15 | [   ] |
| **Bonus** | 5 | [   ] |
| **TOTAL** | **50** | [   ] |

---
Once you have finished, show your teacher. **Good luck!**
