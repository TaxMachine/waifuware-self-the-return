function main {
    Write-Host "Checking if nim is installed..."
    if (-not $env:PATH.contains("nim") -and -not $env:PATH.Contains("nimble")) {
        Write-Host "Nim is not installed. Installing..."
        Install-Nim
    } else {
        if (-not $env:PATH.contains("Git\cmd")) {
            Write-Host "Git is not installed. Installing..."
            Install-Git
        }
        if (-not $env:PATH.Contains("\nodejs\")) {
            Write-Host "Node is not installed. Installing..."
            Install-Node
        }
        git clone https://github.com/TaxMachine/waifuware-self-the-return
        Set-Location -Path ".\waifuware-self-the-return"
        npm install
        Set-Location -Path ".\nim-modules"
        nim c createWebhook.nim
        nim c getWebhooks.nim
        nim c sendWebhook.nim
        strip.exe bin/createWebhook.exe
        strip.exe bin/getWebhooks.exe
        strip.exe bin/sendWebhook.exe
    }
}

function Install-Node {
    try {
        scoop install nodejs-lts
        Write-Host "Node has been successfully installed !"
    } catch {
        Write-Host "Scoop is not installed. Installing..."
        Install-Scoop
    }
}

function Install-Git {
    try {
        scoop install git
        Write-Host "Git has been successfully installed !"
    } catch {
        Write-Host "Scoop is not installed. Installing..."
        Install-Scoop
    }
}

function Install-Nim {
    try {
        scoop install nim
        Write-Host "Nim has been successfully installed"
    } catch {
        Write-Host "Scoop is not installed. Installing..."
        Install-Scoop
    }
}

function Install-Scoop {
    Invoke-RestMethod -uri "get.scoop.sh" | Invoke-Expression
}