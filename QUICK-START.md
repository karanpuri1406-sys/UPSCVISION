# 🚀 Quick Start Guide - UPSC Vision Prep

## 5-Minute Setup

### Step 1: Install Hugo (2 minutes)

**macOS:**
```bash
brew install hugo
```

**Windows:**
```bash
choco install hugo-extended
```

**Linux:**
```bash
snap install hugo
```

### Step 2: Run the Website (1 minute)

```bash
# Navigate to project folder
cd upsc-vision-prep

# Start development server
hugo server -D
```

Open browser: **http://localhost:1313**

✅ Your website is now running!

---

## 📝 CMS Access

### Local Development

**URL**: `http://localhost:1313/admin`

**Note**: Authentication won't work locally. You'll see the CMS interface but can't save changes until deployed to Netlify.

### After Netlify Deployment

**URL**: `https://upscvisionpreponline.com/admin`

**Setup**:
1. Enable Identity in Netlify
2. Enable Git Gateway
3. Invite yourself as user
4. Set password
5. Log in to CMS

---

## ✍️ Add Your First Blog Post

### Using CMS (Recommended)

1. Go to `/admin`
2. Click "Blog Posts"
3. Click "New Blog Posts"
4. Fill in:
   - Title
   - Featured Image
   - Category
   - Excerpt
   - Body (your article)
5. Click "Publish"

### Using Markdown Files

Create `content/blog/my-new-post.md`:

```markdown
---
title: "My New Blog Post"
date: 2025-01-15T10:00:00+05:30
author: "Your Name"
featured_image: "/uploads/image.jpg"
category: "Study Tips"
excerpt: "Short description here"
draft: false
---

# Your content here

Write your blog post content in Markdown format.
```

---

## 🚀 Deploy to Netlify (10 minutes)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/upsc-vision-prep.git
git push -u origin main
```

### 2. Connect to Netlify

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub → Select repository
5. Build settings:
   - Build command: `hugo`
   - Publish directory: `public`
6. Click "Deploy site"

### 3. Setup CMS Authentication

1. In Netlify: "Site settings" → "Identity" → "Enable Identity"
2. "Services" → "Git Gateway" → "Enable Git Gateway"
3. "Identity" tab → "Invite users" → Enter your email
4. Check email → Set password
5. Go to `your-site.netlify.app/admin` → Log in

✅ **Done!** Your site is live with working CMS!

---

## 📱 Test on Mobile

```bash
# Find your local IP
# macOS/Linux
ifconfig | grep "inet "

# Windows
ipconfig

# Run Hugo with your IP
hugo server -D --bind=0.0.0.0 --baseURL=http://YOUR-IP:1313/

# Access from mobile: http://YOUR-IP:1313
```

---

## 🎨 Quick Customizations

### Change Site Title

**File**: `config.toml`
```toml
title = "Your New Title"
```

### Update Homepage Hero

**File**: `data/homepage.yml`
```yaml
hero:
  heading: "Your New Heading"
  subheading: "Your description"
```

### Change Colors

**File**: `static/css/style.css`
```css
:root {
  --primary-blue: #YOUR-COLOR;
}
```

---

## 🐛 Troubleshooting

**Problem**: `hugo: command not found`
```bash
# Reinstall Hugo
brew install hugo  # macOS
```

**Problem**: CSS not loading
```bash
hugo --gc
hugo server -D
```

**Problem**: CMS not loading
- Check internet connection
- Verify `/admin/index.html` exists
- Clear browser cache

---

## 📚 Learn More

**Full documentation**: See `README.md`

**Hugo docs**: https://gohugo.io/documentation/

**Decap CMS docs**: https://decapcms.org/docs/

**Need help?** Email: info@upscvisionpreponline.com

---

## ✅ Checklist

Before going live:

- [ ] Deploy to Netlify
- [ ] Set up custom domain
- [ ] Enable Git Gateway
- [ ] Create admin user
- [ ] Test CMS login
- [ ] Replace placeholder images
- [ ] Update About page content
- [ ] Add real course information
- [ ] Test on mobile devices
- [ ] Set up Google Analytics
- [ ] Test contact form
- [ ] Add real testimonials

---

**That's it! You're ready to manage your UPSC prep website!** 🎉

**Questions?** Check the full README.md or contact support.
