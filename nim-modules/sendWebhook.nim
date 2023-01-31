import
    std/[json, os, httpclient]

proc sendWebhook: string =
    var
        client = newHttpClient()
        params = commandLineParams()
    client.headers = newHttpHeaders({"Authorization": params[0], "Content-Type": "application/json"})
    let
        payload: JsonNode = %*{
            "content": params[2]
        }
        res = client.request(params[1], HttpPost, $payload).body
    return res

when isMainModule:
    echo sendWebhook()