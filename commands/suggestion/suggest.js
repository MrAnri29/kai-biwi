const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
 
module.exports = {
  name: "suggest",
  category:"suggestion 🎈",
  
  run: async (client, message, args) => {
   
  let channel = await db.fetch(`suggestion_${message.guild.id}`);
    if (channel === null) return;
  
  const suggestionQuery = args.join(" ");
  if(!suggestionQuery) return message.reply("გთხოვთ შემოგვთავაზეთ რამე.");
    
  const embed = new MessageEmbed()
         
       .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
       .setDescription(`${suggestionQuery}`)
       .setColor("00FFFF")
       .setFooter("Status: Pending")
       .setTimestamp();
       
    const done = new MessageEmbed()
       .setDescription(`<:whiteheavycheckmarkemojibytwitte:932260891750191165>   | თქვენი შემოთავაზება აქ არის წარმოდგენილი, <#${channel}>\n\nNote: თქვენ დათანხმდით, რომ მიიღოთ DM პასუხი თქვენს შემოთავაზებაზე!`)
       .setColor("00FFFF")
       
    message.channel.send(done)
    
    let msgEmbed = await message.guild.channels.cache.get(channel).send(embed)
    
    await msgEmbed.react('<:8074upvote:932262868173336688>')
    await msgEmbed.react('<:3155downvote:932262868819267614>')
  }
}