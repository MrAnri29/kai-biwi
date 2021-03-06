const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "unmute",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            const noPerms = new MessageEmbed()
            noPerms.setDescription("๐บ แจแแ แแแฌแ แแแแแแแก แฎแกแแ แแฃแแแก?\n\n:prayer_beads: แแแแแแแก แจแแแ แแแฎแแแ แแแ แแ  แกแญแแ แแแแแ!")
            noPerms.setColor("DARK_BUT_NOT_BLACK")
            return message.channel.send(noPerms);
        }

        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            const botNoPerms = new MessageEmbed()
            botNoPerms.setDescription("๐ฅบ แแ แ แแ แแแฎแกแแ แแแก แแฃแแ แแแแกแ แแแแแแ!\n\n๐ แแ แแแฅแแก แแแแแแแ แฃแคแแแแ แ")
            botNoPerms.setColor("NOT_QUITE_BLACK")
            return message.channel.send(botNoPerms);
        }

        const user = message.mentions.members.first();

        if (!user) {
            const noUser = new MessageEmbed()
            noUser.setDescription("๐ฅฑ แ แแแแ  แฃแแแ แแแแฎแแแ แแฃ แแแก แฃแแแ แแแฎแกแแ แแแฃแ แแฃ แแ  แแแขแงแแ?!")
            noUser.setColor("FUSCHIA")
            return message.channel.send(noUser);
        }

        let muterole = message.guild.roles.cache.find(x => x.name === "Muted");

        if(user.roles.cache.has(muterole)){
            user.roles.remove(muterole)

            const Unmuted = new MessageEmbed()
            Unmuted.setDescription(`๐ฅณ **${message.mentions.users.first().username}**-แก แแแฎแกแแ แแแฃแแ!`)
            Unmuted.setColor("PURPLE")
    
            await message.channel.send(Unmuted);
    
            const UnmutedDmMsg = new MessageEmbed()
            UnmutedDmMsg.setDescription(`๐ แจแแ แแกแแ แจแแแแซแแแ แแแแแ แแแ **${message.guild.name}**-แจแ!`)
            UnmutedDmMsg.setColor("DARK_PURPLE")
    
            user.send(UnmutedDmMsg);
    
            message.delete()
        }

        if (!user.roles.cache.has(muterole)) {
            const dumbMod = new MessageEmbed()
            dumbMod.setDescription(":prayer_beads: แจแแ แแแฌแ แแแแแแแจแ แฎแแ แแ  แแแแแขแแ แแแแแ?!\n\n๐ก แ แแก แแแขแงแฃแแ, แแก แแ  แแ แแก แแแแแฃแแแแฃแแ!")
            dumbMod.setColor("BLURPLE")
            return message.channel.send(dumbMod);
        }
    }
};