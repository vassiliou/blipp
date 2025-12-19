input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    SLEEP = 0
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    music.setBuiltInSpeakerEnabled(false)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # . .
        . # # . .
        `)
    for (let index = 0; index < 100; index++) {
        basic.pause(1000)
        SLEEP += 1
    }
    music.setBuiltInSpeakerEnabled(true)
    TIMER = 0
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C D C D - - - - ", 120), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            . # # # .
            `)
    }
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # . # .
        . # # # .
        `)
    TIMER = 0
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("E D E D C - - - ", 120), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
    }
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # . # .
        . # # # .
        `)
    TIMER = 0
})
let SLEEP = 0
let TIMER = 0
TIMER = 0
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    . # . # .
    . # # # .
    `)
loops.everyInterval(600000, function () {
    if (TIMER > 20) {
        music.setVolume(62)
        music.play(music.stringPlayable("C5 A F B G - - - ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . # . # .
            `)
    }
})
loops.everyInterval(300000, function () {
    if (TIMER == 10) {
        music.play(music.stringPlayable("C5 A C5 A F - - - ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
loops.everyInterval(30000, function () {
    TIMER += 0.5
})
