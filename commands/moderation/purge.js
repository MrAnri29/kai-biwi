const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const bot = new Discord.Client();
module.exports = {
    name: "purge",
    category: "moderation",
    aliases: ['clear', 'delete', 'prune'],

    async run(bot, message, args) {
        // UPDATE ^ ACCORDING TO YOUR HANDLER
        let prefix = "m!"
        try {

            const messageIsOlderThanTwoWeeks = new MessageEmbed()
                    messageIsOlderThanTwoWeeks.setDescription("😄 ბოდიშით რომ არ გითხარით მაგრამ მე ვერ წავშლი იმ მესიჯებს რომლებიც 14 დღის უკან იყო დაწერილი!")
                    messageIsOlderThanTwoWeeks.setColor("RANDOM")

            const memberNoPerms = new MessageEmbed()
            memberNoPerms.setDescription("😋 მაგდენი უფლება არ გაქვს babe :kiss:")
            memberNoPerms.setColor("YELLOW")
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(memberNoPerms);
            const botNoPerms = new MessageEmbed()
            botNoPerms.setDescription("😶 დიდი ბოდიში მაგრამ მე არ მაქვს მაგდენი უფლება!")
            if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply(botNoPerms);

            const commands = [
                `bots\` - წაშალე ბოტების მიერ გამოგზავნილი მესიჯები`,
                `humans\` - წაშალე ადამიანების მიერ გამოგზავნილი მესიჯები`,
                `embeds\` - წაშალეთ მხოლოდ embed-ები`,
                `files\` - წაშალეთ მესიჯები რომელიც შეიცავს დამატებით ფაელებს`,
                `mentions\` - წაშალეთ მესიჯები რომელშიც რაიმე ითაგება`,
                `pins\` - წაშალეთ მხოლოდ მიმაგრებული მესიჯები (pinned)`,
                `text\` - წაშალეთ მესიჯები რომლებიც შეიცავს მხოლოდ ტექსტს`,
                `match\` <ტექსტი> - წაშალეთ მესიჯები რომლებიც შეიცავს "ტექსტს"`,
                `not\` <ტექსტი> - წაშალეთ მესიჯები რომლებიც არ შეიცავს "ტექსტს"`,
                `startswith\` <ტექსტი> - წაშალეთ მესიჯები რომლებიც იწყება "ტექსტით"`,
                `endswith\` <ტექსტი> - წაშალეთ მესიჯები რომლებიც მთავრდება "ტექსტით"`
            ]

            const embd = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setTitle("Purge | Clear | Delete | Prune")
                .setDescription(`წაშალეთ რამოდენიმე მესიჯი. (არ თვლის მიმაგრებულ(pinned) მესიჯებს და მაქსიმუმ წაშლით 100 მესიჯს!)`)
                .addField("Usage", `\`${prefix}purge <მოცულობა>\` - წაშალეთ მესიჯები.\n\`${prefix}purge <მოცულობა> --${commands.join(`\n\`${prefix}purge <მოცულობა> --`)}`)
                .setFooter(`${prefix}purge, ${prefix}clear, ${prefix}delete, ${prefix}prune`)




            if (!args[0] || !args.length) return message.channel.send(embd);
            let amount = Number(args[0], 10) || parseInt(args[0]);
            const undefinedNumberOfMsgs = new MessageEmbed()
            undefinedNumberOfMsgs.setDescription("🙏 გთხოვთ მითხარით თუ რამდენი მესიჯი უნდა წავშალო")
            undefinedNumberOfMsgs.setColor("BLUE")
            if (isNaN(amount) || !Number.isInteger(amount)) return message.channel.send(undefinedNumberOfMsgs);
            const MessageLimit = new MessageEmbed()
            MessageLimit.setDescription("🙏 გთხოვთ შეიყვანოთ რიცხვი 2-იდან 100-ამდე!")
            MessageLimit.setColor("DARK_BLUE")
            if (!amount || amount < 2 || amount > 100) return message.channel.send(MessageLimit)
            if (!args[1]) {

                try {
                    await message.delete()
                    await message.channel.bulkDelete(amount).then(async (m) => {

                        let embed = new Discord.MessageEmbed()
                            .setColor('0x#00ffff')
                            .setDescription(`✅  წავშალე **${m.size}**/**${amount}** მესიჯი!`);

                        message.channel.send(embed).then(msg => msg.delete({
                            timeout: 4000
                        }));
                    })

                } catch (e) {
                    console.log(e)
                    message.channel.send(messageIsOlderThanTwoWeeks)


                }

            } else if (args[1]) {
                let msg;
                let data;
                let embed;
                switch (args[1]) {
                    case "--bots":
                        msg = await message.channel.messages.fetch({
                            limit: amount
                        })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (ms.author.bot && !ms.pinned) data.push(ms)
                        })

                        try {
                            await message.delete()
                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new Discord.MessageEmbed()
                                    .setColor('0x#00ffff')
                                    .setDescription(`✅  წავშალე **${m.size}**/**${amount}** მესიჯი!`);

                                message.channel.send(embed).then(msg => msg.delete({
                                    timeout: 50000
                                }));
                            })

                        } catch (e) {
                            console.log(e)
                            message.channel.send(messageIsOlderThanTwoWeeks)
                        }

                        break;
                    case "--humans":
                        msg = await message.channel.messages.fetch({
                            limit: amount
                        })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (!ms.author.bot && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new Discord.MessageEmbed()
                                    .setColor('0x#00ffff')
                                    .setDescription(`✅  წავშალე **${m.size}**/**${amount}** მესიჯი!`);

                                message.channel.send(embed).then(msg => msg.delete({
                                    timeout: 50000
                                }));
                            })

                        } catch (e) {
                            console.log(e)
                            message.channel.send(messageIsOlderThanTwoWeeks)
                        }

                        break;
                    case "--embeds":
                        msg = await message.channel.messages.fetch({
                            limit: amount
                        })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (ms.embeds.length && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new Discord.MessageEmbed()
                                    .setColor('0x#00ffff')
                                    .setDescription(`✅  წავშალე **${m.size}**/**${amount}** მესიჯი!`);

                                message.channel.send(embed).then(msg => msg.delete({
                                    timeout: 50000
                                }));
                            })

                        } catch (e) {
                            console.log(e)
                            message.channel.send(messageIsOlderThanTwoWeeks)
                        }

                        break;
                    case "--files":
                        msg = await message.channel.messages.fetch({
                            limit: amount
                        })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (ms.attachments.first() && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new Discord.MessageEmbed()
                                    .setColor('0x#00ffff')
                                    .setDescription(`✅  წავშალე **${m.size}**/**${amount}** მესიჯი!`);

                                message.channel.send(embed).then(msg => msg.delete({
                                    timeout: 50000
                                }));
                            })

                        } catch (e) {
                            console.log(e)
                            message.channel.send(messageIsOlderThanTwoWeeks)
                        }

                        break;
                    case "--text":
                        msg = await message.channel.messages.fetch({
                            limit: amount
                        })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (!ms.attachments.first() && !ms.embeds.length && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new Discord.MessageEmbed()
                                    .setColor('0x#00ffff')
                                    .setDescription(`✅  წავშალე **${m.size}**/**${amount}** მესიჯი!`);

                                message.channel.send(embed).then(msg => msg.delete({
                                    timeout: 50000
                                }));
                            })

                        } catch (e) {
                            console.log(e)
                            message.channel.send(messageIsOlderThanTwoWeeks)
                        }

                        break;
                    case "--mentions":
                        msg = await message.channel.messages.fetch({
                            limit: amount
                        })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if ((ms.mentions.users.first() || ms.mentions.members.first() || ms.mentions.channels.first() || ms.mentions.roles.first()) && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new Discord.MessageEmbed()
                                    .setColor('0x#00ffff')
                                    .setDescription(`✅  წავშალე **${m.size}**/**${amount}** მესიჯი!`);

                                message.channel.send(embed).then(msg => msg.delete({
                                    timeout: 50000
                                }));
                            })

                        } catch (e) {
                            console.log(e)
                            message.channel.send(messageIsOlderThanTwoWeeks)
                        }

                        break;
                    case "--pins":
                        msg = await message.channel.messages.fetch({
                            limit: amount
                        })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new Discord.MessageEmbed()
                                    .setColor('0x#00ffff')
                                    .setDescription(`✅  წავშალე **${m.size}**/**${amount}** მესიჯი!`);

                                message.channel.send(embed).then(msg => msg.delete({
                                    timeout: 50000
                                }));
                            })

                        } catch (e) {
                            console.log(e)
                            message.channel.send(messageIsOlderThanTwoWeeks)
                        }

                        break;
                    case "--match":
                        msg = await message.channel.messages.fetch({
                            limit: amount
                        })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (!args[2]) return message.channel.send(embd);
                            if (ms.content.includes(args.slice(2).join(" ")) && !ms.pinned) data.push(ms)
                        })

                        try {


                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new Discord.MessageEmbed()
                                    .setColor('0x#00ffff')
                                    .setDescription(`✅  წავშალე **${m.size}**/**${amount}** მესიჯი!`);

                                message.channel.send(embed).then(msg => msg.delete({
                                    timeout: 50000
                                }));
                            })

                        } catch (e) {
                            console.log(e)
                            message.channel.send(messageIsOlderThanTwoWeeks)
                        }

                        break;
                    case "--not":
                        msg = await message.channel.messages.fetch({
                            limit: amount
                        })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (!args[2]) return message.channel.send(embd);
                            if (!ms.content.includes(args.slice(2).join(" ")) && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new Discord.MessageEmbed()
                                    .setColor('0x#00ffff')
                                    .setDescription(`✅  წავშალე **${m.size}**/**${amount}** მესიჯი!`);

                                message.channel.send(embed).then(msg => msg.delete({
                                    timeout: 50000
                                }));
                            })

                        } catch (e) {
                            console.log(e)
                            message.channel.send(messageIsOlderThanTwoWeeks)
                        }

                        break;
                    case "--startswith":
                        msg = await message.channel.messages.fetch({
                            limit: amount
                        })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (!args[2]) return message.channel.send(embd);
                            if (ms.content.startsWith(args.slice(2).join(" ")) && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new Discord.MessageEmbed()
                                    .setColor('0x#00ffff')
                                    .setDescription(`✅  წავშალე **${m.size}**/**${amount}** მესიჯი!`);

                                message.channel.send(embed).then(msg => msg.delete({
                                    timeout: 50000
                                }));
                            })

                        } catch (e) {
                            console.log(e)
                            message.channel.send(messageIsOlderThanTwoWeeks)
                        }

                        break;
                    case "--endswith":
                        msg = await message.channel.messages.fetch({
                            limit: amount
                        })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (!args[2]) return message.channel.send(embd);
                            if (ms.content.endsWith(args.slice(2).join(" ")) && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new Discord.MessageEmbed()
                                    .setColor('0x#00ffff')
                                    .setDescription(`✅  წავშალე **${m.size}**/**${amount}** მესიჯი!`);

                                message.channel.send(embed).then(msg => msg.delete({
                                    timeout: 50000
                                }));
                            })

                        } catch (e) {
                            console.log(e)
                            message.channel.send(messageIsOlderThanTwoWeeks)
                        }

                        break;
                    default:
                        return message.channel.send(embd)
                        break;
                }

            } else {
                return message.channel.send("🤐 დაფიქსირდა შეცდომა")
            }
        } catch (error) {
            console.log(error)
            message.channel.send(`😐 დაფიქსირდა შეცდომა \`${error}\``)
        }


    }
}