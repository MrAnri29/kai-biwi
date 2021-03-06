const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: "mute",
    aliases: ["mutes", "muted"],
    category: "moderation",
    description: "mute @user",
    usage: "[command] [member] <reason>",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            const noPerms = new MessageEmbed()
            noPerms.setDescription("๐ แกแแ แแแฅ แแแแแแแ แฃแคแแแแ?! HUH?!")
            noPerms.setColor("GREY")
            return message.channel.send(noPerms);
        }
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            const botNoPerms = new MessageEmbed()
            botNoPerms.setDescription("๐ แแฐ... แแ แแ  แแแฅแแกแแแแแแแ แฃแคแแแแ!")
            botNoPerms.setColor("PURPLE")
            return message.channel.send(botNoPerms);
        }

        const user = message.mentions.members.first();

        if (!user) {
            const undefinedUser = new MessageEmbed()
            undefinedUser.setDescription("๐ฅฑ แแแฎแแแ แแแแแแแ แแก แแแกแ แแแแฃแแแแแช แแแแแแ!")
            undefinedUser.setColor("RED")
            return message.channel.send(undefinedUser);
        }
        if (user.id === message.author.id) {
            const Author = new MessageEmbed()
            Author.setDescription("๐ค แฃแแ แแแแ แแแแแขแ, แแ แแฃ แแแฌแแแแแ! แแ แกแฎแแแก แแฎแแแ แแแ แแแแแแแฃแแแ!")
            Author.setColor("ORANGE")
            return message.channel.send(Author);
        }
        let reason = args.slice(1).join("");

        if (!reason) {
            const noReason = new MessageEmbed()
            noReason.setDescription("๐ค แจแแ แแแฌแ แแแกแแแแ แแ แแ แแแแ ,\n\n:prayer_beads:  แแแแแแแก แแแ แแจแ แฎแแแฎแก แ แแ แแแฃแแแ แ แแก แฌแแ แแแแแแแ แ?!\n\n:heart_on_fire:  แจแแแแแแจแ แแแแแแ แแแฌแแ แ!")
            noReason.setColor("DARK_GRAY")
            return message.channel.send(noReason);
        }

        const vrole = user.roles.cache

        let muterole = message.guild.roles.cache.find(x => x.name === "muted");

        if (!muterole) {
            const noMuteRole = new MessageEmbed()
            noMuteRole.setDescription("๐ แแแฎแแ แจแแฅแแแแ แ แแแ แแ แแแแ แแ แแแก `muted` \n\n```๐ แ แแแก แแแแชแ แแก แฃแคแแแแแแ แ แแแแแแแช แแแแแฃแแแแฃแ แแแแแแแแก แจแแแกแแแแแแแ!```\n\n`แจแแแแแ แแ แแแแแแแ แแแแแแงแแแแ แแ แซแแแแแ!`")
            return message.channel.send(noMuteRole);
        }

        await user.roles.remove(vrole);
        await user.roles.add(muterole);

        const addMute = new MessageEmbed()
        addMute.setDescription(`๐ถ แแฅแแแ แแแแแแฃแแแ:${message.mentions.users.first().username}\n\n๐ แแแแขแแ แ แแ:${reason}`)
        addMute.setColor("GREEN")
        
        await message.channel.send(addMute);

        const dmMsg = new MessageEmbed()
        dmMsg.setDescription(`๐ค แแฅแแแ แแแแแแแฃแแแก ${message.guild}-แจแ... แแแแแแแ...\n\n๐ แแแแขแแ แ แแ: ${reason}`)

        user.send(dmMsg);
    }
};