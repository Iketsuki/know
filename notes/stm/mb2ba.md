## 🍎 Teacher Version: The Talking Smart Dice

This version includes the **Answer Key** and the **Pedagogical Rationale** behind each phase, mapped to Bloom’s Taxonomy.

---

### Phase 1: Remember (Knowledge Retrieval)

**Objective:** Recall basic syntax and hardware functions.

* **1. Library:** `import random`
* **2. Output Hardware:** `display`
* **3. Control Flow:** `while`
* **4. Range:** `1` and `6`

> **Teacher Tip:** Ensure students understand that `import` must happen before the loop begins.

---

### Phase 2: Understand (Sensors & Input)

**Objective:** Explain how the accelerometer translates physical motion into digital logic.

* **1. Sensor:** `accelerometer`
* **2. Gesture:** `shake`
* **3. Logic Gate:** `if`
* **4. Logic Check:** **do nothing** (The loop continues, but the code inside the `if` is skipped).

---

### Phase 3: Apply (Module Integration)

**Objective:** Implement external libraries to control hardware components (the speaker).

* **1. Library:** `import music`
* **2. Hardware:** `speaker` (Internal on V2)
* **3. Command:** `music.play()`
* **4. Sequence:** **before** (Creates "suspense" before the number is revealed).

---

### Phase 4: Analyze (Conditionals & Variables)

**Objective:** Use multi-way branching to create a dynamic user experience.

* **1. Library:** `speech`
* **2. Command:** `speech.say()`
* **3. Multi-way Branch:** `elif`
* **4. Operator:** `==` (Common error: students often use a single `=`, which is for assignment, not comparison).

---

### Phase 5: Create (Logical Operators)

**Objective:** Synthesize multiple input methods into a single trigger.

* **1. Hardware:** `button_b`
* **2. Logical Connector:** `or`
* **3. Logic Operator:** `or`
* **4. Final Goal:** `or` / `or` (e.g., `if accelerometer.was_gesture('shake') or button_a.is_pressed():`)
