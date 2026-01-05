## 🚀 Mission 2: The Sound & Style Master

**Objective:** Learn to control volume (loudness), use variables to remember numbers, and design your own custom dice patterns.

---

### Phase 6: The Mute Button (Level: Apply)

**Goal:** Use Button A to "Mute" (silence) and "Unmute" your dice.

* **The Concept:** In coding, silence is just a number.
* **Loud:** `set_volume(128)`
* **Silent:** `set_volume(0)`
* **The Logic:** You need the micro:bit to "toggle." This means checking: "If the volume is 0, make it loud. Otherwise, make it 0."

#### 🧪 Lab Check 6: Fill in the Blanks

1. To turn off all sound, I should set the volume to _____.
2. If I want to check if the volume is currently silent, I use the symbol `==`.

- Example: `___ vol == ___:`

### Phase 7: Volume Control (Level: Analyze)

**Goal:** Use Button A to make it louder (+16) and Button B to make it quieter (-16).

* **The Concept (Variables):** You need a "box" to store the volume level. We call this a **Variable**.
* **The Math:** 
    - Press A $\rightarrow$ `v = v + 16`
    - Press B $\rightarrow$ `v = v - 16`
* **The Limits:** Sound cannot go below **0** or above **255**.

#### 🧪 Lab Check 7: Fill in the Blanks

1. At the very top of my code, I need to create a variable.

Example: `vol = 128`. This is called **initializing** the variable.

2. To make the sound louder by 16, my code should say:

`vol = vol ___ 16`.

1. If my volume is 255 and I press Button A, the number stays 255 because that is the ______ .
2. After I change the number in the "box," I must tell the hardware to change by using the command: `set_volume(__________)`.

---

<div style="page-break-after: always;"></div>

### Phase 8: Creative Design (Level: Create)

**Goal:** Don't use standard numbers! Design your own "Dice Pattern" for the LED screen.

* **The Concept (Images):** The micro:bit can show more than just numbers. You can draw dots just like a real dice.
* **The Design:** Use `Image()` to define which LEDs are on (`9` or `#`) and which are off (`0` or `.`).

#### 🧪 Lab Check 8: Fill in the Blanks

1. In a 5x5 LED grid, the number `0` means the light is __, and the number `9` means the light is at maximum brightness.
2. To show a custom image of the number 1 (a dot in the middle), my code would look like this:

`dice_one = Image("00000:00000:00_00:00000:00000")`.

*Which number is missing in the middle to turn on the center light?* Answer: __.

3. Instead of `display.show(x)`, I will now use `if x == 1: display.show(__________)`.

---

### 🏁 Final Mission Challenge

Can you combine everything?

* **Shake** to roll.
* **Button A** to make it louder.
* **Button B** to make it quieter.
* **The Screen** shows your custom dots instead of a number.
