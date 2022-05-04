const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "unmute",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            const noPerms = new MessageEmbed()
            noPerms.setDescription("🐺 შენ ბიწო ვოლკებს ხსნი მუთეს?\n\n:prayer_beads: ვოლკებს შენი დახმარება არ სჭირდებათ!")
            noPerms.setColor("DARK_BUT_NOT_BLACK")
            return message.channel.send(noPerms);
        }

        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            const botNoPerms = new MessageEmbed()
            botNoPerms.setDescription("🥺 მე რომ ავხსნა მას მუთე გამსროკავენ!\n\n😅 არმაქვს მაგდენი უფლება დ")
            botNoPerms.setColor("NOT_QUITE_BLACK")
            return message.channel.send(botNoPerms);
        }

        const user = message.mentions.members.first();

        if (!user) {
            const noUser = new MessageEmbed()
            noUser.setDescription("🥱 როგორ უნდა მივხვდე თუ ვის უნდა ავხსნა მიუთ თუ არ მეტყვი?!")
            noUser.setColor("FUSCHIA")
            return message.channel.send(noUser);
        }

        let muterole = message.guild.roles.cache.find(x => x.name === "Muted");

        if(user.roles.cache.has(muterole)){
            user.roles.remove(muterole)

            const Unmuted = new MessageEmbed()
            Unmuted.setDescription(`🥳 **${message.mentions.users.first().username}**-ს აეხსნა მიუთი!`)
            Unmuted.setColor("PURPLE")
    
            await message.channel.send(Unmuted);
    
            const UnmutedDmMsg = new MessageEmbed()
            UnmutedDmMsg.setDescription(`😇 შენ ისევ შეგიძლია ლაპარაკი **${message.guild.name}**-ში!`)
            UnmutedDmMsg.setColor("DARK_PURPLE")
    
            user.send(UnmutedDmMsg);
    
            message.delete()
        }

        if (!user.roles.cache.has(muterole)) {
            const dumbMod = new MessageEmbed()
            dumbMod.setDescription(":prayer_beads: შენ ბიწო თვალებში ხომ არ გეპატარავები?!\n\n😡 რას მატყუებ, ის არ არის დამიუთებული!")
            dumbMod.setColor("BLURPLE")
            return message.channel.send(dumbMod);
        }
    }
};