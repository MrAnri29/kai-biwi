const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info 🤓",
  description: "მომიწვიე \<3",
  usage: "cmd",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`აქედან შეგიძლიათ რომ მომიწვიოთ`)
    .setDescription(`🔗 დააწექი [აქ](https://discord.com/api/oauth2/authorize?client_id=955160251320119296&permissions=8&scope=bot) ან [support server ](https://discord.gg/JeZdtjPUuK)`)
    .setColor("RANDOM")
    .setFooter(`made by Mr.Anri#0001`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}