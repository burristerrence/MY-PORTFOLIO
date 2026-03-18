# Copy your IATF Youth Clubs photo into public as iatf-youth-clubs.jpg
# 1. Edit the path below to point to your .jpg image
# 2. Run in terminal:  cd "MY PORTFOLIO\public" ; .\copy-iatf-photo.ps1

$source = "C:\Users\burri\OneDrive\Pictures\Pictures\Saved Pictures\YOUR-PHOTO.jpg"   # <-- Change to your image path
$dest   = Join-Path $PSScriptRoot "iatf-youth-clubs.jpg"

if (Test-Path $source) {
    Copy-Item $source $dest -Force
    Write-Host "Done. Copied to: $dest" -ForegroundColor Green
} else {
    Write-Host "File not found: $source" -ForegroundColor Red
    Write-Host "Edit this script and set `$source to your image path."
}
