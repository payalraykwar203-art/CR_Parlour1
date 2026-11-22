# 📤 GitHub Setup Guide - Step by Step

Follow these exact steps to push your project to GitHub.

---

## ✅ Step 1: Check Git Installation

Open PowerShell and run:

```powershell
git --version
```

If you see an error, [install Git](https://git-scm.com/download/win).

---

## 📝 Step 2: Configure Git (First Time Only)

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## 🆕 Step 3: Create GitHub Repository

1. Go to: https://github.com/new
2. Fill in:
   - **Repository name:** `chanchal-beauty-parlour`
   - **Description:** `Professional beauty parlour website`
   - **Visibility:** Public
   - **DON'T** check "Initialize with README"
3. Click **"Create repository"**
4. **Keep this page open** - you'll need it!

---

## 💻 Step 4: Initialize Git in Your Project

Open PowerShell and run these commands **one by one**:

```powershell
# Navigate to your project
cd "d:\parlour website"

# Initialize git repository
git init

# Check status
git status
```

You should see a list of untracked files in red.

---

## 📦 Step 5: Stage All Files

```powershell
# Add all files to staging
git add .

# Verify files are staged
git status
```

Now the files should appear in green.

---

## 💾 Step 6: Create First Commit

```powershell
git commit -m "Initial commit: Chanchal Beauty Parlour website"
```

---

## 🔗 Step 7: Connect to GitHub

**IMPORTANT:** Replace `YOUR_USERNAME` with your actual GitHub username!

```powershell
git remote add origin https://github.com/YOUR_USERNAME/chanchal-beauty-parlour.git

# Verify remote
git remote -v
```

---

## 🚀 Step 8: Push to GitHub

```powershell
# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**If prompted for credentials:**
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your password!)

### 🔑 How to Create Personal Access Token:

1. Go to: https://github.com/settings/tokens
2. Click: **Generate new token (classic)**
3. Name: `Parlour Website`
4. Select scopes: ✅ **repo** (full access)
5. Click: **Generate token**
6. **Copy the token** (you won't see it again!)
7. Use this token as your password

---

## ✅ Step 9: Verify Upload

1. Go to your GitHub repository page
2. Refresh the page
3. You should see all your files!

---

## 🎉 Success!

Your project is now on GitHub! The URL will be:
```
https://github.com/YOUR_USERNAME/chanchal-beauty-parlour
```

---

## 🔄 Making Updates Later

When you make changes to your files:

```powershell
# Check what changed
git status

# Add changes
git add .

# Commit with a message
git commit -m "Updated contact information"

# Push to GitHub
git push origin main
```

---

## ❌ Troubleshooting

### Problem: "git: command not found"
**Solution:** Install Git from https://git-scm.com/download/win

### Problem: "Permission denied"
**Solution:** Use a Personal Access Token instead of password

### Problem: "Remote already exists"
**Solution:** 
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/chanchal-beauty-parlour.git
```

### Problem: "Failed to push"
**Solution:**
```powershell
git pull origin main --rebase
git push origin main
```

---

## 📞 Need Help?

- GitHub Docs: https://docs.github.com
- Git Tutorial: https://git-scm.com/docs/gittutorial

---

**Next Step:** See `DEPLOYMENT.md` for Vercel deployment! 🚀
