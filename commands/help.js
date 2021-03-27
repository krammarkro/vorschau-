module.exports ={
    name: 'help',
    description: "Help",
    execute(message, args, Discord){
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#7f00ff')
       .setTitle('Commands you can use!')
       .setURL('https://youtube.com')
       .setDescription('All commands you can use!')
       .addFields(
            {name: '?ping', value: 'The bot will respond to you!'},
            {name: '?vote', value: 'Here you can vote for the server'},
            {name: '?dev', value: 'Tells you the Dev!' }
                     
        )
      

       message.channel.send(newEmbed);
    }
}