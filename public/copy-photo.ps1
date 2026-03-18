# Copy your photo into public as police-innovation.png
# 1. Edit the path below to point to your image file
# 2. Run in terminal:  cd "MY PORTFOLIO\public" ; .\copy-photo.ps1

$source = "C:\Users\burri\Pictures\YOUR-PHOTO.png"   # <-- Change this to your image path
$dest   = Join-Path $PSScriptRoot "police-innovation.png"

if (Test-Path $source) {
    Copy-Item $source $dest -Force
    Write-Host "Done. Copied to: $dest" -ForegroundColor Green
} else {
    Write-Host "File not found: $source" -ForegroundColor Red
    Write-Host "Edit this script and set `$source to your image path."
}
