radio.onReceivedNumber(function (receivedNumber) {
    Signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    serialNumber = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    if (Signal < -95) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (Signal < -85) {
        basic.showIcon(IconNames.Diamond)
    } else if (Signal < -60) {
        let list: number[] = []
        basic.showIcon(IconNames.Chessboard)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Chessboard)
        if (list.indexOf(serialNumber) < 0) {
            list.push(serialNumber)
            game.addScore(1)
            basic.showNumber(game.score())
            basic.pause(2000)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let serialNumber = 0
let Signal = 0
radio.setGroup(1)
let beacons = [0, 1]
basic.forever(function () {
    if (true) {
    	
    }
})
