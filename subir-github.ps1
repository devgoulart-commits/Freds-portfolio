# Script automático para publicar atualizações do Portfólio React + Vite no GitHub
$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot
$env:PATH = "$env:LOCALAPPDATA\Programs\MinGit\cmd;$env:LOCALAPPDATA\Programs\gh\bin;$env:PATH"

Write-Host "1. Verificando autenticação no GitHub..." -ForegroundColor Cyan
gh auth status
if ($LASTEXITCODE -ne 0) {
    gh auth login --web -h github.com -p https
}
gh auth setup-git

Write-Host "2. Preparando commit na branch main..." -ForegroundColor Cyan
git add .
git commit -m "feat: atualização do portfólio React + Vite FGA Holding" 2>$null

Write-Host "3. Enviando para https://github.com/devgoulart-commits/Freds-portfolio.git ..." -ForegroundColor Cyan
git push -u origin main

Write-Host "✅ Projeto enviado com sucesso para https://github.com/devgoulart-commits/Freds-portfolio !" -ForegroundColor Green
