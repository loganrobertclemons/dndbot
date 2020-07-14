const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv').config()

const functionsUtil = require('./functions/functionsUtil')

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("Dungeons and Dragons!")
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }

    if (receivedMessage.content.startsWith("!")) {
        functionsUtil.processCommand(receivedMessage)
    }
})

client.login(process.env.DISCORD_TOKEN)

