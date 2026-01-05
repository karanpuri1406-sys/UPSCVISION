# UPSC Vision Prep - Official Website

![UPSC Vision Prep](static/images/hero-illustration.svg)

> **Master the Art of Civil Services** - India's leading UPSC CSE preparation platform with expert faculty, comprehensive study materials, and adaptive testing.

---

## 🎯 Project Overview

This is a complete static website for **upscvisionpreponline.com** built with **Hugo** static site generator and integrated with **Decap CMS** (formerly Netlify CMS) for easy content management, specifically focused on blog post management.

### ✨ Key Features

- ✅ **Fully Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Decap CMS Integration** - Manage blog posts, courses, testimonials, and resources through an intuitive admin panel
- ✅ **Modern UI/UX** - Clean, professional design matching the provided mockups
- ✅ **SEO Optimized** - Meta tags, Open Graph, and Twitter cards
- ✅ **Performance Optimized** - Fast loading, lazy loading images, minified assets
- ✅ **Accessible** - WCAG compliant, semantic HTML
- ✅ **Content-Rich** - Pre-populated with sample blog posts, courses, testimonials, and resources

---

## 📁 Project Structure

```
upsc-vision-prep/
├── config.toml                 # Hugo site configuration
├── content/                    # All content files
│   ├── blog/                   # Blog posts (managed by CMS)
│   ├── courses/                # Course pages (managed by CMS)
│   ├── resources/              # Study resources (managed by CMS)
│   ├── testimonials/           # Student testimonials (managed by CMS)
│   ├── about.md                # About page
│   └── contact.md              # Contact page
├── data/
│   └── homepage.yml            # Homepage content (editable via CMS)
├── layouts/                    # Hugo templates
│   ├── _default/
│   │   ├── baseof.html         # Base template
│   │   └── single.html         # Single page template
│   ├── blog/
│   │   ├── list.html           # Blog listing page
│   │   └── single.html         # Single blog post
│   ├── courses/
│   │   ├── list.html           # Courses listing
│   │   └── single.html         # Single course details
│   ├── resources/
│   │   └── list.html           # Resources page
│   ├── partials/
│   │   ├── header.html         # Site header
│   │   └── footer.html         # Site footer
│   └── index.html              # Homepage template
├── static/                     # Static assets
│   ├── admin/
│   │   ├── index.html          # Decap CMS admin panel
│   │   └── config.yml          # CMS configuration
│   ├── css/
│   │   └── style.css           # Main stylesheet
│   ├── js/
│   │   └── main.js             # JavaScript functionality
│   ├── images/                 # Images and graphics
│   └── uploads/                # CMS uploaded media
└── README.md                   # This file
```

---

## 🚀 Quick Start

### Prerequisites

- **Hugo Extended** (v0.115.0 or later)
- **Git** (for version control)
- **Node.js** (optional, for local CMS testing)

### Installation

1. **Install Hugo**

```bash
# macOS
brew install hugo

# Windows (using Chocolatey)
choco install hugo-extended

# Linux
snap install hugo
```

2. **Clone/Download the project**

```bash
# If you have the project in a git repository
git clone <repository-url>
cd upsc-vision-prep

# Or simply extract the zip file
```

3. **Run the development server**

```bash
hugo server -D
```

4. **Open your browser**

Visit `http://localhost:1313` to see your website!

---

## 🎨 Website Structure

### Pages

| Page | URL | Description |
|------|-----|-------------|
| **Homepage** | `/` | Hero section, stats, features, courses, testimonials, CTA |
| **Blog** | `/blog/` | All blog posts with category filtering |
| **Single Blog** | `/blog/[slug]/` | Individual blog post detail |
| **Courses** | `/courses/` | All available courses |
| **Course Detail** | `/courses/[slug]/` | Individual course information |
| **Study Resources** | `/resources/` | Study materials and resources |
| **About** | `/about/` | About UPSC Vision Prep |
| **Contact** | `/contact/` | Contact form and information |
| **Admin Panel** | `/admin/` | Content management (hidden from public) |

### Content Types

#### Blog Posts
- Daily news analysis
- Exam strategies
- Subject-specific guides
- Success stories
- Study tips

#### Courses
- GS Foundation
- Optional Subjects
- Test Series
- Interview Preparation
- Current Affairs

#### Resources
- Daily News Analysis
- NCERT Notes
- Practice Tests
- Answer Writing
- Previous Papers
- Short Films

#### Testimonials
- Student success stories
- Rankings and achievements
- Review text and ratings

---

## 📝 Content Management with Decap CMS

### Accessing the Admin Panel

**IMPORTANT**: The admin panel at `/admin` is **hidden from the public**. There are NO visible links to it on the website.

**To access:**
1. Navigate to: `https://upscvisionpreponline.com/admin` (or `http://localhost:1313/admin` in development)
2. Log in with your credentials (after setting up authentication)

### CMS Features

#### Blog Management
- ✍️ Create new blog posts with rich text editor
- 📷 Upload featured images
- 🏷️ Assign categories and tags
- 📅 Schedule publication dates
- 👁️ Preview before publishing
- 💾 Save as draft or publish immediately

#### Course Management
- 📚 Add/edit course details
- 💰 Set pricing
- 📝 Create curriculum modules
- ⭐ Mark as featured
- 📊 Set order for display

#### Resource Management
- 📑 Add study materials
- 🔗 External links or PDF uploads
- 🎨 Icon color selection
- 📍 Featured resources

#### Testimonials
- 👤 Student information
- 🌟 Star ratings
- 🏆 Rank achieved
- 📸 Photo uploads

---

## 🔧 Deployment Guide

### Deploy to Netlify (Recommended)

**Why Netlify?**
- ✅ Free hosting for static sites
- ✅ Built-in support for Decap CMS
- ✅ Automatic Git Gateway for authentication
- ✅ Free SSL certificate
- ✅ Custom domain support (upscvisionpreponline.com)
- ✅ Continuous deployment from Git

#### Step 1: Prepare Your Repository

1. **Create a GitHub account** (if you don't have one):
   - Go to https://github.com
   - Sign up for free

2. **Create a new repository**:
   - Click "New repository"
   - Name: `upsc-vision-prep`
   - Keep it private or public (your choice)
   - Don't initialize with README (we already have one)

3. **Upload your project to GitHub**:

```bash
# In your project folder
git init
git add .
git commit -m "Initial commit - UPSC Vision Prep website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/upsc-vision-prep.git
git push -u origin main
```

#### Step 2: Deploy to Netlify

1. **Sign up for Netlify**:
   - Go to https://netlify.com
   - Sign up using your GitHub account (easiest way)

2. **Create a new site**:
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your `upsc-vision-prep` repository

3. **Configure build settings**:
   ```
   Build command: hugo
   Publish directory: public
   ```

4. **Deploy**:
   - Click "Deploy site"
   - Wait 2-3 minutes for the build to complete
   - Your site is now live!

#### Step 3: Setup Custom Domain

1. **In Netlify dashboard**:
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter: `upscvisionpreponline.com`

2. **Configure DNS** (at your domain registrar - 10Web):
   - Add a CNAME record:
     - Type: `CNAME`
     - Name: `www`
     - Value: `your-site.netlify.app`
   - Add an A record:
     - Type: `A`
     - Name: `@`
     - Value: `75.2.60.5` (Netlify's load balancer)

3. **Enable HTTPS**:
   - Netlify automatically provisions SSL certificate
   - Wait 24 hours for DNS propagation

#### Step 4: Setup Decap CMS Authentication

**Enable Git Gateway** (allows CMS to save content to GitHub):

1. **In Netlify dashboard**:
   - Go to "Site settings" → "Identity"
   - Click "Enable Identity"

2. **Configure Git Gateway**:
   - Scroll down to "Services" → "Git Gateway"
   - Click "Enable Git Gateway"

3. **Enable Identity**:
   - Go to "Settings" → "Identity"
   - Set "Registration preferences" to "Invite only"
   - Enable "Git Gateway"

4. **Invite yourself as user**:
   - Go to "Identity" tab
   - Click "Invite users"
   - Enter your email
   - Check email and accept invitation
   - Set your password

#### Step 5: Access Your CMS

1. Go to `https://upscvisionpreponline.com/admin`
2. Log in with the email and password you set
3. Start managing your content!

---

## 🎉 Using the CMS

### Creating a New Blog Post

1. Go to `/admin`
2. Click "Blog Posts" in the left sidebar
3. Click "New Blog Posts"
4. Fill in the form:
   - **Title**: Your blog post title
   - **Slug**: Auto-generated or customize (used in URL)
   - **Publish Date**: When to publish
   - **Author**: Your name
   - **Featured Image**: Upload an image
   - **Category**: Select from dropdown
   - **Excerpt**: Short description (150-200 chars)
   - **Body**: Write your article (supports Markdown)
   - **SEO Title & Description**: For search engines
   - **Tags**: Add relevant tags
   - **Featured**: Check to show on homepage
   - **Draft**: Keep unchecked to publish immediately

5. Click "Publish" or "Save as Draft"
6. The post appears on your blog within seconds!

### Editing Existing Content

1. Go to `/admin`
2. Select the content type (Blog, Courses, etc.)
3. Click on the item you want to edit
4. Make your changes
5. Click "Publish" to update

### Deleting Content

1. Open the item in CMS
2. Click "Delete" button
3. Confirm deletion

### Uploading Images

**Method 1: Through CMS**
- While creating/editing content
- Click image upload field
- Upload from computer
- Images saved to `/static/uploads/`

**Method 2: Direct Upload**
- Add images to `/static/uploads/` folder
- Reference them in content: `/uploads/your-image.jpg`

---

## 🎨 Customization Guide

### Changing Colors

Edit `static/css/style.css`:

```css
:root {
  --primary-navy: #1a1f3a;      /* Dark sections */
  --primary-blue: #2B7FFF;       /* Buttons, links */
  --orange-accent: #FF8C42;      /* Accent color */
  --green-accent: #10B981;       /* Success color */
  /* ... modify as needed */
}
```

### Updating Homepage Content

Edit `data/homepage.yml`:

```yaml
hero:
  heading: "Your New Heading"
  subheading: "Your new description"
  cta_primary: "Button Text"
  cta_primary_link: "/your-link/"
```

Or use the CMS:
1. Go to `/admin`
2. Click "Site Pages" → "Homepage Settings"
3. Edit and save

### Modifying Navigation

Edit `config.toml`:

```toml
[menu]
  [[menu.main]]
    name = "New Page"
    url = "/new-page/"
    weight = 7
```

### Adding New Fonts

Edit `layouts/_default/baseof.html`:

```html
<!-- Add in <head> section -->
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
```

Then update CSS:

```css
body {
  font-family: 'Your Font', sans-serif;
}
```

---

## 📱 Responsive Design

The website is fully responsive and works perfectly on:

- 📱 **Mobile** (320px - 767px)
- 📱 **Tablet** (768px - 1024px)
- 💻 **Desktop** (1025px+)
- 🖥️ **Large Desktop** (1400px+)

Test responsiveness:
1. Open browser DevTools (F12)
2. Toggle device toolbar
3. Test different screen sizes

---

## 🔍 SEO Optimization

### Built-in SEO Features

✅ **Meta Tags**: Title, description for all pages
✅ **Open Graph**: Social media sharing optimization
✅ **Twitter Cards**: Twitter sharing previews
✅ **Semantic HTML**: Proper heading hierarchy
✅ **Alt Text**: All images have descriptive alt text
✅ **Sitemap**: Auto-generated at `/sitemap.xml`
✅ **Robots.txt**: Search engine crawling instructions

### Adding SEO for Blog Posts

When creating blog posts in CMS:
- Fill "SEO Title" (50-60 characters)
- Fill "SEO Description" (150-160 characters)
- Use relevant keywords naturally
- Add descriptive alt text to images

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Hugo server not starting

**Error**: `command not found: hugo`

**Solution**:
```bash
# Reinstall Hugo
brew install hugo  # macOS
```

#### 2. CSS not loading

**Solution**:
```bash
# Clear Hugo cache
hugo --gc
hugo server -D
```

#### 3. CMS not loading

**Solution**:
- Check `/admin/index.html` exists
- Check `/admin/config.yml` exists
- Verify internet connection (CMS loads from CDN)
- Check browser console for errors (F12)

#### 4. CMS authentication failing

**Solution**:
- Ensure Git Gateway is enabled in Netlify
- Check Identity service is active
- Verify user invitation was accepted
- Try logging out and back in

#### 5. Changes not appearing on live site

**Solution**:
- Check Netlify deploy status
- Verify Git commit was pushed
- Clear browser cache (Ctrl+Shift+R)
- Wait for build to complete (2-3 minutes)

#### 6. Images not displaying

**Solution**:
- Check image path: `/uploads/your-image.jpg`
- Verify image uploaded to correct folder
- Check file permissions
- Ensure image file size < 10MB

---

## 📊 Analytics Setup (Optional)

### Google Analytics

1. **Get tracking ID**:
   - Go to https://analytics.google.com
   - Create property
   - Get tracking ID (G-XXXXXXXXXX)

2. **Add to site**:

Edit `layouts/_default/baseof.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔒 Security Best Practices

✅ **CMS Access Control**: Admin panel is hidden, invite-only
✅ **HTTPS Enabled**: SSL certificate through Netlify
✅ **Git Gateway**: Secure authentication
✅ **Content Sanitization**: Markdown prevents XSS attacks
✅ **Regular Updates**: Keep Hugo and dependencies updated

---

## 📚 Additional Resources

### Hugo Documentation
- Official Docs: https://gohugo.io/documentation/
- Hugo Templates: https://gohugo.io/templates/
- Hugo Content: https://gohugo.io/content-management/

### Decap CMS Documentation
- Official Docs: https://decapcms.org/docs/
- Widgets: https://decapcms.org/docs/widgets/
- Configuration: https://decapcms.org/docs/configuration-options/

### Netlify Documentation
- Netlify Docs: https://docs.netlify.com/
- Git Gateway: https://docs.netlify.com/visitor-access/git-gateway/
- Identity: https://docs.netlify.com/visitor-access/identity/

---

## 🎯 Next Steps & Recommendations

### Immediate Next Steps

1. ✅ **Deploy to Netlify** following the guide above
2. ✅ **Set up custom domain** (upscvisionpreponline.com)
3. ✅ **Configure CMS authentication** (Git Gateway + Identity)
4. ✅ **Create your first blog post** through CMS
5. ✅ **Update homepage content** with actual information
6. ✅ **Replace placeholder images** with real photos

### Content Strategy

**Week 1-2: Foundation**
- Replace all placeholder text with actual content
- Upload real course thumbnails and pricing
- Add genuine testimonials
- Update About page with actual information

**Week 3-4: Content Creation**
- Publish 3-5 high-quality blog posts per week
- Create detailed course descriptions
- Add study resources and materials
- Collect and add student testimonials

**Month 2+: Growth**
- Regular blog updates (daily/weekly)
- Add new courses as developed
- Update current affairs resources
- Expand study materials

### Feature Enhancements

**Phase 1** (Completed ✅):
- Responsive website
- Decap CMS integration
- Blog management
- Course showcase
- Contact form

**Phase 2** (Future):
- User registration and login
- Payment gateway integration
- Video course hosting
- Progress tracking dashboard
- Discussion forums

**Phase 3** (Future):
- Mobile app
- Live classes integration
- AI-powered test analysis
- Personalized study plans
- Community features

### Marketing Integration

**Email Marketing**:
- Integrate newsletter form with Mailchimp/ConvertKit
- Collect email addresses from homepage
- Send weekly updates

**Social Media**:
- Add social sharing buttons to blog posts
- Auto-post new blogs to social media
- Embed social media feeds

**Analytics**:
- Set up Google Analytics
- Track user behavior
- Monitor popular content
- A/B test headlines

---

## 💬 Support & Contact

### Need Help?

**Technical Issues**:
- Hugo: https://discourse.gohugo.io/
- Decap CMS: https://github.com/decaporg/decap-cms/discussions
- Netlify: https://answers.netlify.com/

**Website Contact**:
- Email: info@upscvisionpreponline.com
- Phone: +91 98765 43210

---

## 📄 License & Credits

### Credits
- **Design**: Based on provided mockups
- **Built with**: Hugo Static Site Generator
- **CMS**: Decap CMS (Netlify CMS)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)

### Content
- All placeholder content is fictional and for demonstration purposes
- Replace with actual content before going live
- Images should be replaced with licensed or original photos

---

## ✨ Features Summary

| Feature | Status | Description |
|---------|--------|-------------|
| **Responsive Design** | ✅ Complete | Works on all devices |
| **Decap CMS** | ✅ Complete | Full content management |
| **Blog System** | ✅ Complete | Create, edit, delete posts |
| **Course Management** | ✅ Complete | Showcase courses |
| **Resources Section** | ✅ Complete | Study materials |
| **Testimonials** | ✅ Complete | Student success stories |
| **SEO Optimized** | ✅ Complete | Meta tags, Open Graph |
| **Mobile Menu** | ✅ Complete | Hamburger navigation |
| **Search** | ✅ Complete | Client-side search |
| **Contact Form** | ✅ Complete | With validation |
| **Newsletter** | ✅ Complete | Email signup |
| **Analytics Ready** | ⚠️ Setup needed | Google Analytics |
| **Payment Integration** | ⏳ Future | Course enrollment |
| **User Dashboard** | ⏳ Future | Student portal |

---

## 🎊 Congratulations!

You now have a **production-ready UPSC preparation website** with:

✅ Beautiful, modern design
✅ Fully functional CMS for blog management
✅ Responsive across all devices
✅ SEO optimized
✅ Fast and secure
✅ Easy to maintain and update
✅ Professional content structure

### Ready to Launch?

Follow the deployment guide above and your website will be live in under an hour!

**Your journey to helping UPSC aspirants succeed starts now!** 🚀

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Status**: Production Ready ✅
