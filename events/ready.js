module.exports = (client) => {
  console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  console.log("Bot Made by zvbt#5359");
  console.log("https://zvbt.space");
  client.user.setActivity("r!help") 
}