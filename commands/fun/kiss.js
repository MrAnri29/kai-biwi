const discord = require("discord.js");
const random = require("something-random-on-discord").Random;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "kiss",
    category: "fun ๐",
    description: "แแแแชแ แแแฆแแชแแก",
    usage: "แฃแแ แแแแ แแแแแแงแแแแ แแ แซแแแแแ!",
    
    run: async (client, message, args) => {

        let target = message.mentions.members.first()

        let data = await random.getAnimeImgURL("kiss");
        
        const undefinedMember = new MessageEmbed()
        undefinedMember.setDescription("๐คจ แแแฏแ แจแแแก แแแแก แแแชแแ?!\n`แแแแแแ แแแแแ แแแกแแช แฃแแแ แแแแชแ แกแแแแ`")
        undefinedMember.setColor("RED")
        if (!target) return message.channel.send(undefinedMember)

        let embed = new discord.MessageEmbed()
            .setImage(data)
            .setColor("RANDOM")
            .setFooter(`${message.author.username}-แ แแแแชแ ${target.user.username}-แก ๐`)
            .setTimestamp()

        message.channel.send(embed);
    }
};