const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const request = require('request');
const client = new Discord.Client();
const config = require("./config.json");

client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/nsfw/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/nsfw/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load nsfw directory ${commandName}`);
    client.commands.set(commandName, props);
  });
});


fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/help.js`);
    let help = file.split(".")[0];
    console.log(`Attempting to load nsfw directory ${help}`);
    client.commands.set(help, props);
  });
});



client.login(process.env.TOKEN_BOT);