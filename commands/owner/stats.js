const { MessageEmbed } = require("discord.js");
module.exports = {
name: "ainfo",
description: "`Show detailed stats of bot`",
category: "bot owner ๐",
aliases: ["detail"],
run: async (client, message, args, level) => {
//command
  if(message.author.id != 764162607866183752){
    const noperms = new MessageEmbed()
    .setDescription("<:crossmarkbuttonemojiclipartmd:932261297230348338> แแก แแ แซแแแแแ แแแแแแงแแแแแ แแฎแแแแ แฉแแแ แแคแแแแแแแก แแแแ  **Mr.Anri#1991 ")
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

let uptime = `\`\`\`${days} แแฆแ, ${hours} แกแแแแ, ${minutes} แฌแฃแแ แแ ${seconds} แฌแแแ\`\`\``;

let embed = new MessageEmbed()

.setTitle(`**[Support Server]**`)
  .setDescription(`แแแแแ แฏแแแ! แฉแแแ แกแแฎแแแแ **${message.client.user.username}** แแ แฉแแแ แกแแแฃแจแแ แแ แแก แกแแฎแแแแกแ แ แแแแแ แแ แ.แจ.`)

  .setTitle(`${message.client.user.username} Stats`)
  .addFields(
    { name: "<:servers_119542:932269347509002270> Servers:", value: `\`\`\`${servers_count}\`\`\``, inline: true },
    { name: "<:busts_in_silhouette:932269347509002270> Users:", value: `\`\`\`${sum}\`\`\``, inline: true },
    { name: "<:television_1f4fa:932270242485370910> Channels",value: `\`\`\`${message.client.channels.cache.size}\`\`\``, inline: true },
    { name: "<:uptime:932270803381276672> Uptime: ", value: uptime , inline: true },
    { name: "๐ Ping:",value: `\`\`\`${Math.round(message.client.ws.ping)} ms\`\`\``, inline: true },
    { name: "๐  RAM: ", value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``, inline: true  },
    { name: "๐ Bot Owner:",value: `\`\`\`Mr.Anri\`\`\``},
  )
  .setColor("3498DB")
  .setFooter("แแแแแแแ แ แแ แแแ แฉแแแ Esta Mod")  

return message.channel.send(embed);
    return message.react("<:whiteheavycheckmarkemojibytwitte:932260891750191165>");
}
};

console.log("stats working")