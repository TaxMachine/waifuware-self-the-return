const {execSync} = require('child_process'), config = require('../config.json')

const 
    createWebhook = async(id, name) => {
        var cmd = execSync(`${__dirname}/../nim-modules/bin/createWebhook.exe ${config.token} ${id} ${name}`).toString('utf-8')
        return JSON.parse(cmd)
    },
    sendWebhook = async(webhook, message) => {
        var cmd = execSync(`${__dirname}/../nim-modules/bin/sendWebhook.exe ${config.token} ${webhook} ${message}`).toString('utf-8')
        console.log(cmd)
    }

module.exports = {
    createWebhook,
    sendWebhook
}