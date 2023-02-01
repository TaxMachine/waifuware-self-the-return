const 
    { events } = require('./Event'),
    { logo } = require('./functions/logo'),
    discord = require('v11-discord.js'),
    client = new discord.Client()
    config = require('./config.json'),
    fs = require('fs'),
    gradient = require('gradient-string'),
    timg = require('terminal-kit').terminal

client.on("ready", async() => {
    var eventss = await events()
    eventss.forEach(event => {
        event(client)
    })
    console.clear()
    timg.drawImage('./waifuware.png', {
        shrink: {
            width: timg.width, 
            height: timg.height * 2
        }
    }).then(res => console.log(`\t\t\t${res}`))
    var profile = await client.user.fetchProfile()
    var userinfo = []
    profile.connections.forEach(conn => userinfo.push(`\t${conn.type} -> ${conn.name}`))
    console.log(gradient.cristal(`
        Welcome to WaifuWare Selfbot ${client.user.username} ! Hope you have a great day :D
        Don't forget to star my repository https://github.com/TaxMachine/waifuware-self-the-return
            Username -> ${client.user.tag}
            ID -> ${client.user.id}
            Created At -> ${client.user.createdAt}
            Nitro Subscription -> ${client.user.premium}
            Friends -> ${client.user.friends.array().length}
            Blocked -> ${client.user.blocked.array().length}

    ${userinfo.join('\n')}`))
})

client.login(config.token)