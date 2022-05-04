const { MessageEmbed } = require('discord.js')
const ms = require('ms');
module.exports = {
    name: "start",
        description: "აკეთებს გათამაშებას",
        accessableby: "Administrator",
        category: "giveaway",
        aliases: ["giveaway-start"],
        usage: '<არხი> <დრო(d,m,etc.)> <გამარჯვებულები>, <პრიზი>',
    run: async (bot, message, args) => {
       if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: შენ უნდა გქონდეს MANAGE_MESSAGES-ს უფლებები რომ დაიწყო გათამაშება.');
    }

    // Giveaway channel
    let giveawayChannel = message.mentions.channels.first();
    // If no channel is mentionned
    if(!giveawayChannel){
        return message.channel.send(':x: შენ უნდა მოთაგო სწორი არხი!');
    }

    // Giveaway duration
    let giveawayDuration = args[1];
    // If the duration isn't valid
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(':x: შენ უნდა დანიშნო სწორი დრო!');
    }

    // Number of winners
    let giveawayNumberWinners = args[2];
    // If the specified number of winners is not a number
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send(':x: შენ უნდა დაწერო სწორი გამარჯვებულების რაოდენობა!');
    }

    // Giveaway prize
    let giveawayPrize = args.slice(3).join(' ');
    // If no prize is specified
    if(!giveawayPrize){
        return message.channel.send(':x: შენ უნდა დაწერო სწორი პრიზი!');
    }

    // Start the giveaway
    bot.giveawaysManager.start(giveawayChannel, {
        // The giveaway duration
        time: ms(giveawayDuration),
        // The giveaway prize
        prize: giveawayPrize,
        // The giveaway winner count
        winnerCount: giveawayNumberWinners,
        // Who hosts this giveaway
        hostedBy: message.author,
        // Messages
        messages: {
            giveaway: "🎉🎉 *გათამაშება* 🎉🎉",
            giveawayEnded: "🎉🎉 *გათამაშება დამთავდა* 🎉🎉",
            timeRemaining: "დარჩენილი დრო: **{duration}**!",
            inviteToParticipate: "დაარეაქთე 🎉-ით რომ მიიღო მონაწილეობა!",
            winMessage: "გილოცავთ, {winners}! თქვენ მოიგეთ **{prize}**!",
            embedFooter: "გათამაშებები",
            noWinner: "გათამაშება დასრულდა, არავინ მონაწილეობა არ მიიღო😥.",
            hostedBy: "გათამაშების ავტორია: {user}",
            winners: "გამარჯვებული(ები)",
            endedAt: "დამთავრდა",
            units: {
                seconds: "წამი",
                minutes: "წუთი",
                hours: "საათი",
                days: "დღე",
                pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
            }
        }
    });

    message.channel.send(`გათამაშება დაიწყო ${giveawayChannel}-აქ!`);

    }
}