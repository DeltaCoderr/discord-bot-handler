
module.exports.command = {
  name: "pick",
    alias: [],
    help: {
      usage: "pick option1, option2, option3...",
      info: "Pick a random option"
    },

    run: function(message, user, args, guild, cmd) {
      args = args.join(" ").split(",");
      if (args.length <= 1)
        return this.channel.send("Try entering more items to select.");

      const len = args.length;
      const randomArgument = args[Math.round(Math.random() * len)];

      message.channel.send(`**Random pick**: ${randomArgument}`);
    }
}