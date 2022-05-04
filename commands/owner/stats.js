const { MessageEmbed } = require("discord.js");
module.exports = {
name: "ainfo",
description: "`Show detailed stats of bot`",
category: "bot owner 👑",
aliases: ["detail"],
run: async (client, message, args, level) => {
//command
  if(message.author.id != 764162607866183752){
    const noperms = new MessageEmbed()
    .setDescription("<:crossmarkbuttonemojiclipartmd:932261297230348338> ეს ბრძანება გამოიყენება მხოლოდ ჩემი მფლობელის მიერ **Mr.Anri#1991 ")
    .setColor("YELLOW");
    return message.channel.send(noperms)
  } 

let servers_count = message.client.guilds.cache.size;
var myarray = [];
message.client.guilds.cache.keyArray().forEach(async function(item, index) {

let guildMember = message.client.guilds.cache.get(item).memberCount;
myarray.push(guildMember)
})
let sum = myarray.reduce(function (a, b) {
return a + b
});

let totalSeconds = message.client.uptime / 1000;
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

let uptime = `\`\`\`${days} დღე, ${hours} საათი, ${minutes} წუთი და ${seconds} წამი\`\`\``;

let embed = new MessageEmbed()

.setTitle(`**[Support Server]**`)
  .setDescription(`გამარჯობა! ჩემი სახელია **${message.client.user.username}** და ჩემი სამუშაო არის სახალისო რეჟიმი და ა.შ.`)

  .setTitle(`${message.client.user.username} Stats`)
  .addFields(
    { name: "<:servers_119542:932269347509002270> Servers:", value: `\`\`\`${servers_count}\`\`\``, inline: true },
    { name: "<:busts_in_silhouette:932269347509002270> Users:", value: `\`\`\`${sum}\`\`\``, inline: true },
    { name: "<:television_1f4fa:932270242485370910> Channels",value: `\`\`\`${message.client.channels.cache.size}\`\`\``, inline: true },
    { name: "<:uptime:932270803381276672> Uptime: ", value: uptime , inline: true },
    { name: "🏓 Ping:",value: `\`\`\`${Math.round(message.client.ws.ping)} ms\`\`\``, inline: true },
    { name: "🐏  RAM: ", value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``, inline: true  },
    { name: "👑 Bot Owner:",value: `\`\`\`Mr.Anri\`\`\``},
  )
  .setColor("3498DB")
  .setFooter("მადლობთ რომ აირჩიეთ Esta Mod")  

return message.channel.send(embed);
    return message.react("<:whiteheavycheckmarkemojibytwitte:932260891750191165>");
}
};

console.log("stats working")