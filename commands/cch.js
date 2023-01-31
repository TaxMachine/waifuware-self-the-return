module.exports = {
    name: "cch",
    description: "Creates alot of channels",
    func: async function(message, args, client) {
        if (args.length === 1) {
            return message.channel.send("correct syntax: `cch [amount] [name]`")
            //return message.delete()
        }
        for (var i = 0; i < parseInt(args[1]); i++) {
            message.guild.createChannel(args[2], {
                type: 'text'
            })
        }
    }
}