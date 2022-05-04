const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'loop', // Optional
    aliases: [], // Optional
    category: 'Music',
    description: 'ჩართეთ loop რეჟიმი', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription(`🙄 თქვენ უნდა იყოთ vc-ში ამ ბრძანების შესასრულებლად!`)
            if (!voice_channel) return message.channel.send(embed);
            // Enable repeat mode
            let status = client.player.setQueueRepeatMode(message, true);
            const loop = new MessageEmbed()
            .setColor('GREEN')
            .setDescription(`🔄 loop რეჟიმი ჩართულია!`)
            if(status === null)
            return;
            message.channel.send(loop);
    }
}