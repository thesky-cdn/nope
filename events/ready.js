module.exports = (client) => {
  console.log("           ");
  console.log("Stats:");
  console.log(` Server: ${client.guilds.size}`);
  console.log(` Channels: ${client.channels.size}`);
  console.log(` Members: ${client.users.size}`);
  console.log("Info:");
  console.log(" Bot Made by zvbt#5359");
  console.log(" https://zvbt.space");


  var _channel = client.channels.find(channel => channel.id === '683851464967585792');


  let acti = ["r!help", "Best Hentai Bot", "zvbt.space", "Made with ❤️ by zvbt#5359"], i = 0;

  setInterval(function() {
    client.user.setActivity(`${acti [i++ % acti.length]}`, {type: "STREAMING",url:'https://twitch.tv/zvbt'})
  }, 5000)

}
