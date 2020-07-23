const dice = require('../commands/roll')
const randomEncounter = require('../commands/encounter')

module.exports = {
    processCommand: async function processCommand(receivedMessage) {
        let fullCommand = receivedMessage.content.substr(1)
        let splitCommand = fullCommand.split(" ")
        let primaryCommand = splitCommand[0]
        let commandArguments = splitCommand.slice(1)

        switch (primaryCommand) {
        case 'help':
            commandArguments.length == 0 ? receivedMessage.channel.send(" Try `!help [topic]`") : receivedMessage.channel.send("You need help with " + commandArguments)
            break;
        case 'roll':
            receivedMessage.channel.send(dice.roll(commandArguments))
            break;
        case 'random-enemy':
            receivedMessage.channel.send(await randomEncounter.randomEnemyEncounter(commandArguments))
        }
    }
}