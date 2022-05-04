const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'playlist',
    aliases: ['plist'], // Optional
    category: 'Music',
    description: 'დაუკარით playlist vc-ში', 
    run: async (client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`თქვენ უნდა იყოთ vc-ში ამ ბრძანების შესასრულებლად!`)
        if (!voice_channel) return message.channel.send(embed);
        // If maxSongs is -1, will be infinite.
        await client.player.playlist(message, {
            search: args.join(' '),
            maxSongs: -1
        });
    }
}