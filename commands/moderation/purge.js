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
                    messageIsOlderThanTwoWeeks.setDescription("๐ แแแแแจแแ แ แแ แแ  แแแแฎแแ แแ แแแแ แแ แแ แแแ  แฌแแแจแแ แแ แแแกแแฏแแแก แ แแแแแแแช 14 แแฆแแก แฃแแแ แแงแ แแแฌแแ แแแ!")
                    messageIsOlderThanTwoWeeks.setColor("RANDOM")

            const memberNoPerms = new MessageEmbed()
            memberNoPerms.setDescription("๐ แแแแแแแ แฃแคแแแแ แแ  แแแฅแแก babe :kiss:")
            memberNoPerms.setColor("YELLOW")
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(memberNoPerms);
            const botNoPerms = new MessageEmbed()
            botNoPerms.setDescription("๐ถ แแแแ แแแแแจแ แแแแ แแ แแ แแ  แแแฅแแก แแแแแแแ แฃแคแแแแ!")
            if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply(botNoPerms);

            const commands = [
                `bots\` - แฌแแจแแแ แแแขแแแแก แแแแ  แแแแแแแแแแแแ แแแกแแฏแแแ`,
                `humans\` - แฌแแจแแแ แแแแแแแแแแแก แแแแ  แแแแแแแแแแแแ แแแกแแฏแแแ`,
                `embeds\` - แฌแแจแแแแ แแฎแแแแ embed-แแแ`,
                `files\` - แฌแแจแแแแ แแแกแแฏแแแ แ แแแแแแช แจแแแชแแแก แแแแแขแแแแ แคแแแแแแก`,
                `mentions\` - แฌแแจแแแแ แแแกแแฏแแแ แ แแแแแจแแช แ แแแแ แแแแแแแ`,
                `pins\` - แฌแแจแแแแ แแฎแแแแ แแแแแแ แแแฃแแ แแแกแแฏแแแ (pinned)`,
                `text\` - แฌแแจแแแแ แแแกแแฏแแแ แ แแแแแแแช แจแแแชแแแก แแฎแแแแ แขแแฅแกแขแก`,
                `match\` <แขแแฅแกแขแ> - แฌแแจแแแแ แแแกแแฏแแแ แ แแแแแแแช แจแแแชแแแก "แขแแฅแกแขแก"`,
                `not\` <แขแแฅแกแขแ> - แฌแแจแแแแ แแแกแแฏแแแ แ แแแแแแแช แแ  แจแแแชแแแก "แขแแฅแกแขแก"`,
                `startswith\` <แขแแฅแกแขแ> - แฌแแจแแแแ แแแกแแฏแแแ แ แแแแแแแช แแฌแงแแแ "แขแแฅแกแขแแ"`,
                `endswith\` <แขแแฅแกแขแ> - แฌแแจแแแแ แแแกแแฏแแแ แ แแแแแแแช แแแแแ แแแแ "แขแแฅแกแขแแ"`
            ]

            const embd = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setTitle("Purge | Clear | Delete | Prune")
                .setDescription(`แฌแแจแแแแ แ แแแแแแแแแ แแแกแแฏแ. (แแ  แแแแแก แแแแแแ แแแฃแ(pinned) แแแกแแฏแแแก แแ แแแฅแกแแแฃแ แฌแแจแแแ 100 แแแกแแฏแก!)`)
                .addField("Usage", `\`${prefix}purge <แแแชแฃแแแแ>\` - แฌแแจแแแแ แแแกแแฏแแแ.\n\`${prefix}purge <แแแชแฃแแแแ> --${commands.join(`\n\`${prefix}purge <แแแชแฃแแแแ> --`)}`)
                .setFooter(`${prefix}purge, ${prefix}clear, ${prefix}delete, ${prefix}prune`)




            if (!args[0] || !args.length) return message.channel.send(embd);
            let amount = Number(args[0], 10) || parseInt(args[0]);
            const undefinedNumberOfMsgs = new MessageEmbed()
            undefinedNumberOfMsgs.setDescription("๐ แแแฎแแแ แแแแฎแแ แแ แแฃ แ แแแแแแ แแแกแแฏแ แฃแแแ แฌแแแจแแแ")
            undefinedNumberOfMsgs.setColor("BLUE")
            if (isNaN(amount) || !Number.isInteger(amount)) return message.channel.send(undefinedNumberOfMsgs);
            const MessageLimit = new MessageEmbed()
            MessageLimit.setDescription("๐ แแแฎแแแ แจแแแงแแแแแ แ แแชแฎแแ 2-แแแแ 100-แแแแ!")
            MessageLimit.setColor("DARK_BLUE")
            if (!amount || amount < 2 || amount > 100) return message.channel.send(MessageLimit)
            if (!args[1]) {

                try {
                    await message.delete()
                    await message.channel.bulkDelete(amount).then(async (m) => {

                        let embed = new Discord.MessageEmbed()
                            .setColor('0x#00ffff')
                            .setDescription(`โ  แฌแแแจแแแ **${m.size}**/**${amount}** แแแกแแฏแ!`);

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
                                    .setDescription(`โ  แฌแแแจแแแ **${m.size}**/**${amount}** แแแกแแฏแ!`);

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
                                    .setDescription(`โ  แฌแแแจแแแ **${m.size}**/**${amount}** แแแกแแฏแ!`);

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
                                    .setDescription(`โ  แฌแแแจแแแ **${m.size}**/**${amount}** แแแกแแฏแ!`);

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
                                    .setDescription(`โ  แฌแแแจแแแ **${m.size}**/**${amount}** แแแกแแฏแ!`);

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
                                    .setDescription(`โ  แฌแแแจแแแ **${m.size}**/**${amount}** แแแกแแฏแ!`);

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
                                    .setDescription(`โ  แฌแแแจแแแ **${m.size}**/**${amount}** แแแกแแฏแ!`);

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
                                    .setDescription(`โ  แฌแแแจแแแ **${m.size}**/**${amount}** แแแกแแฏแ!`);

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
                                    .setDescription(`โ  แฌแแแจแแแ **${m.size}**/**${amount}** แแแกแแฏแ!`);

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
                                    .setDescription(`โ  แฌแแแจแแแ **${m.size}**/**${amount}** แแแกแแฏแ!`);

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
                                    .setDescription(`โ  แฌแแแจแแแ **${m.size}**/**${amount}** แแแกแแฏแ!`);

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
                                    .setDescription(`โ  แฌแแแจแแแ **${m.size}**/**${amount}** แแแกแแฏแ!`);

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
                return message.channel.send("๐ค แแแคแแฅแกแแ แแ แจแแชแแแแ")
            }
        } catch (error) {
            console.log(error)
            message.channel.send(`๐ แแแคแแฅแกแแ แแ แจแแชแแแแ \`${error}\``)
        }


    }
}