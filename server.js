const { default_prefix } = require(`./config.json`)
const DisTube = require("distube")

const fs = require("fs")

const fetch = require("node-fetch");
const db = require("quick.db");
const moment = require("moment");
const {
  CanvasSenpai
} = require("canvas-senpai")
const canva = new CanvasSenpai();
const {
  emotes,
  emoji
} = require("./config.json")
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: false
});
const yts = require('yt-search')
const {
  ready
} = require("./handlers/ready.js")

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.queue = new Map()
process.on('unhandledRejection', console.error);

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

const events = require(`./events/${eventFiles}`)(client);

client.on("message", async message => {


  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(default_prefix)) return;

  if (!message.member)
    message.member = message.guild.fetchMember(message);

  const args = message.content
    .slice(default_prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});


client.on("guildMemberAdd", async member => {

  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {

    return;

  }
  let data = await canva.welcome(member, {
    link: "https://cdn.discordapp.com/attachments/932214384430829592/932220134481887252/SeerLight_on_Twitter.png",
    blur: false
  })
  const attachment = new discord.MessageAttachment(

    data,

    "welcome-image.png"

  );
  client.channels.cache.get(chx).send(`👋 ${member.user} მოგესალმებით ${member.guild.name}-ში \nშენ ხარ ჩვენი მე-${member.guild.memberCount} წევრი \nიმედია ბევრს გაერთობი და კარგ დროს გაატარებ \<3 `, attachment);

});

// const { GiveawaysManager } = require("discord-giveaways");
// const manager = new GiveawaysManager(client, {
//     storage: "./handlers/giveaways.json",
//     updateCountdownEvery: 10000,
//     default: {
//         botsCanWin: false,
//         exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
//         embedColor: "#FF0000",
//         reaction: "🎉"
//     }
// });
// client.giveawaysManager = manager;

client.on("message", async message => {
  if (!message.guild) return;
  let prefix = db.get(`default_prefix${message.guild.id}`)
  if (prefix === null) prefix = default_prefix;

  if (!message.content.startsWith(default_prefix)) return;

})


client.on("message", async message => {
  if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = default_prefix;

  if (!message.content.startsWith(prefix)) return;

})


const express = require('express');
const app = express()

app.get("/", (req, res) => {
  res.send("hello world");
})

app.listen(3000, () => {
  console.log("project is running");
})

const {
  Player
} = require("discord-music-player");

const player = new Player(client, {
  leaveOnEmpty: false,
});

client.player = player;

new Player(client, {
  leaveOnEnd: false,
  leaveOnStop: false,
  leaveOnEmpty: false,
  timeout: 10,
  volume: 200,
  quality: 'high',
});

client.on('guildCreate', guild => {

  const channelId = '969638600373309508'; //put your bot log channel ID here

  const channel = client.channels.cache.get(channelId);
  if (!channel) return;
  const embed = new discord.MessageEmbed()
    .setTitle('I Joined A Guild!')
    .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`)
    .setTimestamp()
    .setColor('RANDOM')
    .setFooter(`I'm in ${client.guilds.cache.size} Guilds Now!`);
  channel.send(embed);
});


client.on('guildDelete', guild => {
  const channelId = '932214384430829591'; //add your channel ID
  const channel = client.channels.cache.get(channelId); //This Gets That Channel

  if (!channel) return; //If the channel is invalid it returns
  const embed = new discord.MessageEmbed()
    .setTitle('I Left A Guild!')
    .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`)
    .setTimestamp()
    .setColor('RED')
    .setFooter(`I'm in ${client.guilds.cache.size} Guilds Now!`);
  channel.send(embed);
});


console.log("this is a commands")

require('discord-reply');

// client.on("message", async message => {
//   const cchann = db.get(`chatbot_${message.guild.id}`);
//   if (cchann === null) return;
//   if (!cchann) return;
//   const sender = client.channels.cache.get(cchann);
//   if (message.channel.name == sender.name) {
//     if (message.author.bot) return;
//     message.content = message.content
//       .replace(/@(everyone)/gi, "everyone")
//       .replace(/@(here)/gi, "here");
//     message.channel.stopTyping();
//     message.channel.startTyping();
//     fetch(
//       `https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(
//         message.content
//       )}&botname=${client.user.username}&ownername=cwkhan`
//     )
//       .then(res => res.json())
//       .then(data => {
//         message.lineReply(data.message);
//       });
//     message.channel.stopTyping();
//   }
// });

require("./ExtendedMessage");
allowedMentions: {
  repliedUser: true
}

require('dotenv').config({ path: './.env' });
client.login(process.env.TOKEN);