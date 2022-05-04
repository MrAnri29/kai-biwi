const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "setsuggest",
    category: "suggestion 🎈",
    usage: "setsuggest <#channel>",
    authorPermission: ["MANAGE_GUILD"],
    run: async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_GUILD")) {
            return message.channel.send(`თქვენ არ გაქვთ ამ ბრძანების გამოყენების უფლება! Manage server`)
        }
        let Channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        if (!Channel) return message.channel.send(`გთხოვთ მონიშნეთ არხი!`);

        if (Channel.type === "voice") return message.channel.send(`გთხოვთ, მონიშნეთ ტექსტური არხი!`);

        await db.set(`suggestion_${message.guild.id}`, Channel.id);

        let Embed = new MessageEmbed()
        .setColor("00FFFF")
        .setDescription(`შეთავაზების არხი დაყენებულია როგორც_ <#${Channel.id}>`)

        return message.channel.send(Embed);

    }
};