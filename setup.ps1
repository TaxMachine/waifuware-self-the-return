function Invoke-WaifuWare {
    Write-Host "Checking if nim is installed..."
    if (-not $env:PATH.contains("nim") -and -not $env:PATH.Contains("nimble")) {
        Write-Host "Nim is not installed. Installing..."
        Install-Nim
    }
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
    Clear-Host
    Write-Host 
    $token = Read-Host -Prompt "Enter your Discord token -> "
    $prefix = Read-Host -Prompt "Enter the prefix you wanna use -> "
    $config = @"
{
    "token": "$token",
    "prefix": "$prefix"
}
"@
    New-Item -Path ".\config.json" -ItemType File -Value $config
    Set-Location -Path ".\nim-modules"
    Get-ChildItem | ForEach-Object {
        if ($_.FullName.EndsWith(".nim")) {
            nim c $_.FullName
        }
    }
    Get-ChildItem -Path ".\bin" | ForEach-Object {
        if ($_.FullName.EndsWith(".exe")) {
            strip.exe $_.FullName
        }
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

Invoke-WaifuWare