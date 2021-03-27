module.exports = {
    name: `ping`,
    description: "this is a ping comand!",
    execute(message, args){
        message.channel.send(`Pong!`);



    }
} 