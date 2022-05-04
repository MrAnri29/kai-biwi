const Discord = module.require("discord.js");

module.exports = {
    name: "unlock",
    description: "Unlocks a Channel",
    usage: "unlock <channel>",
    args: true,
    category: "moderation",
    permissions: "MANAGE_CHANNELS",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
            return message.channel.send("😐 სად გაქ მაგდენი უფლება?! HUH?!")
        }
        message.channel.overwritePermissions([{
            id: message.guild.id,
            null: ['SEND_MESSAGES'],
        }, ], );
        const embed = new Discord.MessageEmbed()
            .setTitle("💫 განახლება")
            .setDescription(`🔓 ${message.channel} გაიხსნა`)
            .setColor("GREEN");
        await message.channel.send(embed);
        message.delete();
    }
}