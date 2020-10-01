const Config = require('./../../config/config.js')

module.exports.command = {
    name: "eval",
    alias: [],
      help: {
        info: "Eval Nerd."
      },


  run: function(message, user, args, guild, cmd) {
 if(!Config.owners.includes(user.id)) return false;
   

        const code = args.join(' ')
     

        try {
            message.channel.send(eval(code), {code: 'javascript'})
        } catch(err) {
            this.channel.send(`ERROR!\n${err}`, {code: 'javascript'})
        
      }
    }
}