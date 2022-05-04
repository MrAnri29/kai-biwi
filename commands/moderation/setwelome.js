const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "setwelcome",
    category: "moderation",
    usage: "setwelcome <#channel>",
    description: "დააყენეთ მისასალმებელი არხი",
    run: (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            const Excuseme = new MessageEmbed()
                .setTitle("Excuse me?!")
                .setDescription("😎 თქვენ გჭირდებათ ნებართვა მისასალმებელი არხის დასაყენებლად")
                .setColor(`RED`)
            return message.channel.send(Excuseme);
    }
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      const undefinedChannel = new MessageEmbed()
      .setDescription("🙄 გთხოვთ მონიშნეთ არხი!")
      .setColor(`RED`)
      return message.channel.send(undefinedChannel)
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    const newChannel = new MessageEmbed()
    .setDescription(`🤗 მისასალმებელი არხი დაყენებულია როგორც ${channel}`)
    .setColor(`GREEN`)

    message.channel.send(newChannel)
  }
}