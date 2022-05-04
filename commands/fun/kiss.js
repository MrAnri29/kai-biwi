const discord = require("discord.js");
const random = require("something-random-on-discord").Random;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "kiss",
    category: "fun 😏",
    description: "აკოცე ვიღაცას",
    usage: "უბრალოდ გამოიყენეთ ბრძანება!",
    
    run: async (client, message, args) => {

        let target = message.mentions.members.first()

        let data = await random.getAnimeImgURL("kiss");
        
        const undefinedMember = new MessageEmbed()
        undefinedMember.setDescription("🤨 ბიჯო შენს თავს კოცნი?!\n`მოთაგე ვინმე ვისაც უნდა აკოცო სიმონ`")
        undefinedMember.setColor("RED")
        if (!target) return message.channel.send(undefinedMember)

        let embed = new discord.MessageEmbed()
            .setImage(data)
            .setColor("RANDOM")
            .setFooter(`${message.author.username}-მ აკოცა ${target.user.username}-ს 💋`)
            .setTimestamp()

        message.channel.send(embed);
    }
};