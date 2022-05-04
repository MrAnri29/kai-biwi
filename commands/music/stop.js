const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stop', // Optional
    category: 'Music',
    description: 'ასუფთავებს რიგს და ტოვებს vc', 
    aliases: ['st'], // Optional
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`თქვენ უნდა იყოთ vc-ში ამ ბრძანების შესასრულებლად!`)
            if (!voice_channel) return message.channel.send(embed);
            let isDone = client.player.stop(message);
            const stop = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription('მუსიკა შეწყდა და რიგი გაიწმინდა!')
            if(isDone)
            message.channel.send(stop);
    }
}