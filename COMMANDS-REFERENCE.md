# 🎮 Quick Commands Reference

## Essential Hugo Commands

### Development
```bash
# Start development server
hugo server -D

# Start with custom port
hugo server -D -p 8080

# Start with bind to all interfaces (for mobile testing)
hugo server -D --bind=0.0.0.0

# Start with custom base URL
hugo server -D --baseURL=http://192.168.1.100:1313/
```

### Building
```bash
# Build production site
hugo

# Build with minification
hugo --minify

# Build with garbage collection
hugo --gc

# Full production build
hugo --gc --minify
```

### Content Management
```bash
# Create new blog post
hugo new content/blog/my-post.md

# Create new course
hugo new content/courses/my-course.md

# Create new resource
hugo new content/resources/my-resource.md
```

### Maintenance
```bash
# Clean generated files
hugo --gc

# Check Hugo version
hugo version

# Get help
hugo help
```

---

## Git Commands

### Initial Setup
```bash
# Initialize repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Rename branch to main
git branch -M main

# Add remote repository
git remote add origin https://github.com/USERNAME/REPO.git

# Push to GitHub
git push -u origin main
```

### Regular Updates
```bash
# Check status
git status

# Add new/modified files
git add .

# Commit with message
git commit -m "Update: description of changes"

# Push to GitHub
git push

# Pull latest changes
git pull
```

### Branch Management
```bash
# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Merge branch
git merge feature-name

# Delete branch
git branch -d feature-name
```

---

## Netlify CLI Commands (Optional)

### Installation
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login
```

### Deployment
```bash
# Deploy to Netlify
netlify deploy

# Deploy to production
netlify deploy --prod

# Open site in browser
netlify open

# Check deploy status
netlify status
```

---

## File Operations

### Navigate Folders
```bash
# Change directory
cd upsc-vision-prep

# Go to parent directory
cd ..

# Go to home directory
cd ~

# List files
ls -la

# Current directory path
pwd
```

### File Management
```bash
# Create file
touch filename.md

# Create directory
mkdir foldername

# Remove file
rm filename

# Remove directory
rm -rf foldername

# Copy file
cp source.md destination.md

# Move/rename file
mv oldname.md newname.md
```

---

## CMS Management

### Access URLs
```bash
# Local CMS (interface only, can't save)
http://localhost:1313/admin

# Live CMS (after Netlify deployment)
https://upscvisionpreponline.com/admin
https://your-site.netlify.app/admin
```

### CMS Actions
No command line needed! Use the web interface:
- Create: Click "New [Content Type]"
- Edit: Click on existing item
- Delete: Open item → Click "Delete"
- Publish: Click "Publish" button
- Save Draft: Click "Save"

---

## Testing Commands

### Browser DevTools
```
F12                 - Open DevTools
Ctrl + Shift + C    - Inspect element
Ctrl + Shift + R    - Hard refresh (clear cache)
Ctrl + Shift + I    - Open DevTools (alternative)
```

### Mobile Testing
```bash
# Find your local IP (macOS/Linux)
ifconfig | grep "inet "

# Find your local IP (Windows)
ipconfig

# Then start Hugo with your IP
hugo server -D --bind=0.0.0.0 --baseURL=http://YOUR-IP:1313/

# Access from mobile browser
http://YOUR-IP:1313
```

---

## Netlify Identity (CMS Auth)

### Email Invitation
```
1. Netlify Dashboard → Identity
2. Click "Invite users"
3. Enter email address
4. User receives email
5. User sets password
6. User can login to /admin
```

### Reset Password
```
1. Go to /admin
2. Click "Forgot password?"
3. Enter email
4. Check email for reset link
5. Set new password
```

---

## Troubleshooting Commands

### Clear Hugo Cache
```bash
hugo --gc
rm -rf public/
rm -rf resources/
hugo server -D
```

### Reset Git
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Force push (use carefully!)
git push --force
```

### Fix Broken Deployment
```bash
# Check Netlify logs
netlify logs

# Redeploy
git commit --allow-empty -m "Trigger rebuild"
git push
```

---

## Common Workflows

### Add New Blog Post
```bash
# Method 1: Via CMS (Recommended)
# Go to /admin → Blog Posts → New Blog Posts

# Method 2: Via Command Line
hugo new content/blog/my-new-post.md
# Edit the file
# git add, commit, push
```

### Update Website Content
```bash
# 1. Edit files locally
# 2. Test changes
hugo server -D

# 3. Commit and push
git add .
git commit -m "Update: homepage content"
git push

# 4. Netlify auto-deploys (2-3 minutes)
```

### Add New Course
```bash
# Via CMS (Easiest)
# /admin → Courses → New Courses

# Or create file
hugo new content/courses/new-course.md
# Edit with course details
```

---

## Keyboard Shortcuts

### VS Code (Recommended Editor)
```
Ctrl + S         - Save file
Ctrl + P         - Quick file open
Ctrl + F         - Find in file
Ctrl + H         - Find and replace
Ctrl + /         - Comment/uncomment
Ctrl + Shift + P - Command palette
Ctrl + `         - Open terminal
```

### Browser (Testing)
```
F5              - Refresh page
Ctrl + Shift + R - Hard refresh
F12             - DevTools
Ctrl + U        - View page source
Ctrl + Shift + I - Inspect element
Ctrl + +        - Zoom in
Ctrl + -        - Zoom out
```

---

## File Paths Quick Reference

### Important Files
```bash
config.toml                          # Site configuration
netlify.toml                         # Netlify settings
data/homepage.yml                    # Homepage content
static/css/style.css                 # Main stylesheet
static/js/main.js                    # JavaScript
static/admin/config.yml              # CMS config
```

### Content Folders
```bash
content/blog/                        # Blog posts
content/courses/                     # Courses
content/resources/                   # Resources
content/testimonials/                # Testimonials
content/about.md                     # About page
content/contact.md                   # Contact page
```

### Layout Templates
```bash
layouts/index.html                   # Homepage
layouts/blog/list.html               # Blog listing
layouts/blog/single.html             # Blog post
layouts/courses/list.html            # Course listing
layouts/courses/single.html          # Course detail
layouts/partials/header.html         # Header
layouts/partials/footer.html         # Footer
```

---

## Environment Variables

### Hugo Environment
```bash
# Set production environment
export HUGO_ENV=production

# Check current environment
echo $HUGO_ENV
```

### Netlify Environment
Set in Netlify Dashboard:
```
Site settings → Build & deploy → Environment
```

---

## Quick Checks

### Is Hugo Working?
```bash
hugo version
# Should show: Hugo Static Site Generator v0.121.0 or later
```

### Is Git Working?
```bash
git --version
# Should show: git version 2.x.x
```

### Are Files Up to Date?
```bash
git status
# Should show: "nothing to commit, working tree clean"
```

### Is Site Building?
```bash
hugo
# Should complete without errors and create /public/ folder
```

---

## Emergency Commands

### Site Won't Build
```bash
hugo --gc
rm -rf public/ resources/
hugo server -D
```

### Git Conflicts
```bash
git stash
git pull
git stash pop
# Resolve conflicts manually
```

### Start Over (Clean Slate)
```bash
rm -rf public/ resources/
hugo --gc
hugo server -D
```

### Nuclear Option (Last Resort)
```bash
# Backup your content first!
git clone <your-repo-url> fresh-copy
cd fresh-copy
hugo server -D
```

---

## Useful Shortcuts

### Create Multiple Files
```bash
# Create several blog posts
for i in {1..5}; do hugo new content/blog/post-$i.md; done
```

### Search Content
```bash
# Find all blog posts with specific word
grep -r "UPSC" content/blog/

# Find and replace in all files
find content/ -name "*.md" -exec sed -i 's/old/new/g' {} +
```

### Check Site Speed
```bash
# Using curl
curl -o /dev/null -s -w "Time: %{time_total}s\n" http://localhost:1313/

# Or use online tool
https://developers.google.com/speed/pagespeed/insights/
```

---

## Pro Tips

### Faster Development
```bash
# Use Hugo's fast render mode
hugo server -D --disableFastRender=false

# Watch specific folder
hugo server -D --watch=content/blog/
```

### Better Git Commits
```bash
# Descriptive commit messages
git commit -m "Add: new blog post about prelims strategy"
git commit -m "Fix: mobile menu not closing on iOS"
git commit -m "Update: course pricing and features"
git commit -m "Improve: homepage loading speed"
```

### Batch Operations
```bash
# Deploy multiple times
for i in {1..3}; do netlify deploy --prod && sleep 60; done
```

---

## Help Commands

```bash
# Hugo help
hugo help
hugo server --help
hugo new --help

# Git help
git help
git commit --help
git push --help

# Netlify CLI help
netlify help
netlify deploy --help
```

---

## 📋 Command Cheat Sheet (Print This!)

```
RUN LOCALLY:      hugo server -D
BUILD:            hugo --gc --minify
GIT ADD:          git add .
GIT COMMIT:       git commit -m "message"
GIT PUSH:         git push
CMS LOCAL:        http://localhost:1313/admin
CMS LIVE:         https://upscvisionpreponline.com/admin
```

---

**Keep this reference handy!** Bookmark or print this page for quick access to commands.

**Most Used Commands:**
1. `hugo server -D` - Run locally
2. `git add . && git commit -m "Update" && git push` - Deploy changes
3. Visit `/admin` - Manage content

**Need more help?** Check `README.md` for detailed explanations!
