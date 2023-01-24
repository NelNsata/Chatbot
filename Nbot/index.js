const {Client, Intents} = require('discord.js');

const client = Client(
    {
        Intents:[
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILDS_MESSAGES,
        ]
    }
)