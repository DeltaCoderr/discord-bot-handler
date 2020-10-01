const Discord = require("discord.js");

module.exports.command = {
  name: "poll",
  alias: [],
  help: {
    info: "Creates a poll based on the text which follows the command.",
  },
  run: function (message, user, args) {
    let poll = args.slice(1, args.length).join(" ");
    message.channel.send(poll).then((messageReaction) => {
      messageReaction.react("👍");
      messageReaction.react("👎");
    });
  },
};
