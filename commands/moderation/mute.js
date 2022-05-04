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
            noPerms.setDescription("😐 სად გაქ მაგდენი უფლება?! HUH?!")
            noPerms.setColor("GREY")
            return message.channel.send(noPerms);
        }
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            const botNoPerms = new MessageEmbed()
            botNoPerms.setDescription("💀 ეჰ... მე არ მაქვსმაგდენი უფლება!")
            botNoPerms.setColor("PURPLE")
            return message.channel.send(botNoPerms);
        }

        const user = message.mentions.members.first();

        if (!user) {
            const undefinedUser = new MessageEmbed()
            undefinedUser.setDescription("🥱 გთხოვთ მოთაგოთ ის ვისი დადუმებაც გინდათ!")
            undefinedUser.setColor("RED")
            return message.channel.send(undefinedUser);
        }
        if (user.id === message.author.id) {
            const Author = new MessageEmbed()
            Author.setDescription("🤐 უბრალოდ მოკეტე, მე ნუ მაწვალებ! ან სხვას თხოვე მათ დაგამიუთონ!")
            Author.setColor("ORANGE")
            return message.channel.send(Author);
        }
        let reason = args.slice(1).join("");

        if (!reason) {
            const noReason = new MessageEmbed()
            noReason.setDescription("🤔 შენ ბიწო მისმინე ერთი აგერ,\n\n:prayer_beads:  მიზეზის გარეშე ხალხს რომ ადუმებ რას წარმოადგენ ა?!\n\n:heart_on_fire:  შემდეგში მიზეზი დაწერე!")
            noReason.setColor("DARK_GRAY")
            return message.channel.send(noReason);
        }

        const vrole = user.roles.cache

        let muterole = message.guild.roles.cache.find(x => x.name === "muted");

        if (!muterole) {
            const noMuteRole = new MessageEmbed()
            noMuteRole.setDescription("😗 გთხოვ შექმენი როლი და დაარვი მას `muted` \n\n```😍 როლს მიეცი ის უფლებები რომლებიც დამიუთებულ ადამიანს შეესაბამება!```\n\n`შემდეგ კი თავიდან გამოიყენეთ ბრძანება!`")
            return message.channel.send(noMuteRole);
        }

        await user.roles.remove(vrole);
        await user.roles.add(muterole);

        const addMute = new MessageEmbed()
        addMute.setDescription(`😶 თქვენ დაამიუთეთ:${message.mentions.users.first().username}\n\n🙄 იმიტომ რომ:${reason}`)
        addMute.setColor("GREEN")
        
        await message.channel.send(addMute);

        const dmMsg = new MessageEmbed()
        dmMsg.setDescription(`🤐 თქვენ დაგამიუთეს ${message.guild}-ში... ნაგლები...\n\n🙄 იმიტომ რომ: ${reason}`)

        user.send(dmMsg);
    }
};