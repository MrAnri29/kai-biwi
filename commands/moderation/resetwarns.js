const db = require("quick.db");

module.exports = {
    name: "resetwarns",
    aliases: ["rwarns", "rsetwarns", "resetwarnings", "resetwarn", "resetwarning"],
    category: "moderation",
    usage: "rwarns <@user>",
    description: "Reset warnings of mentioned person",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send(
                "ცოტა ზედმეტები ხომ არ მოგვდის? ადმინის პერმები გინდა!"
            );
        }

        const user = message.mentions.members.first();

        if (!user) {
            return message.channel.send("💢 გთხოვთ მოთაგეთ ადამიანი ვისი გაფრთხილებების წაშლაც გინდათ\n💦თორემ სხვანაირად როგორ მივხვდები ვისზე გინდათ გაფრთხილებების მოშორება?! HUH?!");
        }

        if (message.mentions.users.first().bot) {
            return message.channel.send("🤎 bot-ებს ვერ გააფრთხილებ ამიტომ მათ არ აქვთ გაფრთხილებები მომაკვდავო!");
        }

        if (message.author.id === user.id) {
            return message.channel.send("🖤 რასშობი სიმონ?! როდის მერე გაქ შენ მაგდენი უფლება?! HUH?!");
        }

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

        if (warnings === null) {
            return message.channel.send(`${message.mentions.users.first().username}-ს არ აქვს გაფრთხილებები :smirk: ||🤍 ტიფი ჩადია!||`);
        }

        db.delete(`warnings_${message.guild.id}_${user.id}`);
        user.send(
            `💝 გაგიმართლა სიმონ ყველა შენი გაფრთხილება წაშლილი იქნა ${message.author.username}-ამ გმირის მიერ -> ამ სერვერზე -> ${message.guild.name}`
        );
        await message.channel.send(
            `💖 ${message.mentions.users.first().username}-ის ყველა გაფრთხილება გავანულე!\n💥 რა იღბლიანი ტიპია არა?`
        );
    }
};