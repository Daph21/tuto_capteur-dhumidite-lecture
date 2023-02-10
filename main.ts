let humidite2 = 0
basic.forever(function () {
    humidite2 = pins.analogReadPin(AnalogPin.P0)
    if (humidite2 > 300) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P0)))
    basic.pause(1000)
})
