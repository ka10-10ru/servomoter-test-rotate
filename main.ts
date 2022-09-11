input.onButtonPressed(Button.A, function () {
    moter()
})
function test () {
    for (let カウンター = 0; カウンター <= 4; カウンター++) {
        servos.P1.setAngle(40 * カウンター)
        basic.pause(2000)
    }
}
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(90)
    direction = 0
})
function moter () {
    servos.P1.stop()
    if (direction == 0) {
        direction = 1
    } else {
        direction = direction * -1
    }
    servos.P1.setAngle(90 + angle * direction)
}
function beep (数値: number) {
    music.playTone(数値 * 3 + 200, music.beat(BeatFraction.Whole))
}
let direction = 0
let angle = 0
pins.setAudioPin(AnalogPin.P0)
angle = 45
direction = 0
servos.P1.setStopOnNeutral(false)
servos.P1.setPulse(500)
servos.P1.run(50)
servos.P1.setAngle(90)
basic.forever(function () {
    if (direction == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        if (direction == -1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                # . . . #
                # # . . #
                # . # . #
                # . . # #
                # . . . #
                `)
        }
    }
})
