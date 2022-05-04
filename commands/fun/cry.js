const discord = require("discord.js");
const random = require("something-random-on-discord").Random;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "cry",
    category: "fun 😏",
    description: "იტირეთ",
    run: async (client, message, args) => {

        let data = await random.getAnimeImgURL("cry");

        let embed = new discord.MessageEmbed()
            .setImage(data)
            .setColor("RANDOM")
            .setFooter(`${message.author.username}-ი ტირის 😭`)
            .setTimestamp()

        message.channel.send(embed);
    }
};