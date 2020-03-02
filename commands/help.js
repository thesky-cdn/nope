const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
      const helpembd = new Discord.RichEmbed()
      .setTitle("Rumy Hentai/NSFW Bot")
      .setDescription("Click above to have the list of commands and invite the bot")
      .setImage("https://zvbt.space/zvbt-osu.png")
      .setColor(`#ECCCD4`)
      .setFooter(`Made with ❤️ by zvbt#5359`)
      .setURL("https://zvbt.space/bot.html");
    message.channel.send(helpembd);
}