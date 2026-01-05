## 🎨 Mission 3: The Designer's Touch

**Objective:** To move away from simple numbers and design your own custom dice patterns using the LED grid and **Python Lists**.

---

### Phase 8: Creative Design (Level: Create)

**Goal:** Draw your own unique patterns for the numbers 1 to 6.

On a `micro:bit`, the LED grid is a 5x5 square. Each light can have a brightness from **0** (off) to **9** (brightest).

**Instructions:**

1. Use the grids below to plan your design.
2. Put a **9** where you want a light to be ON.
3. Put a **0** where you want a light to be OFF.

| **Face 1** (One) | **Face 2** (Two) | **Face 3** (Three) |
| --- | --- | --- |
| `0 0 0 0 0` | `0 0 0 0 0` | `0 0 0 0 0` |
| `0 0 0 0 0` | `0 0 0 0 0` | `0 0 0 0 0` |
| `0 0 0 0 0` | `0 0 0 0 0` | `0 0 0 0 0` |
| `0 0 0 0 0` | `0 0 0 0 0` | `0 0 0 0 0` |
| `0 0 0 0 0` | `0 0 0 0 0` | `0 0 0 0 0` |

| **Face 4** (Four) | **Face 5** (Five) | **Face 6** (Six) |
| --- | --- | --- |
| `0 0 0 0 0` | `0 0 0 0 0` | `0 0 0 0 0` |
| `0 0 0 0 0` | `0 0 0 0 0` | `0 0 0 0 0` |
| `0 0 0 0 0` | `0 0 0 0 0` | `0 0 0 0 0` |
| `0 0 0 0 0` | `0 0 0 0 0` | `0 0 0 0 0` |
| `0 0 0 0 0` | `0 0 0 0 0` | `0 0 0 0 0` |

---
<div style="page-break-after: always;"></div>

### Phase 9: Organizing with Lists (Level: Apply)

**Goal:** Put all 6 designs into one "List" so the computer can find them easily.

* **The Concept (Lists):** A List is like a bookshelf. Each shelf has a number (an **index**).
* **Important:** In Python, we start counting at **0**.
* `dice_list[0]` is your 1st image.
* `dice_list[5]` is your 6th image.



**🛠️ Task:** Look at the `Image()` section in the reference. Create a list called `all_faces` and put your 6 designs inside it using square brackets `[ ]`.

---

### 🧪 Lab Check: Mission 3

**Fill in the blanks:**

1. To create an image in Python, I use the command `Image("____:____:____:____:____")`. Each colon `:` separates a new **\_\_\_\_** of lights.
2. If I want to show my 3rd design from a list named `all_faces`, I would write: `display.show(all_faces[___])`. (Remember to count starting from \_\_\_\_!).
3. A List starts with a **square bracket** `____` and each item inside is separated by a **\_\_\_\_\_** `,`.
4. Why is a List better than making 6 separate variables?
Answer: ___________________________________________________________

---

### 🏁 Final Challenge: The Total Package

Combine everything you have learned!

1. **Import** all 4 modules (microbit, random, music, speech).
2. **Create** your `all_faces` list.
3. **Set** the starting volume.
4. **If Shaken:** Play music  Pick a random index (0-5)  Show the image from your list  Say the number.
5. **If Button A/B:** Change the volume variable and use `music.set_volume()`.

**Next Step:** Challenges
1. more numbers available in the dice
2. more visual when control volume or in other second_number
