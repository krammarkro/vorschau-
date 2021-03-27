const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();

const prefix = "?";

const fs = require(`fs`);

client.commands = new Discord.Collection();







const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith(`.js`));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once("ready", () => {
    console.log("I am online!");

});

client.on("message", message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == "help"){
        client.commands.get("help").execute(message, args, Discord);
    }else if(command == "ping"){
        client.commands.get(`ping`).execute(message, args);
    } else if(command == "vote"){
        client.commands.get("vote").execute(message, args, Discord);
    } else if (command == "dev"){
        client.commands.get("dev").execute(message, args);
    } else if (command == "marco"){
        client.commands.get("marco").execute(message, args);
    } else if (command == "pong"){
        client.commands.get("pong").execute(message, args);
    }
});

client.login(""); 
