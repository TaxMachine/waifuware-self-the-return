const { reconnect } = require("..")

module.exports = async function(client) {
    client.on('error', async() => {
        console.log("an error occured")
        client.destroy()
        reconnect()
    })
}