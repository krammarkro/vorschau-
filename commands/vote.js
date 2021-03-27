module.exports ={
    name: 'vote',
    description: "VOte command",
    execute(message, args, Discord){
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#ff058f')
       .setTitle('Du kannst mit diesem Link für den Server voten')
       .setDescription('Währe echt nice wenn du das machst')
       .addFields(
            {name: 'https://discordservers.me/servers/786280325298388992/upvote', value: 'ʕ •ᴥ•ʔ'}

            
        )
      

       message.channel.send(newEmbed);
    }
}