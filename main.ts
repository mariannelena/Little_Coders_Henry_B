let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
let go = 0
input.onButtonPressed(Button.A, function () {
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
    moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
    moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
    moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
    moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    moveMotorZIP.show()
    go = 1
    while (go == 1) {
        basic.showIcon(IconNames.Rabbit)
        Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
        if (Kitronik_Move_Motor.measure() > 20) {
            basic.showLeds(`
                . # . # .
                . # . # .
                # # . # #
                . # . # .
                . . # . .
                `)
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 25)
            basic.showIcon(IconNames.Giraffe)
        } else {
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 15)
        }
        basic.pause(100)
    }
    Kitronik_Move_Motor.stop()
})
input.onButtonPressed(Button.B, function () {
    go = 2
})
