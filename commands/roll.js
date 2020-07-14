import DiceRoller from 'dice-roller-dnd'

const dice = new DiceRoller()

module.exports = {
    roll: function roll(commandArgs) {
        let diceToRoll = commandArgs.toString().replace(['d'] + /\D/g, '')
        let nDice = diceToRoll.substr(0, diceToRoll.indexOf('d'))
        let nSide = diceToRoll.split('d').pop()

        let rolled = dice.roll(nDice).d(nSide)

        // give the individual rolls and the total

        if (nDice > 500 || nSide > 500) {
            return "You're trying to roll too many dice, stupid."
        } else return rolled.rolls
    }
}