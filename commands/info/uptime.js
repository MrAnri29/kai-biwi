const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "uptime",
  category: "info 🤓",
  description: "გიჩვენებთ რამდენი ხანი არისბოტიჩართული",
  usage: "uptime",
  aliases: ["online"],

  run: async (client, message) => {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    
    return message.channel.send(`__ჩართული ვარ:__\n${days}დღე ${hours}საათი ${minutes}წუთი და ${seconds}წამი`);
  }
  
}