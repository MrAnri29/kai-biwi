const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "suggestionreply",
  category: "suggestion ๐",
  aliases: ['sreply'],
  run: async (client, message, args) => {
    
let channel = await db.fetch(`suggestion_${message.guild.id}`);
if (channel === null) return;
     
      if(!message.member.hasPermission('MANAGE_GUILD')) return;
      
    const rgx = /^(?:<@!?)?(\d+)>?$/;

    const messageID = args[0];
    const replyQuery = args.slice(1).join(' ');
      
    const number = new MessageEmbed()
      .setDescription(`๐ | แแ แ แแแแแแ, แแก แแงแ แจแแขแงแแแแแแแแก ID!`)
      .setColor("FF2052")
      
    const id = new MessageEmbed()
      .setDescription(`<:crossmarkbuttonemojiclipartmd:932261297230348338>   | ID-แก แแฃ แแ  แแแแแฌแแ  แแ แแแ  แแแแฎแแแแแ แ แแก แแแแแ แแแชแ แแแกแฃแฎแ!`)
      .setColor("FF2052")
      
    const query = new MessageEmbed()
      .setDescription(`๐ | bruh แแแกแฃแฎแ แฎแแ แฃแแแ แแแฃแแแแ?!`)
      .setColor("FF2052")
      
    const reply = new MessageEmbed()
      .setDescription(`<:whiteheavycheckmarkemojibytwitte:932260891750191165>  | แแฅแแแ แฃแแแกแฃแฎแแ แจแแแแแแแแแแแแก`)
      .setColor("00FFFF")
      
    const noChannel = new MessageEmbed()
      .setDescription(`<:crossmarkbuttonemojiclipartmd:932261297230348338>   | แแแแแ แแ แฎแ แแ แแ  แแแแแฎแแ xD`)
      .setColor("FF2052")
      
    const noMessage = new MessageEmbed()
      .setDescription(`๐ | แแแแแ ID-แแ แแแ แแคแแ แ แแแ  แแแแแแ`)
      .setColor("FF2052")
    
      if(!messageID) return message.channel.send(id);
      
      if (!rgx.test(messageID)) return message.channel.send(number);
      
      if(!replyQuery) return message.channel.send(query)
      
      try{
      const suggestionChannel = message.guild.channels.cache.get(channel)
      
      if(!suggestionChannel) return message.channel.send(noChannel)
      
      const suggestedEmbed = await suggestionChannel.messages.fetch(messageID).catch(error => {
  return message.channel.send(noMessage);
  })
     
      const data = suggestedEmbed.embeds[0];
     
      const replyEmbed = new MessageEmbed()
      .setAuthor(`${data.author.name}`, data.author.iconURL)
      .setDescription(data.description)
      .setColor("BLUE")
      .addField(`Reply from ${message.author.tag}`, replyQuery)
      .setFooter("Status: Replied")
      .setTimestamp();
      
     suggestedEmbed.edit(replyEmbed)
     
     message.channel.send(reply)
      
      const user = await client.users.cache.find((u) => u.tag === data.author.name)
      
    const embed = new MessageEmbed()
      .setDescription(`แแฅแแแ แแแแฆแแ แแแกแฃแฎแ แแฅแแแแก แแแแแแ <:whiteheavycheckmarkemojibytwitte:932260891750191165>  . **[แแแแแก แแแแแ](https://discord.com/channels/${message.guild.id}/${channel}/${messageID})**`)
      .setColor("BLUE")
      user.send(embed)
        
      } catch(err) {
        return;
    }
  }
}