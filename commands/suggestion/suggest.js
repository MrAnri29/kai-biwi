const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
 
module.exports = {
  name: "suggest",
  category:"suggestion ๐",
  
  run: async (client, message, args) => {
   
  let channel = await db.fetch(`suggestion_${message.guild.id}`);
    if (channel === null) return;
  
  const suggestionQuery = args.join(" ");
  if(!suggestionQuery) return message.reply("แแแฎแแแ แจแแแแแแแแแแแแ แ แแแ.");
    
  const embed = new MessageEmbed()
         
       .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
       .setDescription(`${suggestionQuery}`)
       .setColor("00FFFF")
       .setFooter("Status: Pending")
       .setTimestamp();
       
    const done = new MessageEmbed()
       .setDescription(`<:whiteheavycheckmarkemojibytwitte:932260891750191165>   | แแฅแแแแ แจแแแแแแแแแแแ แแฅ แแ แแก แฌแแ แแแแแแแแแ, <#${channel}>\n\nNote: แแฅแแแ แแแแแแฎแแแแ, แ แแ แแแแฆแแ DM แแแกแฃแฎแ แแฅแแแแก แจแแแแแแแแแแแแแ!`)
       .setColor("00FFFF")
       
    message.channel.send(done)
    
    let msgEmbed = await message.guild.channels.cache.get(channel).send(embed)
    
    await msgEmbed.react('<:8074upvote:932262868173336688>')
    await msgEmbed.react('<:3155downvote:932262868819267614>')
  }
}