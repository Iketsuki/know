## 🔑 Answer Key: Mission 3

### Lab Check 1: Phase 1

1. In Python, the symbol for "Less Than" is **`<`**.
1. If I want the micro:bit to do something only when I press Button A, I start with: `if button_a.**was_pressed**():`.

### Lab Check 2: Phase 2

1. I use `if` for the first check, and **`elif`** for the second check.
1. If the temperature is **30°C**, which advice will the micro:bit give? **Bring a fan!** (Because 30 is not less than 15 or 25).
1. **Complete the logic:**

```python
if temp < 15:
    speech.say("Wear warm clothes")
elif temp < 25:
    speech.say("Nice weather")
else:
    speech.say("Bring a fan")
```

### Lab Check 3: Phase 3

1. The `temperature()` sensor measures in degrees Celsius: **True**.
1. Why save it in a variable `t`? **So the computer "remembers" the value. You don't have to ask the sensor again for every `if` statement.** (Also makes the code cleaner).
1. To see the temperature number on the screen: `display.**scroll**(t)`. (Note: `scroll` is best for numbers with multiple digits).

---

### 🧪 Advanced Lab Check: Thinking Ahead

1. **The Ghost Temperature:** Answer: **No**. (Code outside the loop runs only once when the micro:bit starts).
1. **Double Sensors:** The word for checking two conditions is **`and`**.
1. **Accuracy:** To fix a sensor that is 3 degrees too high: `t = temperature() - **3**`.

---

### 🛠️ Thinking Like an Engineer (Phase 8 Answers)

1. The command for built-in images: `display.show(**Image.SQUARE**)` (or `Image.HAPPY`, etc).
1. Where to place it? **Inside the `if/elif/else` blocks, right next to the `speech.say()` command for that temperature.**

---

### 🏁 Sample Final Code (For Teacher Reference)

```python

from microbit import *

import speech

while True:
    # Get the real data (Phase 3)
    t = temperature()

    # Button A: Status Check (Phase 1)
    if button_a.was_pressed():
        display.scroll(t)
        if t < 18:
            speech.say("This is cold")
        else:
            speech.say("It is not cold")

    # Button B: Advice & Icons (Phase 2 & Challenge)
    if button_b.was_pressed():
        if t < 15:
            display.show(Image.SQUARE)
            speech.say("Wear warm clothes")
        elif t < 25:
            display.show(Image.HAPPY)
            speech.say("Nice weather")
        else:
            # Phase 8 Custom design example
            hot_sun = Image("09090:99999:09990:99999:09090")
            display.show(hot_sun)
            speech.say("Bring a fan")   
    sleep(100) # Small pause to save battery
```
