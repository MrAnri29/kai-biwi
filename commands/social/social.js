const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "social",
    category: "social 📸",
    description: "მიიღეთ ინფორმაცია ჩემი დეველოპერების შესახებ!",
    usage: "[command]",

    run: async (client, message, args) => {

        if(!args[0]) {

        const server = '935575021781409862';

        const instagramEmbed = new MessageEmbed()
        .setTitle('vajexsthetics')
        .setURL(`https://www.instagram.com/vajexsthetics/`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/969638600373309508/971414347228270683/600px-Instagram_icon.png`)
        .setFooter("დამიჯერე არ ინანებ!")
        .setDescription(`შეამოწმე vajex-ას ინსტაგრამი!\nhttps://www.instagram.com/vajexsthetics/`)
        .setColor('#833AB4')

        const discordEmbed = new MessageEmbed()
        .setTitle('Kai biwi')
        .setURL(`https://discord.gg/V3N8kmXhym`)
        .setThumbnail(`https://cdn.discordapp.com/icons/969638599492534292/e5e49aef8259a704e7e4528fe878b192.png?size=1024`)
        .setFooter('აქ მხოლოდ ვოლკები შემოდიან!')
        .setDescription("kai biwi-ს ოფიციალური სერვერი!\nhttps://discord.gg/V3N8kmXhym")
        .setColor('BLURPLE')

        const discordEmbedPiar = new MessageEmbed()
        .setAuthor('Aesthetics Unity', `https://cdn.discordapp.com/icons/935575021781409862/a_a27c084d0d7ab6f41ac80501eafcfb0b.gif?size=1024`)
        .setThumbnail(`https://cdn.discordapp.com/icons/935575021781409862/a_a27c084d0d7ab6f41ac80501eafcfb0b.gif?size=1024`)
        .setFooter("შემოდი ბევრ რამეში დაგეხმარებით!")
        .setDescription("სერვერი ჯანსაღი ცხოვრებისა და ფიტნესის შესახებ!\nhttps://discord.gg/aavdK7s4tq")
        .setColor('ORANGE')

        message.channel.send(instagramEmbed)
        message.channel.send(discordEmbed)
        message.channel.send(discordEmbedPiar)

    }
    }
}