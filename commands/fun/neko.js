const random = require("something-random-on-discord").Random;


module.exports = {
    name: "neko",
    category: "fun 😏",
    description: "\"neko\" ფოტოები თუ გინდათ ეს ბრძანება თქვენთვისაა!",
    usage: "უბრალოდ გამოიყენეთ ბრძანება!",

    run: async (client, message, args) => {

        let data = await random.getNeko()
        message.channel.send(data)

    }
}