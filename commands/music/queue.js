
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'queue', // Optional
    aliases: ['q'], // Optional
    category: 'Music',
    description: 'გაწვდით ინფორმაციას სერვერის რიგის შესახებ', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription(`თქვენ უნდა იყოთ vc-ში ამ ბრძანების შესასრულებლად!`)
            if (!voice_channel) return message.channel.send(embed);
            const Embed = new MessageEmbed()
            .setColor('GOLD')
            let queue = client.player.getQueue(message);
            if(queue){
                Embed.setDescription(`რიგი:\n`+(queue.songs.map((song, i) => {
                    return `${i === 0 ? '#0(ანუ ეხლა რაც უკრავს)' : `#${i}`} - ${song.name} | ${song.author}`
                }).join('\n')))
            message.channel.send(Embed)
            };
    }
}