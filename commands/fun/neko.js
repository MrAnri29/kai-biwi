const random = require("something-random-on-discord").Random;


module.exports = {
    name: "neko",
    category: "fun ๐",
    description: "\"neko\" แคแแขแแแแ แแฃ แแแแแแ แแก แแ แซแแแแแ แแฅแแแแแแแกแแ!",
    usage: "แฃแแ แแแแ แแแแแแงแแแแ แแ แซแแแแแ!",

    run: async (client, message, args) => {

        let data = await random.getNeko()
        message.channel.send(data)

    }
}