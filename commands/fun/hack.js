const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const db = require("quick.db")

module.exports = {
    name: 'hack',
    category: 'fun ๐',
    description: "แแแฐแแแแ แแแฆแแชแ",
    usage: "แฃแแ แแแแ แแแแแแงแแแแ แแ แซแแแแแ!",

    run: async (client, message, args) => {




        const user = await message.mentions.users.first()
        if (!user) return message.channel.send("๐ Chill แแแก แฎแแแแ?! แกแแแแแ แฃแแแ แแแแแแ bruh")


        message.channel.send(`๐ แแฎแแแแแ @${user.username}-แก`)
            .then((msg) => {
                setTimeout(function () {
                    msg.edit(`[โ]แแแซแแแ IP address`);
                }, 1500)
                setTimeout(function () {
                    msg.edit(`[โ] **IP ADDRESS** : 127.0.0.1:2643`);
                }, 3000)
                setTimeout(function () {
                    msg.edit(`[โ] แแฃแแแแแแแ แแแคแแ แแแชแแแก แแแแแแแฃแกแแแก...`);
                }, 4500)
                setTimeout(function () {
                    msg.edit(`[โ] ๐ แแแ แแแแ แขแแแ แแแกแฅแแ แแแแ Tos-แแก แแแ แฆแแแแแก แแแแ แฐแแฐแแฐแ...`);
                }, 6000)
                setTimeout(function () {
                    msg.edit(`[โ] แแแซแแแ Email-แก...`);
                }, 7500)
                setTimeout(function () {
                    msg.edit(`[โ] **Email Address** : ${user.username}@gmail.com`);
                }, 9000)
                setTimeout(function () {
                    msg.edit(`[โ] แแฃแฎแแแแแ`+ "Epic Games Account-แก...`"||"riot Games Account-แก...`");
                }, 20500)
                setTimeout(function () {
                    msg.edit(`[โ] แแแกแ แฃแแแแ แแแฎแแแแแก...`);
                }, 12000)
                setTimeout(function () {
                    msg.edit(`แแแแแกแ แฃแแ @${user.username}แแก แแแฎแแแแ!`);
                }, 13500)
                setTimeout(function () {
                    message.channel.send('๐ แแแฆแแชแแก แแแแแ แ แแแแ แฎแ แ แแแแแ แแแฎแแแแ แกแ แฃแแงแแคแแแแ แจแแกแ แฃแแแ')
                }, 15000)
            });

    }

}