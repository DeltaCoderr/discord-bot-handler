const {MessageEmbed} = require('discord.js')
// go to index ok 
module.exports.command = {
  name: "serverinfo",
    alias: [],
    help: {
      info: "Get info of the current guild"
    },

    run: function(message, user, args, guild, cmd) {
      // const guild = message.guild;

      const onlineUsers = {
        online: guild.presences.cache.filter(presence => presence.status === "online").size,
        idle: guild.presences.cache.filter(presence => presence.status === "idle").size,
        dnd: guild.presences.cache.filter(presence => presence.status === "dnd").size,
      };

      const embed = new MessageEmbed()
        .setColor("#00FFFF")
        .setTitle(`${guild}`)
        .setThumbnail(guild.iconURL)
        .addField(`≫ **Online Users**`, `${onlineUsers.online}`, true)
        .addField(`≫ **Total Users**`, `${guild.memberCount}`, true)
        .addField(`≫ **Roles**`, `${guild.roles.cache.size}`, true)
        .addField(`≫ **Text Channels**`, `${guild.channels.cache.size}`, true)
        .addField(`≫ **Server Region**`, `${guild.region}`, true)
        .addField(`≫ **Verification Level**`, `${guild.verificationLevel}`, true);

      message.channel.send(embed);
      // return message.channel.send(`${emoji.unneutralLvl} **Utility** commands are temporarily disabled...`)
    }
}