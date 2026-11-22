# Chanchal Beauty Parlour - GitHub Deployment Script
# Run this in PowerShell: .\deploy.ps1

Write-Host "`n🌸 Chanchal Beauty Parlour - GitHub Deployment" -ForegroundColor Magenta
Write-Host "============================================`n" -ForegroundColor Magenta

# Check if Git is installed
Write-Host "✓ Checking Git installation..." -ForegroundColor Cyan
if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git is not installed!" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}
Write-Host "✓ Git is installed`n" -ForegroundColor Green

# Check if this is a git repository
if (!(Test-Path ".git")) {
    Write-Host "📦 Initializing Git repository..." -ForegroundColor Cyan
    git init
    Write-Host "✓ Git repository initialized`n" -ForegroundColor Green
}

# Get GitHub username
Write-Host "Enter your GitHub username: " -ForegroundColor Yellow -NoNewline
$username = Read-Host

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "❌ Username cannot be empty!" -ForegroundColor Red
    exit 1
}

# Update package.json with username
Write-Host "`n📝 Updating package.json..." -ForegroundColor Cyan
$packageJson = Get-Content "package.json" -Raw
$packageJson = $packageJson -replace "YOUR_USERNAME", $username
$packageJson | Set-Content "package.json" -NoNewline

# Update README.md with username
Write-Host "📝 Updating README.md..." -ForegroundColor Cyan
$readme = Get-Content "README.md" -Raw
$readme = $readme -replace "YOUR_USERNAME", $username
$readme | Set-Content "README.md" -NoNewline

Write-Host "✓ Files updated`n" -ForegroundColor Green

# Check git status
Write-Host "📊 Checking file status..." -ForegroundColor Cyan
git status --short

# Add all files
Write-Host "`n📦 Adding files to Git..." -ForegroundColor Cyan
git add .
Write-Host "✓ Files added`n" -ForegroundColor Green

# Get commit message
Write-Host "Enter commit message (or press Enter for default): " -ForegroundColor Yellow -NoNewline
$commitMsg = Read-Host

if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $commitMsg = "Initial commit: Chanchal Beauty Parlour website"
}

# Commit
Write-Host "`n💾 Creating commit..." -ForegroundColor Cyan
git commit -m "$commitMsg"
Write-Host "✓ Commit created`n" -ForegroundColor Green

# Check if remote exists
$remoteExists = git remote | Select-String "origin"

if ($remoteExists) {
    Write-Host "⚠️  Remote 'origin' already exists" -ForegroundColor Yellow
    Write-Host "Do you want to update it? (Y/N): " -ForegroundColor Yellow -NoNewline
    $updateRemote = Read-Host
    
    if ($updateRemote -eq "Y" -or $updateRemote -eq "y") {
        git remote remove origin
        git remote add origin "https://github.com/$username/chanchal-beauty-parlour.git"
        Write-Host "✓ Remote updated`n" -ForegroundColor Green
    }
} else {
    Write-Host "🔗 Adding remote repository..." -ForegroundColor Cyan
    git remote add origin "https://github.com/$username/chanchal-beauty-parlour.git"
    Write-Host "✓ Remote added`n" -ForegroundColor Green
}

# Rename branch to main
Write-Host "🔀 Setting main branch..." -ForegroundColor Cyan
git branch -M main
Write-Host "✓ Branch set to main`n" -ForegroundColor Green

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Cyan
Write-Host "⚠️  You may be prompted for credentials:" -ForegroundColor Yellow
Write-Host "   Username: $username" -ForegroundColor Gray
Write-Host "   Password: Use Personal Access Token (not password!)`n" -ForegroundColor Gray

$pushResult = git push -u origin main 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ SUCCESS! Your website is now on GitHub!" -ForegroundColor Green
    Write-Host "`n📍 Repository URL:" -ForegroundColor Cyan
    Write-Host "   https://github.com/$username/chanchal-beauty-parlour`n" -ForegroundColor White
    
    Write-Host "🎯 Next Steps:" -ForegroundColor Magenta
    Write-Host "   1. Visit your GitHub repository" -ForegroundColor White
    Write-Host "   2. Follow DEPLOYMENT.md to deploy on Vercel" -ForegroundColor White
    Write-Host "   3. Your live site will be ready in minutes!`n" -ForegroundColor White
} else {
    Write-Host "`n❌ Push failed!" -ForegroundColor Red
    Write-Host "Error: $pushResult`n" -ForegroundColor Red
    Write-Host "💡 Troubleshooting:" -ForegroundColor Yellow
    Write-Host "   1. Make sure you created the repository on GitHub" -ForegroundColor White
    Write-Host "   2. Use Personal Access Token, not password" -ForegroundColor White
    Write-Host "   3. Check: https://github.com/settings/tokens`n" -ForegroundColor White
}

Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
