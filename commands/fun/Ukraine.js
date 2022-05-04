const discord = require("discord.js");

module.exports = {
  name: "ukraine",
  usage: "cmd",
  category: "fun 😏",
  description: "დაუჭირეთ მხარი უკრაინას \<3",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/911670999467053098/955902958124564540/ukraine-ukrainian-flag_1.gif`)
    .setDescription(`ჩვენ ვართ უკრაინისკენ`)
    .setTimestamp()
    .setTitle(`\<3`)
    .setColor(`YELLOW`)
    
    message.channel.send(embed)
  }
}