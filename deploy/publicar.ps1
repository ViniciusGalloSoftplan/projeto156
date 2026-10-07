<#
  Publica o Portal 156 no FTP usando o WinSCP.

  Faz uma SINCRONIZAÇÃO: envia para o servidor apenas os arquivos novos ou
  alterados. Nunca apaga nada no servidor.

  Nunca são enviados: .git/, .claude/, deploy/, .vscode/, .gitignore, *.md

  Uso:
    .\deploy\publicar.ps1             -> mostra a prévia e pede confirmação
    .\deploy\publicar.ps1 -Preview    -> só mostra o que seria enviado
    .\deploy\publicar.ps1 -Confirmar  -> envia sem perguntar
                                         (usado pelo Claude Code depois da sua aprovação)

  Credenciais: deploy\ftp.config (fora do Git e do FTP)
#>
param(
  [switch]$Preview,
  [switch]$Confirmar
)

$ErrorActionPreference = 'Stop'

$raizProjeto   = Split-Path -Parent $PSScriptRoot
$arquivoConfig = Join-Path $PSScriptRoot 'ftp.config'
$arquivoLog    = Join-Path $PSScriptRoot 'ultimo-deploy.log'

# ── Configuração ───────────────────────────────────────────
if (-not (Test-Path $arquivoConfig)) {
  throw "Arquivo de configuração não encontrado: $arquivoConfig"
}

$cfg = @{}
Get-Content $arquivoConfig -Encoding UTF8 | ForEach-Object {
  $linha = $_.Trim()
  if ($linha -eq '' -or $linha.StartsWith('#')) { return }
  $i = $linha.IndexOf('=')
  if ($i -lt 1) { return }
  $cfg[$linha.Substring(0, $i).Trim()] = $linha.Substring($i + 1).Trim()
}

foreach ($campo in 'Host', 'Usuario', 'Senha') {
  if (-not $cfg[$campo] -or $cfg[$campo] -like 'PREENCHA*') {
    throw "Preencha o campo '$campo' em $arquivoConfig"
  }
}

$protocolo   = if ($cfg['Protocolo']) { $cfg['Protocolo'].ToLower() } else { 'ftp' }
$pastaRemota = if ($cfg['PastaRemota']) { $cfg['PastaRemota'] } else { '/' }
$hostPorta   = if ($cfg['Porta']) { "$($cfg['Host']):$($cfg['Porta'])" } else { $cfg['Host'] }

if ($protocolo -notin 'ftp', 'ftpes', 'ftps', 'sftp') {
  throw "Protocolo inválido '$protocolo'. Use ftp, ftpes, ftps ou sftp."
}

# ── Localiza o WinSCP ──────────────────────────────────────
$winscp = $cfg['WinSCP']
if (-not $winscp) {
  $candidatos = @(
    "${env:ProgramFiles(x86)}\WinSCP\WinSCP.com",
    "$env:ProgramFiles\WinSCP\WinSCP.com",
    "$env:LOCALAPPDATA\Programs\WinSCP\WinSCP.com"
  )
  $winscp = $candidatos | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1
}
if (-not $winscp -or -not (Test-Path $winscp)) {
  throw "WinSCP.com não encontrado. Informe o caminho em 'WinSCP=' no ftp.config."
}

# ── Aviso se houver alterações não commitadas ──────────────
try {
  $pendentes = git -C $raizProjeto status --porcelain 2>$null
  if ($pendentes) {
    Write-Host "Atenção: há alterações ainda não commitadas no projeto:" -ForegroundColor Yellow
    $pendentes | ForEach-Object { Write-Host "  $_" -ForegroundColor Yellow }
    Write-Host ""
  }
} catch { }

# ── Monta os comandos do WinSCP ────────────────────────────
$usuario = [uri]::EscapeDataString($cfg['Usuario'])
$senha   = [uri]::EscapeDataString($cfg['Senha'])
$abrir   = "open ""${protocolo}://${usuario}:${senha}@${hostPorta}/"""
if ($protocolo -ne 'sftp') { $abrir += ' -passive=on' }
if ($cfg['HostKey'])       { $abrir += " -hostkey=""$($cfg['HostKey'])""" }

# O que NUNCA vai para o servidor
$mascara = '|.git/; .claude/; deploy/; .vscode/; .idea/; node_modules/; .gitignore; *.md; Thumbs.db; desktop.ini; *.log'

function Invoke-Sincronizacao([bool]$apenasPrevia) {
  $sync = 'synchronize remote -criteria=time -transfer=binary'
  if ($apenasPrevia) { $sync += ' -preview' }
  $sync += " -filemask=""$mascara"" ""$raizProjeto"" ""$pastaRemota"""

  $script = New-TemporaryFile
  try {
    Set-Content -Path $script.FullName -Encoding UTF8 -Value @(
      'option batch abort',
      'option confirm off',
      $abrir,
      $sync,
      'exit'
    )
    & $winscp /ini=nul /log="$arquivoLog" /script="$($script.FullName)" | Out-Host
    return $LASTEXITCODE
  }
  finally {
    Remove-Item $script.FullName -Force -ErrorAction SilentlyContinue
  }
}

# ── Execução ───────────────────────────────────────────────
if (-not $Confirmar) {
  Write-Host "Prévia: arquivos que seriam enviados para $($cfg['Host'])$pastaRemota" -ForegroundColor Cyan
  $codigo = Invoke-Sincronizacao $true
  if ($codigo -ne 0) { throw "Falha na prévia (código $codigo). Veja $arquivoLog" }

  if ($Preview) { exit 0 }

  $resposta = Read-Host "Publicar agora? (s/N)"
  if ($resposta -notmatch '^(s|sim)$') {
    Write-Host "Publicação cancelada."
    exit 0
  }
}

Write-Host "Publicando..." -ForegroundColor Cyan
$codigo = Invoke-Sincronizacao $false
if ($codigo -ne 0) { throw "Falha na publicação (código $codigo). Veja $arquivoLog" }
Write-Host "Publicação concluída." -ForegroundColor Green
