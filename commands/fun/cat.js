const superagent = require("snekfetch");
const Discord = require('discord.js')


module.exports = {
    name: "cat",
    category: "fun ๐",
    description: "แแแแแแแแก แแแขแแก แ แแแแแ แกแฃแ แแแก",
    usage: "แฃแแ แแแแ แแแแแแงแแแแ แแ แซแแแแแ!",

    run: async (client, message, args, level) => {
        //command
        superagent.get('https://nekos.life/api/v2/img/meow')
            .end((err, response) => {
                const lewdembed = new Discord.MessageEmbed()
                    .setTitle("แ แแแแแ แแแขแ")
                    .setImage(response.body.url)
                    .setColor(`#000000`)
                    .setFooter(`owo`)
                    .setURL(response.body.url);
                message.channel.send(lewdembed);
            })
    }
};