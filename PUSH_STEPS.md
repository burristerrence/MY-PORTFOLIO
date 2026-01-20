# Push to GitHub - Complete Steps

## Current Status
- ✅ Local repository ready with 3 commits
- ❌ Remote not configured yet
- ✅ Branch: master (will rename to main)

---

## Step-by-Step Commands

### Step 1: Add Remote (Need Your GitHub Username)

**If you haven't added the remote yet, run:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

**Example:**
```bash
git remote add origin https://github.com/terrenceburris/my-portfolio.git
```

---

### Step 2: Rename Branch to Main

```bash
git branch -M main
```

This renames your "master" branch to "main" (GitHub's default).

---

### Step 3: Push to GitHub

```bash
git push -u origin main
```

This will:
- Upload all your code to GitHub
- Set up tracking so future pushes are easier
- May prompt for authentication

---

## Authentication

When you run `git push`, GitHub will ask for:

1. **Username**: Your GitHub username
2. **Password**: Use a **Personal Access Token** (NOT your password!)

### Create Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: "Portfolio Push"
4. Select scope: `repo` (full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing

---

## Quick Command Sequence

If you have your GitHub username ready, here are all commands:

```bash
# 1. Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git

# 2. Rename branch
git branch -M main

# 3. Push to GitHub
git push -u origin main
```

---

## Need Help?

Share your GitHub username and I'll help you run these commands!

