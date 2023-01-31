const
    {commands} = require('../Command'),
    config = require('../config.json')

module.exports = async function(client) {
    client.on("message", async(message) => {
        if (message.author.id !== client.user.id) return
        if (!message.content.startsWith(config.prefix)) return
        var args = message.content.split(" ")
        commands().forEach(cmd => {
            if (message.content.startsWith(config.prefix + cmd.name)) {
                message.delete()
                cmd.func(message, args, client)
            }
        })
    })
}