const Discord = require("discord.js");

module.exports.command = {
  name: "poll",
  alias: [],
  help: {
    info: "Creates a poll based on the text which follows the command.",
  },
  run: function (message, user, args) {
    let poll = args.slice(1, args.length).join(" ");
    const embed = new Discord.MessageEmbed()
      .setTitle(poll)
      .setThumbnail(
        "https://www.clipartkey.com/mpngs/m/100-1003892_thumbs-up-down-thumbs-up-and-down-png.png"
      )
      .setDescription(
        "React with a thumbs up or thumbs down emoji to vote on the poll."
      )
      .setColor("RANDOM");
    message.channel.send({ embed: embed }).then((messageReaction) => {
      messageReaction.react("👍");
      messageReaction.react("👎");
    });
  },
};
