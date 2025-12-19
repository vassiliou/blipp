basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
loops.everyInterval(60000, function () {
    music.setVolume(50)
    music.play(music.stringPlayable("C5 B C5 - - - - - ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
