# Script automático para autenticar e publicar o Portfólio React + Vite no GitHub
$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot

$gitExe = "$env:LOCALAPPDATA\Programs\MinGit\cmd\git.exe"
$ghExe  = "$env:LOCALAPPDATA\Programs\gh\bin\gh.exe"

Write-Host "1. Verificando autenticação no GitHub..." -ForegroundColor Cyan
& $ghExe auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host "Abrindo navegador para autorizar sua conta GitHub (devgoulart-commits)..." -ForegroundColor Yellow
    & $ghExe auth login --web -h github.com -p https
}

& $ghExe auth setup-git

Write-Host "2. Preparando commit na branch main..." -ForegroundColor Cyan
& $gitExe add .
& $gitExe commit -m "feat: portfólio React + Vite atualizado com logo pessoal, produtos e assistente IA" 2>$null

Write-Host "3. Enviando para https://github.com/devgoulart-commits/Freds-portfolio.git ..." -ForegroundColor Cyan
& $gitExe push -u origin main --force

Write-Host "✅ Projeto enviado com sucesso para https://github.com/devgoulart-commits/Freds-portfolio !" -ForegroundColor Green
