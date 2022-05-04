const Discord = module.require("discord.js");

module.exports = {
    name: "lock",
    description: "Locks a Channel",
    usage: "lock <channel>",
    args: true,
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
            return message.channel.send("😐 სად გაქ მაგდენი უფლება?! HUH?!")
        }
        message.channel.overwritePermissions([{
            id: message.guild.id,
            deny: ['SEND_MESSAGES'],
        }, ], );
        const embed = new Discord.MessageEmbed()
            .setTitle("💫 განახლება")
            .setDescription(`🔒 ${message.channel} დაკეტილია`)
            .setColor("RED");
        await message.channel.send(embed);
        message.delete();
    }
}