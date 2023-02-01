const config = require("../config.json")

module.exports = async function(client) {
    client.on('error', async() => {
        console.log("an error occured")
        client.destroy()
        client.login()
    })
}