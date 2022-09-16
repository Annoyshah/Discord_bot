require("dotenv").config();
const { token } = process.env; //discord.js bot heheh hehe hehe heh
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: GatewayIntentBits.Guilds,
});

client.commands = new Collection();
client.commandArray = []
const functionFolders = fs.readdirSync('./src/functions');
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
    for (const file of functionFiles) require(`./functions/${folder}/${file}`)(client);
   
    }

    client.handleEvents();
    client.handleCommands();

// client.on("ready", () => {
//   console.log(`The bot has logged in...${client.user.username}`);
// });

client.login(token);
//online //////////////////////
