const superagent = require("snekfetch");
const Discord = require('discord.js')


module.exports = {
    name: "cat",
    category: "fun 😏",
    description: "აგზავნის კატის რანდომ სურათს",
    usage: "უბრალოდ გამოიყენეთ ბრძანება!",

    run: async (client, message, args, level) => {
        //command
        superagent.get('https://nekos.life/api/v2/img/meow')
            .end((err, response) => {
                const lewdembed = new Discord.MessageEmbed()
                    .setTitle("რანდომ კატა")
                    .setImage(response.body.url)
                    .setColor(`#000000`)
                    .setFooter(`owo`)
                    .setURL(response.body.url);
                message.channel.send(lewdembed);
            })
    }
};