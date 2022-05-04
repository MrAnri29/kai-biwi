const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'leave', // Optional
    aliases: [], // Optional
    category: 'Music',
    description: 'ბოტი ტოვებს ხმოვან არხს!', 
        
        run: async (client, message, args) => {
            const voiceChannel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription(`🙄 თქვენ უნდა იყოთ vc-ში ამ ბრძანების შესასრულებლად!`)
            if(!voiceChannel) return message.channel.send(embed)
            voiceChannel.leave()
            message.react('🪐')
              
          }
}