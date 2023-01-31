const {commands} = require('../Command')

module.exports = {
    name: "help",
    description: "help menu",
    func: async function(message, args, client) {
        var msg = "```\n"
        commands().forEach(cmd => msg += `${cmd.name} -> ${cmd.description}\n`)
        message.channel.send(msg + "\n```")
    }
}