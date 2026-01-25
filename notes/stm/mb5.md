## 🏠 Mission: The Intelligent Nightstand

**Objective:** Build a smart device that wakes you up, gives you weather advice, and can be turned ON or OFF like a real alarm clock.

---

### Phase 1: The Triple-Condition Alarm (Level: Apply)

**Goal:** The alarm should only start if three things are true:

1. It is **Bright** (> 100).
2. The alarm is **Active** (ON).
3. You are **not** awake yet.

#### 🧪 Lab Check 1: Fill in the Blanks

1. In Python, if I want to check if a variable is "Not True," I use the word `________`.
Example: `if not awake:`
2. The symbol for "Greater Than" is `___`.
3. To play the built-in "Ba-Ding" sound, I use: `music.play(music.________)`.

---

### Phase 2: Stopping & Speaking (Level: Analyze)

**Goal:** Once the alarm is ringing, you must stop it using a **Loud Sound** or **Button A**. Then, the micro:bit should report the temperature.

#### 🧪 Lab Check 2: Fill in the Blanks

1. After I press the button to wake up, I must change the "awake" box to `________`.
2. The `temperature()` command gives a number. To make `speech.say` read it, I must change the number to a **String** using: `str(________)`.
3. To tell the user what to do next, we use: `speech.say("Click ____ for advice")`.

---

### Phase 3: The Advice Menu (Level: Evaluate)

**Goal:** Use Button B to ask for clothing advice. This part only works after you are awake!

#### 🧪 Lab Check 3: Fill in the Blanks

1. If the temperature `t` is 12, which logic runs? `if t < 15` or `elif t < 25`?
Answer: `________________`
2. If it is 30 degrees, the `else:` code will tell the user to "Bring a __________."

---

<div style="page-break-after: always;"></div>


### Phase 4: The Alarm Toggle (Level: Create)

**Goal:** Use Button A to turn the alarm system ON or OFF (Toggle).

* **The Concept:** A "Toggle" changes a variable to its opposite.
* **The Logic:** `alarm_active = not alarm_active`

#### 🧪 Lab Check 4: Fill in the Blanks

1. If `alarm_active` is True, then `not alarm_active` is __________.
2. We show an "**O**" on the screen for ON and an "**X**" for __________.
3. We use `sleep(1000)` after the toggle so the micro:bit doesn't switch ON/OFF too fast. 1000 milliseconds = ___ second.

---

### Phase 5: Resetting for Tomorrow (Level: Synthesis)

**Goal:** When the room is dark and quiet, the micro:bit should automatically set `awake = False` so it can wake you up again tomorrow.

#### 🧪 Lab Check 5: Fill in the Blanks

1. To check the microphone's volume level (0-255) as a number, I use: `microphone.________________()`.
2. If light is < 50 AND sound is < 50, the micro:bit shows the `Image.____________` icon.

---

### 🏆 Final Practical Challenge: The Nightstand Master

**Combine all your code!**

1. **Rename your file:** `SmartAlarm_Class_No.py`
2. **Setup:** Create your `alarm_active` and `awake` variables at the top.
3. **The Loop:** Use a `while` loop to check for Light, Alarm State, and Awake State.
4. **Interaction:** Program Button A to toggle the alarm and Button B to give advice.
5. **Auto-Reset:** Make the micro:bit "go to sleep" (awake = False) when the room is dark and quiet.

---

### 🏁 Final Check

* [ ] Can you turn the alarm OFF (X) and ON (O) using Button A?
* [ ] Does the alarm only ring when the light is bright?
* [ ] Does it tell you the temperature immediately when you stop the alarm?
* [ ] Does Button B give you weather advice?
