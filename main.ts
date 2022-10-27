let durchschnitt = 0
let lautstärken = [0]
basic.forever(function () {
    lautstärken.push(input.soundLevel())
    durchschnitt = 0
    for (let wert of lautstärken) {
        durchschnitt = durchschnitt + wert
    }
    durchschnitt = durchschnitt / lautstärken.length
    if (durchschnitt > 100) {
        basic.setLedColor(0xff0000)
    } else if (durchschnitt > 25) {
        basic.setLedColor(0xffff00)
    } else {
        basic.setLedColor(0x00ff00)
    }
    if (lautstärken.length > 10) {
        lautstärken.shift()
    }
    basic.pause(100)
})
