# ⚡ Quick Start Guide

Get your website live in **3 easy steps**!

---

## 🎯 Method 1: Automated Deployment (Easiest!)

### Step 1: Run Deployment Script

Open PowerShell in your project folder and run:

```powershell
.\deploy.ps1
```

The script will:
- ✅ Initialize Git
- ✅ Add all files
- ✅ Commit changes
- ✅ Push to GitHub

**Just enter your GitHub username when prompted!**

---

### Step 2: Create GitHub Repository

Before running the script, create a repository:

1. Go to: https://github.com/new
2. Name: `chanchal-beauty-parlour`
3. Public repository
4. **Don't** initialize with README
5. Click "Create repository"

---

### Step 3: Deploy on Vercel

1. Go to: https://vercel.com/new
2. Sign in with GitHub
3. Import `chanchal-beauty-parlour`
4. Click "Deploy"
5. Done! Your site is live! 🎉

---

## 📋 Method 2: Manual Deployment

If the script doesn't work, follow these steps:

### 1. Initialize Git
```powershell
git init
git add .
git commit -m "Initial commit"
```

### 2. Push to GitHub
```powershell
git remote add origin https://github.com/YOUR_USERNAME/chanchal-beauty-parlour.git
git branch -M main
git push -u origin main
```

### 3. Deploy on Vercel
- Visit https://vercel.com/new
- Import your repository
- Click Deploy

---

## 📱 Mobile Responsive - Already Done! ✅

Your website is **already fully mobile responsive** with:

- ✅ Responsive navigation
- ✅ Mobile-friendly gallery
- ✅ Touch-optimized buttons
- ✅ Optimized images
- ✅ Smooth scrolling
- ✅ Hamburger menu

**Test it:** Just resize your browser or open on mobile!

---

## 🔍 Testing Mobile Responsiveness

### In Browser (Chrome/Edge)
1. Press `F12` (Developer Tools)
2. Press `Ctrl + Shift + M` (Toggle Device Toolbar)
3. Select different devices from dropdown
4. Test all features

### Breakpoints
- 📱 Mobile: 320px - 768px
- 📱 Tablet: 768px - 1024px
- 💻 Desktop: 1024px+

---

## ✅ Pre-Deployment Checklist

Before deploying, verify:

- [ ] All images in `images/` folder
- [ ] Phone number: +91 73783 46403
- [ ] WhatsApp link working
- [ ] Location: Navjeevan, Vasai(E)
- [ ] Business hours updated
- [ ] Social media links added (optional)

---

## 🌐 After Deployment

Your live URL will be:
```
https://chanchal-beauty-parlour.vercel.app
```

Or use custom domain:
```
https://chanchal beautyparlour.com
```

---

## 📞 Support & Help

**For Deployment Issues:**
- GitHub Guide: `GITHUB_SETUP.md`
- Full Documentation: `DEPLOYMENT.md`

**For Code Issues:**
- Check browser console (F12)
- Verify all files are uploaded
- Clear browser cache

**Contact:**
- Phone: +91 73783 46403
- WhatsApp: Click button on website

---

## 🎨 Customization (Optional)

### Change Colors
Edit `style.css` - CSS Variables section:
```css
:root {
    --primary-pink: #FFD1DC;
    --dark-pink: #FF829D;
    /* Modify as needed */
}
```

### Update Images
- Replace images in `images/` folder
- Keep same filenames
- Or update paths in `index.html`

### Modify Content
- Edit `index.html`
- Update services, prices, testimonials
- Change contact information

---

## 🚀 You're Ready!

1. Run `.\deploy.ps1`
2. Deploy on Vercel
3. Share your live link!

**Estimated Time:** 5-10 minutes ⏱️

---

**Good luck! 🌸**
