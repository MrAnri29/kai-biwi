module.exports = {
    name: "voicekick",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
            return message.channel.send(
                "๐ฅบ แแ แแ  แแแฅแแก แแ แแ แซแแแแแแก แแแแแงแแแแแแก แจแแกแแแแแแกแ แแแแแ แแแ!"
            );

        if (!message.mentions.members.first())
            return message.channel.send(
                `๐ฅบ แแแฎแแแ, แแฆแแแจแแแ แแแแฎแแแ แแแแแ, แ แแแแแก แแแแแแแแช แแกแฃแ แ แฎแแแแแแ แแ แฎแแแแ!`
            );

        let {
            channel
        } = message.mentions.members.first().voice;

        if (!channel)
            return message.channel.send(`๐ แแแแฎแแแ แแแแแ แแ  แแ แแก แแ แชแแ แ แฎแแแแแ แแ แฎแจแ!`);

        message.mentions.members.first().voice.kick();

        message.channel.send(`๐ แแแแฎแแแ แแแแแ แแแแซแแแแก แฎแแแแแแ แแ แฎแแแแ!`)
    }
};