const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "uptime",
  category: "info ๐ค",
  description: "แแแฉแแแแแแ แ แแแแแแ แฎแแแ แแ แแกแแแขแแฉแแ แแฃแแ",
  usage: "uptime",
  aliases: ["online"],

  run: async (client, message) => {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    
    return message.channel.send(`__แฉแแ แแฃแแ แแแ :__\n${days}แแฆแ ${hours}แกแแแแ ${minutes}แฌแฃแแ แแ ${seconds}แฌแแแ`);
  }
  
}