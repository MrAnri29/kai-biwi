const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "social",
    category: "social ๐ธ",
    description: "แแแแฆแแ แแแคแแ แแแชแแ แฉแแแ แแแแแแแแแ แแแแก แจแแกแแฎแแ!",
    usage: "[command]",

    run: async (client, message, args) => {

        if(!args[0]) {

        const server = '935575021781409862';

        const instagramEmbed = new MessageEmbed()
        .setTitle('vajexsthetics')
        .setURL(`https://www.instagram.com/vajexsthetics/`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/969638600373309508/971414347228270683/600px-Instagram_icon.png`)
        .setFooter("แแแแแฏแแ แ แแ  แแแแแแ!")
        .setDescription(`แจแแแแแฌแแ vajex-แแก แแแกแขแแแ แแแ!\nhttps://www.instagram.com/vajexsthetics/`)
        .setColor('#833AB4')

        const discordEmbed = new MessageEmbed()
        .setTitle('Kai biwi')
        .setURL(`https://discord.gg/V3N8kmXhym`)
        .setThumbnail(`https://cdn.discordapp.com/icons/969638599492534292/e5e49aef8259a704e7e4528fe878b192.png?size=1024`)
        .setFooter('แแฅ แแฎแแแแ แแแแแแแ แจแแแแแแแ!')
        .setDescription("kai biwi-แก แแคแแชแแแแฃแ แ แกแแ แแแ แ!\nhttps://discord.gg/V3N8kmXhym")
        .setColor('BLURPLE')

        const discordEmbedPiar = new MessageEmbed()
        .setAuthor('Aesthetics Unity', `https://cdn.discordapp.com/icons/935575021781409862/a_a27c084d0d7ab6f41ac80501eafcfb0b.gif?size=1024`)
        .setThumbnail(`https://cdn.discordapp.com/icons/935575021781409862/a_a27c084d0d7ab6f41ac80501eafcfb0b.gif?size=1024`)
        .setFooter("แจแแแแแ แแแแ  แ แแแแจแ แแแแแฎแแแ แแแแ!")
        .setDescription("แกแแ แแแ แ แฏแแแกแแฆแ แชแฎแแแ แแแแกแ แแ แคแแขแแแกแแก แจแแกแแฎแแ!\nhttps://discord.gg/aavdK7s4tq")
        .setColor('ORANGE')

        message.channel.send(instagramEmbed)
        message.channel.send(discordEmbed)
        message.channel.send(discordEmbedPiar)

    }
    }
}