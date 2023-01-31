const needle = require('needle'), config = require('../config.json')

const webhooks = async(id) => {
    var hooks = (await needle("get", `https://discord.com/api/v9/channels/${id}/webhooks`, {
        headers: {
            Authorization: config.token
        }
    })).body
    return hooks
}

module.exports = {
    webhooks
}