const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'nowplaying', // Optional
    aliases: ['np'], // Optional
    category: 'Music',
    description: 'აწვდის ინფორმაციას მიმდინარე სიმღერისა და მისი პროგრესის შესახებ', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`თქვენ უნდა იყოთ vc-ში ამ ბრძანების შესასრულებლად!`)
            if (!voice_channel) return message.channel.send(embed);
            let progressBar = client.player.createProgressBar(message, {
                size: 20,
                block: '▬',
                arrow: '🔘'
            

                
            });
            let song = await client.player.nowPlaying(message)
            const bar = new MessageEmbed()
            .setColor('GOLD')
            .setTitle(`${song.name}`)
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription(`⋆ მოთხოვნილია ${message.author}-ის მიერ
            \`${progressBar}\``)

            if(progressBar)

            

                
                message.channel.send(bar);
    }
}