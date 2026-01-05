from microbit import *
import random
import music
import speech

# --- Initialization ---
# Start volume at 128 (halfway)
vol = 128
set_volume(vol)

# --- Phase 8: Custom Dice Images in a List ---
# . = off, 9 = bright
dice_faces = [
    Image("00000:00000:00900:00000:00000"), # 1
    Image("90000:00000:00000:00000:00009"), # 2
    Image("90000:00000:00900:00000:00009"), # 3
    Image("90009:00000:00000:00000:90009"), # 4
    Image("90009:00000:00900:00000:90009"), # 5
    Image("90009:00000:90009:00000:90009")  # 6
]


while True:
    display.show(Image.MUSIC_QUAVER)
    # --- Phase 7: Volume Control ---
    if button_a.was_pressed():
        vol = vol + 16
        if vol > 255: # Keep it under the limit
            vol = 255
        set_volume(vol)
        display.show(Image.ARROW_N) # Feedback for the user
        sleep(200)

    if button_b.was_pressed():
        vol = vol - 16
        if vol < 0: # Keep it above zero
            vol = 0
        set_volume(vol)
        display.show(Image.ARROW_S) # Feedback for the user
        sleep(200)
        
    # --- Phase 2-4: The Dice Roll ---
    if accelerometer.was_gesture('shake'):
        # Music (Phase 3)
        music.play(['g4:2', 'a4:2', 'b4:2', 'g4:2', 'c5:6'], wait=True)
        
        # Random number (Phase 1)
        roll = random.randint(1, 6)
        
        # Show custom image (Phase 8)
        # Note: lists start at 0, so 0-5 matches dice 1-6
        display.show(dice_faces[roll - 1])
        
        # Speech (Phase 4)
        if roll == 6: # This is the 6th item (index 5)
            speech.say('six, seven?')
        elif roll == 5:
            speech.say('fi i i i ive')
        elif roll == 4:
            speech.say('for or or or')
        elif roll == 3:
            speech.say('threeeeee')
        elif roll == 2:
            speech.say('twooooo')
        elif roll == 1:
            speech.say('it is onee!')
        sleep(2000)
