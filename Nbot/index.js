// const { Client, GatewayIntentBits, MessageManager, MessageCollector, Message } = require('discord.js');
// const dotenv = require('dotenv');

// dotenv.config();

// const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
//   });

// client.on('messageCreate', message=>{
//     if (message.content == 'hungry'){
//         message.reply('order')
//     }
// });

// client.login(process.env.TOKEN)

import { Configuration, OpenAIApi } from "openai";

class ChatGPT {
  /**
   *
   * @param {import("./types").ChatGPTOptions} options
   */
  constructor(options) {
    this.orgKey = options.authId;
    this.apiKey = options.apiKey;
  }

  async chat(content, requester) {
    const configuration = new Configuration({
      organization: this.orgKey,
      apiKey: this.apiKey,
    });
    const openai = new OpenAIApi(configuration);
    let response = await openai
      .createCompletion({
        model: "davinci",
        prompt: `ChatGPT is a friendly chatbot. \n\
        ChatGPT : Hello, how are you?\n\
        ${requester}: ${content}\n\
        ChatGPT:`,
        temperature: 0.9,
        max_tokens: 100,
        stop: ["ChatGPT:", "Kabir Jaipal:"],
      })
      .then((res) => {
        return res.data.choices.at(0).text;
      })
      .catch((e) => {
        return e.message;
      });

    return response;
  }
}

export { ChatGPT };