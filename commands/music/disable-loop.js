const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'disable-loop', // Optional
    aliases: [], // Optional
    category: 'Music',
    description: 'შეწყვიტე რიგის დაკვრა თუ ის გაქვს loop რეჟიმში', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`🙄 თქვენ უნდა იყოთ vc-ში ამ ბრძანების შესასრულებლად!`)
            if (!voice_channel) return message.channel.send(embed);
            // Disable repeat mode
            let status = client.player.setQueueRepeatMode(message, false);

            const disloop = new MessageEmbed()
            .setColor('GREEN')
            .setDescription(`🔄 loop რეჯიმი გამორთულია!`)
            if(status === null)
            return;
            message.channel.send(disloop);
    }
}