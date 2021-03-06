const {
    MessageEmbed
} = require('discord.js');

const moment = require('moment');

module.exports = {

    name: "serverinfo",

    category: "info ๐ค",

    aliases: ["serverinfo"],

    description: "แแแแฆแ แแแคแแ แแแชแแ แกแแ แแแ แแก แจแแกแแฎแแ",

    usage: "[command]",

    run: (client, message, args) => {

        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());

        const members = message.guild.members.cache;

        const channels = message.guild.channels.cache;

        const emojis = message.guild.emojis.cache;

        const serverinfoembed = new MessageEmbed()
            .addField('แแคแแแแแแ', `${message.guild.owner.user.tag} (${message.guild.ownerID})`)
            .addField('แแ แฎแแแ', [
                `โฏ Text แแ แฎแแแ: ${channels.filter(channel => channel.type === 'text').size}`,

                `โฏ Voice แแ แฎแแแ: ${channels.filter(channel => channel.type === 'voice').size}`,
            ])
            .addField('แฌแแแ แแแ', [
                `โฏ แฌแแแ แแแ: ${message.guild.memberCount}`,

                `โฏ แแแแแแแแแแ: ${members.filter(member => !member.user.bot).size}`,

                `โฏ แแแขแแแ: ${members.filter(member => member.user.bot).size}`,

                `โฏ Online: ${members.filter(member => member.presence.status === 'online').size}`,

                `โฏ Idle: ${members.filter(member => member.presence.status === 'idle').size}`,

                `โฏ Do Not Disturb: ${members.filter(member => member.presence.status === 'dnd').size}`,

                `โฏ Offline: ${members.filter(member => member.presence.status === 'offline').size}`,
            ])
            .addField('แแแแแขแแแแแ', [

                `โฏ แ แแแแแ: ${roles.length}`,

                `โฏ Boost lvl: ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,

                `โฏ Boost-แ: ${message.guild.premiumSubscriptionCount || '0'}`,

            ])
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setFooter([
                `ID: ${message.guild.id} || แจแแแฅแแแ: ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`
            ])
            .setThumbnail(message.guild.iconURL({
                dynamic: true
            }))
            .setColor("RANDOM")
        message.channel.send(serverinfoembed);

    }

};