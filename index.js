const { events } = require('./Event')
const
    discord = require('v11-discord.js'),
    client = new discord.Client()
    config = require('./config.json'),
    fs = require('fs')
    

const sleep = ms => new Promise(resovle => setTimeout(resovle, ms));

const reconnect = async() => {
    await sleep(2000)
    await init()
}


const init = async() => {
    var eventss = await events()
    eventss.forEach(event => {
        event(client)
    })
}
client.login(config.token)
setTimeout(() => init(), 2000)

module.exports = {
    reconnect
}