const Discord = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
  const command = require(`./commands/${file}`)
  
  client.commands.set(command.name, command)
}

client.once('ready', () => {
  client.user.setActivity('EARFQUAKE', {type: 'LISTENING' })
  console.log('prontalhos mete ficha');
});

client.on('message', message => {
  if (!client.commands.has(message.content) || message.author.bot) return;
  
  try {
    client.commands.get(message.content).execute(message);
  } catch (error) {
    console.error(error);
  }

});

client.login(token);