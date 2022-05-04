const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "suggestionreply",
  category: "suggestion 🎈",
  aliases: ['sreply'],
  run: async (client, message, args) => {
    
let channel = await db.fetch(`suggestion_${message.guild.id}`);
if (channel === null) return;
     
      if(!message.member.hasPermission('MANAGE_GUILD')) return;
      
    const rgx = /^(?:<@!?)?(\d+)>?$/;

    const messageID = args[0];
    const replyQuery = args.slice(1).join(' ');
      
    const number = new MessageEmbed()
      .setDescription(`🙄 | არა მგონია, ეს იყო შეტყობინების ID!`)
      .setColor("FF2052")
      
    const id = new MessageEmbed()
      .setDescription(`<:crossmarkbuttonemojiclipartmd:932261297230348338>   | ID-ს თუ არ დამიწერ მე ვერ მივხვდები რას გინდა გაცე პასუხი!`)
      .setColor("FF2052")
      
    const query = new MessageEmbed()
      .setDescription(`🙄 | bruh პასუხი ხომ უნდა მიუთითო?!`)
      .setColor("FF2052")
      
    const reply = new MessageEmbed()
      .setDescription(`<:whiteheavycheckmarkemojibytwitte:932260891750191165>  | თქვენ უპასუხეთ შემოთავაზებას`)
      .setColor("00FFFF")
      
    const noChannel = new MessageEmbed()
      .setDescription(`<:crossmarkbuttonemojiclipartmd:932261297230348338>   | ეგეთი არხი მე არ მინახია xD`)
      .setColor("FF2052")
      
    const noMessage = new MessageEmbed()
      .setDescription(`🙄 | ეგეთი ID-თი ვერაფერი ვერ ვიპოვე`)
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
      .setDescription(`თქვენ მიიღეთ პასუხი თქვენს იდეაზე <:whiteheavycheckmarkemojibytwitte:932260891750191165>  . **[იდეის ლინკი](https://discord.com/channels/${message.guild.id}/${channel}/${messageID})**`)
      .setColor("BLUE")
      user.send(embed)
        
      } catch(err) {
        return;
    }
  }
}