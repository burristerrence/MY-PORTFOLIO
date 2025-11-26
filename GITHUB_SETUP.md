# GitHub Setup Guide

## Step-by-Step Instructions to Push Your Portfolio to GitHub

### Prerequisites
- ✅ Git is installed and configured
- ✅ Your code is committed locally
- ⬜ GitHub account created
- ⬜ GitHub repository created

---

## Step 1: Create a GitHub Account (if you don't have one)

1. Go to https://github.com/signup
2. Fill in your details:
   - Username (choose something professional)
   - Email address
   - Password
3. Verify your email address
4. Complete the setup

---

## Step 2: Create a New Repository on GitHub

1. **Log in to GitHub** at https://github.com
2. Click the **"+" icon** in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `portfolio` (or `my-portfolio`, `terrence-burris-portfolio`, etc.)
   - **Description**: "Professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS"
   - **Visibility**: Choose **Public** (so you can deploy it for free) or **Private**
   - ⚠️ **IMPORTANT**: Do NOT check "Add a README file", "Add .gitignore", or "Choose a license" (we already have these)
5. Click **"Create repository"**

---

## Step 3: Copy Your Repository URL

After creating the repository, GitHub will show you a page with setup instructions. You'll see a URL like:
```
https://github.com/YOUR_USERNAME/portfolio.git
```

**Copy this URL** - you'll need it in the next step!

---

## Step 4: Connect Your Local Repository to GitHub

Open your terminal/PowerShell in the project directory and run:

```bash
# Replace YOUR_USERNAME with your actual GitHub username
# Replace portfolio with your repository name if different
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```

**Example:**
```bash
git remote add origin https://github.com/terrenceburris/portfolio.git
```

---

## Step 5: Rename Branch to Main (GitHub's Default)

```bash
git branch -M main
```

---

## Step 6: Push Your Code to GitHub

```bash
git push -u origin main
```

### Authentication Options:

**Option A: Personal Access Token (Recommended)**
1. When prompted for username: Enter your GitHub username
2. When prompted for password: Enter a **Personal Access Token** (not your GitHub password)
   - Create one at: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Give it a name like "Portfolio Push"
   - Select scopes: Check `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token immediately** (you won't see it again!)
   - Use this token as your password when pushing

**Option B: GitHub Desktop (Easier for beginners)**
1. Download GitHub Desktop: https://desktop.github.com/
2. Install and sign in with your GitHub account
3. File → Add Local Repository
4. Select your portfolio folder
5. Click "Publish repository" button

---

## Step 7: Verify Your Code is on GitHub

1. Go to your GitHub profile: `https://github.com/YOUR_USERNAME`
2. You should see your repository listed
3. Click on it to view all your files

---

## Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```

### Error: "Authentication failed"
- Make sure you're using a Personal Access Token, not your password
- Check that the token has `repo` permissions

### Error: "Repository not found"
- Double-check your repository name and username
- Make sure the repository exists on GitHub
- Verify the URL is correct

---

## Next Steps After Pushing

Once your code is on GitHub, you can:

1. **Deploy to Vercel** (Recommended for Next.js):
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "Import Project"
   - Select your repository
   - Click "Deploy"

2. **Deploy to Netlify**:
   - Go to https://netlify.com
   - Sign in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

---

## Need More Help?

If you get stuck at any step, let me know:
- What step you're on
- What error message you're seeing (if any)
- Your GitHub username (so I can help with the exact commands)

