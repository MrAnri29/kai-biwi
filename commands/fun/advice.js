const random = require("something-random-on-discord").Random;

module.exports = {
    name: "advice",
    category: "fun ๐",
    description: "แแแแฆแแ แ แแแแแ แ แฉแแแ",
    usage: "แฃแแ แแแแ แแแแแแงแแแแ แแ แซแแแแแ!",

    run: async (client, message, args) => {

        let data = await random.getAdvice()
        message.channel.send(data)

    }
}