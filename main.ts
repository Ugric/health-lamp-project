pins.analogWritePin(AnalogPin.P2, 1023)
/*
let brightness = 0
const delaymax = 20 
const steps = 1 
pins.digitalWritePin(DigitalPin.P2, 1) 
basic.forever(function () {
 const delay = brightness * delaymax
 console.log(delay)
if (Math.ceil(delay) != delaymax) pins.digitalWritePin(DigitalPin.P2, 0)
basic.pause(delaymax - delay)
if (Math.floor(delay)!= 0) pins.digitalWritePin(DigitalPin.P2, 1)
basic.pause(delay)
 })
basic.forever(function () {
brightness = pins.analogReadPin(AnalogPin.P0) / 1023
 basic.pause(delaymax)
 })
*/
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P2, 1023)
    basic.pause(10000 - 250)
    pins.analogWritePin(AnalogPin.P2, 1011.5)
    basic.pause(250)
    radio.sendNumber(randint(60, 120))
})
radio.setGroup(1)