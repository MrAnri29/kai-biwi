const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description:
    "მიიღეთ ყველა ბრძანების სია და გაეცანით ყველა ბრძანების დეტალებს",
  usage: "help <cmd>",
  category: "info 🤓",
  run: async (client, message, args) => {
    
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Უცნობი ბრძანება: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("❯ აღწერა", command.description || "არ აქვს :(")
        .addField("❯ გამოყენება", "`" + command.usage + "`" || "არ აქვს")
        .setColor("BLUE")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setColor("BLUE")
        .setFooter(client.user.username, client.user.displayAvatarURL(),'Moon mod ❤')
        
        .setThumbnail(client.user.displayAvatarURL());
          
      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "უცნობი";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category}`, desc);
      }
      return message.channel.send(emx)
    }
  }
};
 