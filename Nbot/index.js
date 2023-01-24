const { Client, GatewayIntentBits, MessageManager, MessageCollector, Message } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('messageCreate', message=>{
    console.log(message.content == 'hungry'){
        message.reply('order')
    }
});

client.login(process.env.TOKEN)