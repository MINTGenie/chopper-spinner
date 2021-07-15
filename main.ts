input.onButtonPressed(Button.A, function () {
    maqueen.servoRun(maqueen.Servos.S2, 110)
    OrientBit.resetWheelRotCnt()
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 48)
    while (OrientBit.getwheelDist(OrientBit.wheelSide.left) <= 23) {
        basic.pause(50)
    }
    maqueen.motorStop(maqueen.Motors.All)
})
input.onButtonPressed(Button.B, function () {
    maqueen.servoRun(maqueen.Servos.S2, 110)
    OrientBit.resetWheelRotCnt()
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 48)
    while (OrientBit.getwheelDist(OrientBit.wheelSide.left) <= 30) {
        basic.pause(50)
    }
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.servoRun(maqueen.Servos.S2, 20)
    basic.pause(500)
    OrientBit.resetWheelRotCnt()
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 48)
    while (OrientBit.getwheelDist(OrientBit.wheelSide.left) <= 7) {
        basic.pause(50)
    }
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.servoRun(maqueen.Servos.S2, 110)
})
maqueen.servoRun(maqueen.Servos.S1, 140)
OrientBit.enableEncoder(
DigitalPin.P0,
DigitalPin.P1,
16,
14
)
OLED12864_I2C.init(60)
basic.forever(function () {
	
})
