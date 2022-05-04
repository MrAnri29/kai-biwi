const random = require("something-random-on-discord").Random;

module.exports = {
    name: "advice",
    category: "fun 😏",
    description: "მიიღეთ რანდომ რჩევა",
    usage: "უბრალოდ გამოიყენეთ ბრძანება!",

    run: async (client, message, args) => {

        let data = await random.getAdvice()
        message.channel.send(data)

    }
}