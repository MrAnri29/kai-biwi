const { default_prefix } = require(`../config.json`)

  // Set the bot's online/idle/dnd/invisible status
module.exports = async (client, args) => { 
    
    client.on("ready", () => {

    client.user.setStatus("idle");

    console.log(`${client.user.username} is ready now!`)

    client.user.setActivity(`ჯიზნ ვარამ! ${default_prefix}help`, { type: "WATCHING" })});
}