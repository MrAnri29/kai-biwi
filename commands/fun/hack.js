const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const db = require("quick.db")

module.exports = {
    name: 'hack',
    category: 'fun 😏',
    description: "დაჰაკეთ ვიღაცა",
    usage: "უბრალოდ გამოიყენეთ ბრძანება!",

    run: async (client, message, args) => {




        const user = await message.mentions.users.first()
        if (!user) return message.channel.send("🙄 Chill ვის ხაკავ?! საიდან უნდა გავიგო bruh")


        message.channel.send(`😎 ვხაკავთ @${user.username}-ს`)
            .then((msg) => {
                setTimeout(function () {
                    msg.edit(`[▝]ვეძებთ IP address`);
                }, 1500)
                setTimeout(function () {
                    msg.edit(`[▗] **IP ADDRESS** : 127.0.0.1:2643`);
                }, 3000)
                setTimeout(function () {
                    msg.edit(`[▖] ვუგზავნით ინფორმაციას ანონიმუსებს...`);
                }, 4500)
                setTimeout(function () {
                    msg.edit(`[▘] 😈 ვარეპორტებთ დისქორდთან Tos-ის დარღვევის გამო ჰეჰეჰე...`);
                }, 6000)
                setTimeout(function () {
                    msg.edit(`[▝] ვეძებთ Email-ს...`);
                }, 7500)
                setTimeout(function () {
                    msg.edit(`[▗] **Email Address** : ${user.username}@gmail.com`);
                }, 9000)
                setTimeout(function () {
                    msg.edit(`[▖] ვუხაკავთ`+ "Epic Games Account-ს...`"||"riot Games Account-ს...`");
                }, 20500)
                setTimeout(function () {
                    msg.edit(`[▘] ვასრულებთ დახაკვას...`);
                }, 12000)
                setTimeout(function () {
                    msg.edit(`დავასრულე @${user.username}ის დახაკვა!`);
                }, 13500)
                setTimeout(function () {
                    message.channel.send('😈 ვიღაცას მაგარი დაერხა რადგან დახაკვა სრულყოფილად შესრულდა')
                }, 15000)
            });

    }

}