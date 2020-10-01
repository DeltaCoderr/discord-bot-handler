const fs = require("fs");
const Discord = require("discord.js");

const Bot = new Discord.Client();
const Config = require("./../config/config.js");
const prefix = Config.prefix;
const token = Config.token;

global.Bot = Bot;

Bot.commands = {};

function loadCommands() {
  fs.readdirSync("src/plugins")
    .filter(file => file.endsWith(".js"))
    .forEach(file => {
      const cmd = require(`./plugins/${file}`).command;
      let obj = {};
      obj[cmd.name] = cmd;
      Object.assign(Bot.commands, obj);
      console.log(`✅ Loaded command ${file}`);
    });
}

function runCommand(message) {
  const { user, args, guild, cmd } = generateCommandParams(message);

  if (Bot.commands.hasOwnProperty(cmd)) {
    return Bot.commands[cmd].run(message, user, args, guild, cmd);
  }
}

function generateCommandParams(message) {
  let user = message.author;
  let args = message.content
    .slice(Config.prefix.length)
    .trim()
    .split(" ");
  let guild = message.member.guild;
  let cmd = args.shift().toLowerCase();

  for (let i in args) args[i] = args[i].trim();

  return { user, args, guild, cmd };
}

Bot.on("ready", () => {
  try {
    loadCommands();
    // console.log(Bot.commands)
    console.log("Commands loaded successfully!");
  } catch (err) {
    throw err;
  }

  console.log(`Connected to Discord as  ${Bot.user.tag}!`);

  Bot.user.setActivity(Config.activity);
});

Bot.on("message", message => {
  let args = message.content.substring(prefix.length).split(" ");

  if (message.content.startsWith(Config.prefix)) {
    runCommand(message);
  }
 
});

Bot.login(token);
