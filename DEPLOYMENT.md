# 🚀 Deployment Guide - Chanchal Beauty Parlour Website

## 📋 Table of Contents
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [GitHub Setup](#github-setup)
- [Vercel Deployment](#vercel-deployment)
- [Live Link](#live-link)

---

## 📁 Project Structure

```
chanchal-beauty-parlour/
├── images/                      # All image assets
│   ├── hero_background.jpg
│   ├── beautician_service.jpg
│   ├── makeup (6 images)
│   ├── mehndi (6 images)
│   └── nail_art (6 images)
├── index.html                   # Main HTML file
├── style.css                    # Stylesheet (responsive)
├── script.js                    # JavaScript functionality
├── vercel.json                  # Vercel configuration
├── .gitignore                   # Git ignore rules
├── README.md                    # Project documentation
└── DEPLOYMENT.md               # This file
```

---

## ✅ Prerequisites

Before deploying, ensure you have:

- [x] Git installed on your computer
- [x] GitHub account created
- [x] Vercel account (sign up at https://vercel.com)
- [x] All images in the `images/` folder

---

## 📤 GitHub Setup

### Step 1: Initialize Git Repository

```bash
# Navigate to project folder
cd "d:\parlour website"

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Chanchal Beauty Parlour website"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `chanchal-beauty-parlour`
3. Description: "Professional beauty parlour website featuring bridal mehndi, nail art, and makeup services"
4. Choose: **Public**
5. Don't initialize with README (we already have one)
6. Click **Create repository**

### Step 3: Push to GitHub

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/chanchal-beauty-parlour.git

# Push code
git branch -M main
git push -u origin main
```

---

## 🌐 Vercel Deployment

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. Go to https://vercel.com/login
2. Sign in with GitHub
3. Click **Add New** → **Project**
4. Import your `chanchal-beauty-parlour` repository
5. Configure:
   - **Framework Preset:** Other
   - **Root Directory:** ./
   - **Build Command:** (leave empty)
   - **Output Directory:** (leave empty)
6. Click **Deploy**
7. Wait 30-60 seconds
8. Your site is live! 🎉

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 🔗 Live Link

After deployment, you'll get a URL like:

```
https://chanchal-beauty-parlour.vercel.app
```

Or custom domain:
```
https://yoursite.com
```

### Custom Domain Setup (Optional)

1. Go to Vercel Dashboard → Your Project
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

---

## 📱 Mobile Responsiveness

✅ This website is **fully mobile responsive** with breakpoints:

- **Desktop:** 1920px - 1024px
- **Tablet:** 1024px - 768px
- **Mobile:** 768px - 576px
- **Small Mobile:** 576px - 320px

Tested on:
- ✅ iPhone (Safari)
- ✅ Android (Chrome)
- ✅ iPad
- ✅ Desktop browsers (Chrome, Firefox, Safari, Edge)

---

## 🔧 Configuration Files

### vercel.json
- Configures static file serving
- Sets caching headers
- Optimizes performance

### .gitignore
- Excludes unnecessary files from Git
- Keeps repository clean
- Protects sensitive data

---

## 🎯 Features

- ✨ Modern responsive design
- 📱 Mobile-first approach
- 🎨 Pink tulip theme
- 💬 WhatsApp integration
- 📞 Click-to-call functionality
- 📧 Contact form
- 🖼️ Image gallery with filters
- ⭐ Customer testimonials slider
- 🔄 Smooth animations (AOS)

---

## 🐛 Troubleshooting

### Images Not Loading
- Check image paths in `index.html` and `style.css`
- Ensure all images are in `images/` folder
- Verify file extensions (jpg, jpeg, webp)

### WhatsApp Link Not Working
- Verify WhatsApp QR link is correct
- Test on mobile device
- Check for typos in URL

### Mobile Menu Not Working
- Clear browser cache
- Check `script.js` is loaded
- Open browser console for errors

---

## 📊 Performance Tips

1. **Optimize Images:**
   ```bash
   # Use online tools like:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   ```

2. **Enable Caching:**
   - Already configured in `vercel.json`

3. **Monitor Performance:**
   - Use Google PageSpeed Insights
   - Check Vercel Analytics

---

## 🔄 Updating Your Site

After making changes:

```bash
# Stage changes
git add .

# Commit with message
git commit -m "Updated services section"

# Push to GitHub
git push origin main
```

Vercel will **automatically redeploy** when you push to GitHub! 🚀

---

## 📞 Support

For issues or questions:
- Phone: +91 73783 46403
- Location: Navjeevan, Vasai(E)
- WhatsApp: https://wa.me/qr/TPUXEUKTXIU6D1

---

## 📝 License

This project is created for Chanchal Beauty Parlour.

---

**Last Updated:** November 2026  
**Version:** 1.0.0  
**Status:** ✅ Production Ready
