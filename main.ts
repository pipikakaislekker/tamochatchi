let knuffel = 20
let voeding = 20
let dood = 0
loops.everyInterval(500, function () {
    knuffel += -1
    voeding += -1
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        knuffel += 5
    }
})
basic.forever(function () {
    for (let index = 0; index < 1000000; index++) {
        if (knuffel >= 10 && voeding >= 10) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
        if (knuffel < 10 && knuffel > 0 && (voeding < 10 && voeding > 0)) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
        if (knuffel <= 0 || voeding <= 0) {
            basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                # # # # #
                . . . . .
                `)
            dood = 1
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        voeding += 5
    }
})
basic.forever(function () {
    if (dood == 1 && input.buttonIsPressed(Button.B)) {
    	
    }
})
