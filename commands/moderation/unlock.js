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
            return message.channel.send("๐ แกแแ แแแฅ แแแแแแแ แฃแคแแแแ?! HUH?!")
        }
        message.channel.overwritePermissions([{
            id: message.guild.id,
            null: ['SEND_MESSAGES'],
        }, ], );
        const embed = new Discord.MessageEmbed()
            .setTitle("๐ซ แแแแแฎแแแแ")
            .setDescription(`๐ ${message.channel} แแแแฎแกแแ`)
            .setColor("GREEN");
        await message.channel.send(embed);
        message.delete();
    }
}