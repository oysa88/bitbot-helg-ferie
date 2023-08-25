input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (kjør) {
        kjør = false
    } else {
        kjør = true
    }
})
let kjør = false
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `, 0)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `, 0)
    } else if (kjør) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `, 0)
    } else {
        radio.sendNumber(0)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `, 0)
    }
})
