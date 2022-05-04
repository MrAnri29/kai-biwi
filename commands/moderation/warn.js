const {
    MessageEmbed
} = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "warn",
    category: "moderation",
    usage: "[command] <@mention> <reason>",
    description: "გააფრთხილეთ ყველა, ვინც არ ემორჩილება წესებს",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send(
                "💘 თქვენ უნდა გქონდეთ ადმინისტრატორის ნებართვა ამ ბრძანების გამოსაყენებლად!"
            );
        }

        const user = message.mentions.members.first();

        if (!user) {
            return message.channel.send(
                "🧡 გთხოვთ, მიუთითოთ ადამიანი, ვისი გაფრთხილებაც გსურთ - warn @mention <მიზეზი>"
            );
        }

        if (message.mentions.users.first().bot) {
            return message.channel.send("💛 თქვენ არ შეგიძლიათ გააფრთხილოთ ბოტები");
        }

        if (message.author.id === user.id) {
            return message.channel.send("💚 თქვენივე თავს ვერ გააფრთხილებ");
        }

        if (user.id === message.guild.owner.id) {
            return message.channel.send(
                "💙 სულელო, როგორ შეგიძლია გააფრთხილო სერვერის მფლობელი -_-"
            );
        }

        const reason = args.slice(1).join(" ");

        if (!reason) {
            return message.channel.send(
                "💜 გთხოვთ, მიუთითოთ გაფრთხილების მიზეზი - warn @mention <reason>"
            );
        }

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

        if (warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1);
            user.send(
                `თქვენ გაფრთხილებული ხართ **${message.guild.name}**-ში იმიტომ რომ ${reason}`
            );
            await message.channel.send(
                `შენ გააფრთხილე **${
        message.mentions.users.first().username
        }** იმიტომ რომ ${reason}`
            );
        } else if (warnings !== null) {

            db.add(`warnings_${message.guild.id}_${user.id}`, 1);

            user.send(`თქვენ გაფრთხილებული ხართ **${message.guild.name}**-ში იმიტომ რომ ${reason}`);

            await message.channel.send(`შენ გააფრთხილე **${message.mentions.users.first().username}** იმიტომ რომ ${reason}`);

            message.delete

        }
    }
};