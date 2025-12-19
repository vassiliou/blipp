def on_logo_long_pressed():
    global SLEEP, TIMER
    SLEEP = 0
    music.play(music.builtin_playable_sound_effect(soundExpression.yawn),
        music.PlaybackMode.UNTIL_DONE)
    music.set_built_in_speaker_enabled(False)
    basic.show_leds("""
        . . . . .
        # # . # #
        . . . . .
        . # # . .
        . # # . .
        """)
    for index in range(100):
        basic.pause(1000)
        SLEEP += 1
    music.set_built_in_speaker_enabled(True)
    TIMER = 0
    music.play(music.builtin_playable_sound_effect(soundExpression.yawn),
        music.PlaybackMode.UNTIL_DONE)
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def on_button_pressed_a():
    global TIMER
    music.play(music.string_playable("C D C D - - - - ", 120),
        music.PlaybackMode.UNTIL_DONE)
    for index2 in range(5):
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            . # # # .
            """)
    basic.show_leds("""
        . # . # .
        . # . # .
        . . . . .
        . # . # .
        . # # # .
        """)
    TIMER = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global TIMER
    music.play(music.string_playable("E D E D C - - - ", 120),
        music.PlaybackMode.UNTIL_DONE)
    for index3 in range(5):
        basic.show_leds("""
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            """)
    basic.show_leds("""
        . # . # .
        . # . # .
        . . . . .
        . # . # .
        . # # # .
        """)
    TIMER = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

TIMER = 0
SLEEP = 0
basic.show_leds("""
    . # . # .
    . # . # .
    . . . . .
    . # . # .
    . # # # .
    """)

def on_forever():
    if TIMER < 10:
        music.set_volume(62)
        music.play(music.string_playable("C5 A F B G - - - ", 120),
            music.PlaybackMode.UNTIL_DONE)
        basic.show_leds("""
            . . . . #
            . # . # .
            . . . . .
            . # # # .
            . # . # .
            """)
basic.forever(on_forever)

def on_forever2():
    if TIMER == 5.5:
        music.play(music.string_playable("C5 A C5 A F - - - ", 120),
            music.PlaybackMode.UNTIL_DONE)
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            """)
basic.forever(on_forever2)

def on_every_interval():
    global TIMER
    TIMER += 0.5
    music.set_volume(50)
    music.play(music.string_playable("C5 B C5 - - - - - ", 120),
        music.PlaybackMode.UNTIL_DONE)
loops.every_interval(30000, on_every_interval)
