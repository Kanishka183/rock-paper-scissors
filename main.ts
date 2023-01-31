function updateScores () {
    OLED.clear()
    OLED.writeStringNewLine("Player A " + PlayerA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B " + PlayerB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds " + Rounds)
}
function reset () {
    OLED.init(128, 64)
    PlayerA = 0
    PlayerB = 0
    Rounds = 0
    Ties = 0
    OLED.writeStringNewLine("Shall we play a game?")
    basic.pause(2000)
    updateScores()
}
let Rounds = 0
let Ties = 0
let PlayerB = 0
let PlayerA = 0
reset()
