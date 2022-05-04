const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'pause', // Optional
    aliases: ['paus'], // Optional
    category: 'Music',
    description: 'შეაჩერე რიგი', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`თქვენ უნდა იყოთ vc-ში ამ ბრძანების შესასრულებლად!`)
            if (!voice_channel) return message.channel.send(embed);
            let song = client.player.pause(message);
            const pause = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription(`**${song.name}** შეჩერდა!`)
            if(song) 
            
            message.channel.send(pause);
    }
}