const { MessageEmbed } = require("discord.js");
const ytsr = require('ytsr');
module.exports = {
    name: 'play',
    aliases: ['p'], // Optional
    category: 'Music',
    description: 'დაუკარით სიმღერა VC-ში', 
    run: async (client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription(`🙄 ბიჯო vc-ში თუ არ ხარ მუსიკას როგორ მოუსმენ huh?!`)
        if (!voice_channel) return message.channel.send(embed);

        if(client.player.isPlaying(message)) {
            let song = await client.player.addToQueue(message, args.join(' '));

            const added = new MessageEmbed()
            .setColor('GREEN')
            .setDescription(`🥱 **${song.name}** დამატებულია რიგში`)


            // თუ ერრორი არაა Player#songAdd event გამოირიცხება და მუსიკა არ იქნება null
            if(song)
                message.channel.send(added);
            return;
        } else {
            let song = await client.player.play(message, args.join(' '));

            const started = new MessageEmbed()
            .setColor('GREEN')
            .setDescription(`😅 ეხლა მე შენ გიმღერებ **${song.name}**`)

            // თუ ერრორი არაა Player#songAdd event გამოირიცხება და მუსიკა არ იქნება null
            if(song)
                message.channel.send(started);
            return;
        }
    }
}