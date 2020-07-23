const axios = require('axios')

module.exports = {
    randomEnemyEncounter: async function randomEnemyEncounter(commandArgs) {

        // Easy Medium Hard Deadly,
        // Terrain

        let players = `players%5B%5D=${commandArgs[1]}&`
        let multiPlayers = players.repeat(commandArgs[0])
        let difficulty = commandArgs[2].toUpperCase()
        let biome = commandArgs[3].toUpperCase()

        console.log("Number of Players: " + multiPlayers + " And here's the command args: " + commandArgs)

        try {
            const response = await axios.get(`hhttp://tools.goblinist.com/g/encounter?${multiPlayers}difficulty=${difficulty}&gType=mixed&environment=${biome}&basicRulesOnly=false&min=1&max=25&seed=No+Seed`)
            console.log(response.data)
        } catch (error) {
            console.log(error)
            return "You goofed up your command, dummy. Try again. If you still need help, run the command `!help [topic]`"
        }

        return "I guess this works"
    }
}