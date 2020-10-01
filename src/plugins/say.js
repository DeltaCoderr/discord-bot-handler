
module.exports.command = {
    name: "say",
    alias: [],
    help: {
      usage: "",
      info: ""
    },
    run: function(message, user, args, guild, cmd) {
      message.channel.send(args.join(" "));
    }
}