const discord = require("discord.js");

module.exports = {
  name: "ukraine",
  usage: "cmd",
  category: "fun ๐",
  description: "แแแฃแญแแ แแ แแฎแแ แ แฃแแ แแแแแก \<3",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/911670999467053098/955902958124564540/ukraine-ukrainian-flag_1.gif`)
    .setDescription(`แฉแแแ แแแ แ แฃแแ แแแแแกแแแ`)
    .setTimestamp()
    .setTitle(`\<3`)
    .setColor(`YELLOW`)
    
    message.channel.send(embed)
  }
}