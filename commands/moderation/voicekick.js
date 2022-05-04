module.exports = {
    name: "voicekick",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
            return message.channel.send(
                "🥺 მე არ მაქვს ამ ბრძანების გამოყენების შესაბამისი ნებართვა!"
            );

        if (!message.mentions.members.first())
            return message.channel.send(
                `🥺 გთხოვთ, აღნიშნეთ მომხმარებელი, რომლის გაგდებაც გსურთ ხმოვანი არხიდან!`
            );

        let {
            channel
        } = message.mentions.members.first().voice;

        if (!channel)
            return message.channel.send(`🙄 მომხმარებელი არ არის არცერთ ხმოვან არხში!`);

        message.mentions.members.first().voice.kick();

        message.channel.send(`😎 მომხმარებელი გააძევეს ხმოვანი არხიდან!`)
    }
};