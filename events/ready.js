module.exports = async function(client) {
    client.on("ready", async() => {
        console.log(`Logged on ${client.user.username}`)
    })
}