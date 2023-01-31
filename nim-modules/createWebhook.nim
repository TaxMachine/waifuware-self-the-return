import
    std/[httpclient, os, json, strformat]

proc createWebhook: string =
    var
        client = newHttpClient()
        params = commandLineParams()
    client.headers = newHttpHeaders({"Authorization": params[0], "Content-Type": "application/json"})
    let payload: JsonNode = %*{
        "name": params[2]
    }
    let res = client.request(fmt"https://discord.com/api/v9/channels/{params[1]}/webhooks", HttpPost, $payload)
    return res.body

when isMainModule:
    echo createWebhook()