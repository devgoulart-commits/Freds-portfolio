# Script para publicar o Portfólio React + Vite no GitHub
$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Git não encontrado. Instalando Git via Winget..." -ForegroundColor Cyan
    winget install --id Git.Git -e --source winget --accept-package-agreements --accept-source-agreements
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
}

if (-not (Test-Path ".git")) {
    git init
}

git branch -M main

$remoteExists = git remote | Select-String -Pattern "^origin$"
if ($remoteExists) {
    git remote set-url origin https://github.com/devgoulart-commits/Freds-portfolio.git
} else {
    git remote add origin https://github.com/devgoulart-commits/Freds-portfolio.git
}

git add .
git commit -m "feat: novo portfólio React + Vite com FGA Holding, produtos, logo pessoal e assistente IA"
git push -u origin main --force
