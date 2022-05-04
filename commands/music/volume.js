const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'volume', // Optional
    category: 'Music',
    description: 'დააყენეთ ბოტის მოცულობა vc-ში', 
    aliases: ['setvolume'], // Optional
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`თქვენ უნდა იყოთ vc-ში ამ ბრძანების შესასრულებლად!`)
            if (!voice_channel) return message.channel.send(embed);
            let isDone = client.player.setVolume(message, parseInt(args[0]));
            const volume = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription(`მოცულობა დაყენებულია ${args[0]}%!`)
            if(isDone)
            message.channel.send(volume);
    }
}