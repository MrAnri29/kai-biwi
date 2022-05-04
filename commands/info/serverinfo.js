const {
    MessageEmbed
} = require('discord.js');

const moment = require('moment');

module.exports = {

    name: "serverinfo",

    category: "info 🤓",

    aliases: ["serverinfo"],

    description: "მიიღე ინფორმაცია სერვერის შესახებ",

    usage: "[command]",

    run: (client, message, args) => {

        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());

        const members = message.guild.members.cache;

        const channels = message.guild.channels.cache;

        const emojis = message.guild.emojis.cache;

        const serverinfoembed = new MessageEmbed()
            .addField('მფლობელი', `${message.guild.owner.user.tag} (${message.guild.ownerID})`)
            .addField('არხები', [
                `❯ Text არხები: ${channels.filter(channel => channel.type === 'text').size}`,

                `❯ Voice არხები: ${channels.filter(channel => channel.type === 'voice').size}`,
            ])
            .addField('წევრები', [
                `❯ წევრები: ${message.guild.memberCount}`,

                `❯ ადამიანები: ${members.filter(member => !member.user.bot).size}`,

                `❯ ბოტები: ${members.filter(member => member.user.bot).size}`,

                `❯ Online: ${members.filter(member => member.presence.status === 'online').size}`,

                `❯ Idle: ${members.filter(member => member.presence.status === 'idle').size}`,

                `❯ Do Not Disturb: ${members.filter(member => member.presence.status === 'dnd').size}`,

                `❯ Offline: ${members.filter(member => member.presence.status === 'offline').size}`,
            ])
            .addField('დამატებითი', [

                `❯ როლები: ${roles.length}`,

                `❯ Boost lvl: ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,

                `❯ Boost-ი: ${message.guild.premiumSubscriptionCount || '0'}`,

            ])
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setFooter([
                `ID: ${message.guild.id} || შეიქმნა: ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`
            ])
            .setThumbnail(message.guild.iconURL({
                dynamic: true
            }))
            .setColor("RANDOM")
        message.channel.send(serverinfoembed);

    }

};