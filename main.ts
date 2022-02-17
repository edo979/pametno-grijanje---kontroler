radio.onReceivedValue(function (name, value) {
    if (name == "0") {
        if (value == -2) {
            list[trenutni - 1] = 0
        } else {
            list[trenutni - 1] = 1
        }
    }
})
let list: number[] = []
let trenutni = 0
radio.setGroup(5)
trenutni = 1
list = [
1,
1,
1,
1
]
let snaga = 0
basic.forever(function () {
    basic.pause(12 * 1000)
    radio.sendValue("1", trenutni)
    trenutni += 1
    if (trenutni > 4) {
        trenutni = 1
    }
    snaga = 0
    for (let element of list) {
        snaga = snaga + element
    }
    basic.clearScreen()
    if (snaga == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (snaga == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    }
    if (snaga == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    }
    if (snaga == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (snaga == 4) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
