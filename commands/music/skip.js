const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'skip', // Optional
    aliases: ['sk'], // Optional
    category: 'Music',
    description: 'დასკიპეთ მუსიკა რომელიც ეხლა უკრავს.', 
        run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`თქვენ უნდა იყოთ vc-ში ამ ბრძანების შესასრულებლად!`)
            if(!client.player.isPlaying(message)) {
			message.channel.send('რაღაცა უნდა უკრავდეს რომ დავსკიპო');

			return;
		}

		await client.player.skip(message);

		message.channel.send('დავსკიპე!');
	},
};