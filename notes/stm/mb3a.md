## 🔑 Answer Key: Mission 2 Lab Checks

### Phase 6: The Mute Button

| Question | Answer | Why? |
| --- | --- | --- |
| 1. To turn off all sound, I should set the volume to... | **0** | In digital sound, 0 means no power is going to the speaker. |
| 2. If I want to check if the volume is currently silent... | **0** | `if my_volume == 0:` checks if the current value is zero. |
| 3. The module I need to import is the... | **music** | The `set_volume` tool lives inside the `music` library. |

---

### Phase 7: Volume Control

| Question | Answer | Why? |
| --- | --- | --- |
| 1. Initializing the variable... | **volume_level = 128** | We start in the middle (half of 255) so the user can go up or down. |
| 2. To make the sound louder... | **+** (plus) | Adding to the number increases the intensity of the sound. |
| 3. 255 is the... | **maximum** (or **highest**) | The micro:bit cannot process a volume number higher than 255. |
| 4. Update the hardware using... | **volume_level** | You must pass your "box" (variable) into the `set_volume()` command. |

---

### Phase 8: Creative Design

| Question | Answer | Why? |
| --- | --- | --- |
| 1. The number 0 means the light is... | **off** (or **dark**) | 0 is no brightness; 9 is full brightness. |
| 2. Which number is missing in the middle? | **9** | `00000:00000:00900:00000:00000` creates a single bright dot in the center. |
| 3. Instead of `display.show(x)`, I will use... | **dice_one** | You are telling the micro:bit to show your custom `Image` variable instead of a number. |

---
<div style="page-break-after: always;"></div>

## 💡 Teaching Tip for ESL Students

When explaining **Variables** (Phase 7), use the "Box" analogy:

* **The Variable Name** (`v`) is the label on the outside of the box.
* **The Value** (`128`) is the piece of paper inside the box.
* **The Math** (`v + 16`) is taking the paper out, changing the number, and putting it back.

---
