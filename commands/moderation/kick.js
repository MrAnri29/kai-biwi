const { MessageEmbed } = require("discord.js")
const moment = require('moment')

module.exports = {
    name: "kick",
    category: "moderation",
    description: "გააგდე წევრი",
    cooldown: 5,
    userPerms: ["KICK_MEMBERS"],
    clientPerms: ["KICK_MEMBERS"],
    run: async (client, message, args) => {
        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const reason = args.slice(1).join(" ")
        const undefinedMember = new MessageEmbed()
        undefinedMember.setDescription("🙄 უბრალოდ ამიხსენი როგორ გავიგო თუ ვინ უნდა გავაგდო იმ შემთხვევაში თუ არ მეტყვი?!")
        undefinedMember.setColor("RED")
        if (!args[0]) return message.channel.send(undefinedMember)
        const ghostMember = new MessageEmbed()
        ghostMember.setDescription("😥 ეგეთ ადამიანს მე ვერ ვნახულობ")
        ghostMember.setColor("YELLOW")
        if (!mentionedMember) return message.channel.send(ghostMember)
        const suicide = new MessageEmbed()
        suicide.setDescription("💀 ეჰ... შენ თავს ვერ გააგდებ")
        suicide.setColor("PURPLE")
        if (mentionedMember.id === message.author.id) return message.channel.send(suicide)
        if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) {
            const lowPermissions = new MessageEmbed()
            lowPermissions.setDescription("😂 შენ მაგ ადამიანს როგორ გააგდებ თუ მასზე ნაკლები უფლებები გაქვს?!")
            lowPermissions.setColor("BLUE")
            return message.channel.send(lowPermissions)
        }
        if (mentionedMember.kickable) {
            const embed = new MessageEmbed()
                .setAuthor(`${message.author.username} - (${message.author.id})`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setThumbnail(mentionedMember.user.displayAvatarURL({
                    dynamic: true
                }))
                .setColor(`RANDOM`)
                .setDescription(`
\`მემბერი:\` ${mentionedMember.user.username} - (${mentionedMember.user.id})
\`მიზეზი:\` ${reason || "მიზეზი არ არის მითითებული"}
            `)
            message.channel.send(embed)
            mentionedMember.kick()
        } else {
            const botLowPermissions = new MessageEmbed()
            botLowPermissions.setDescription("🙁 მე არ შემიძლია რომ ის გავკიკო რადგან მისი როლი ჩემს რომზე ზემოთ იმყოფება რაც იმას ნიშნავს რომ ჩემზე მეტი ძალაუფლება აქვს!")
            botLowPermissions.setColor("WHITE")
            return message.channel.send(botLowPermissions)
        }
        return undefined
    }
}