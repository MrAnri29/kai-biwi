const discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "info 🤓",
  description: "პინგი xD",
  usage: "cmd",
  run: async (client, message, args) => {
    
    let ping = new discord.MessageEmbed()
    .setDescription(`Pong - ${client.ws.ping}ms`)
    .setColor("RANDOM")
    .setTimestamp()
    
    message.channel.send(ping)
  }
}