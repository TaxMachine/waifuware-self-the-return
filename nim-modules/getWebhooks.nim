import
    std/[httpclient, os, strformat]

proc getWebhooks*: string =
    var
        client = newHttpClient()
        params = commandLineParams()
    client.headers = newHttpHeaders({"Authorization": params[0], "Content-Type": "application/json"})
    let
        res = client.request(fmt"https://discord.com/api/v9/channels/{params[1]}/webhooks", HttpGet)
    return res.body

when isMainModule:
    echo getWebhooks()