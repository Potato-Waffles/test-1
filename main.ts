input.onButtonPressed(Button.A, function () {
    soundExpression.spring.play()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hey!")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
	
})
