const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523048543133630465")
setInterval(function() {
channel.send(`اشهد ان لا الله الا الله و اشهد ان محمد رسول الله `);
}, 30)
})

client.login("NTI5MjQ4MDY5MTI1MDEzNTI1.DwuEsQ.m176KW0JQsuu3F0NG-X0AUHTAAU");
