const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "setsuggest",
    category: "suggestion ๐",
    usage: "setsuggest <#channel>",
    authorPermission: ["MANAGE_GUILD"],
    run: async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_GUILD")) {
            return message.channel.send(`แแฅแแแ แแ  แแแฅแแ แแ แแ แซแแแแแแก แแแแแงแแแแแแก แฃแคแแแแ! Manage server`)
        }
        let Channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        if (!Channel) return message.channel.send(`แแแฎแแแ แแแแแจแแแ แแ แฎแ!`);

        if (Channel.type === "voice") return message.channel.send(`แแแฎแแแ, แแแแแจแแแ แขแแฅแกแขแฃแ แ แแ แฎแ!`);

        await db.set(`suggestion_${message.guild.id}`, Channel.id);

        let Embed = new MessageEmbed()
        .setColor("00FFFF")
        .setDescription(`แจแแแแแแแแแแก แแ แฎแ แแแงแแแแแฃแแแ แ แแแแ แช_ <#${Channel.id}>`)

        return message.channel.send(Embed);

    }
};