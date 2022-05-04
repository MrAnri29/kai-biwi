const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'clear', // Optional
    aliases: ['clearqueue', 'clear-queue'], // Optional
    category: 'Music',
    description: 'ასუფთავებს რიგს', 
    run: async (client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`🙄 თქვენ უნდა იყოთ vc-ში ამ ბრძანების შესასრულებლად!`)
        const embed1 = new MessageEmbed()
        .setColor('GREEN')
        .setDescription('😁 რიგი გაიწმინდა!')
        if (!voice_channel) return message.channel.send(embed);
        let isDone = client.player.clearQueue(message);
        if(isDone)
            message.channel.send(embed1);
    }
}