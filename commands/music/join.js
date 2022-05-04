const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'join', // Optional
    aliases: [], // Optional
    category: 'Music',
    description: 'ბოტი ჯდება იმ ვოის არხში რომელშიც ხართ!', 
        run: async (client, message, args) => {
            const voiceChannel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription(`🙄 თქვენ უნდა იყოთ vc-ში ამ ბრძანების შესასრულებლად!`)
            if(!voiceChannel) return message.channel.send(embed)
            voiceChannel.join()
            message.react('🪐')
            
        }
}