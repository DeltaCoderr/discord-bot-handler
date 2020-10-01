const { Client, MessageAttachment } = require('discord.js');

module.exports.command = {
    name: "rip",
    alias: [],
      help: {
        info: "RIP",
      },
  run: function(message) {
     const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    message.channel.send(attachment);
  }
}