# Authenticate with GitHub to Push

## 🔐 Authentication Required

GitHub requires authentication to push code. You have two options:

---

## Option 1: Personal Access Token (Recommended)

### Step 1: Create Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Fill in:
   - **Note**: "Portfolio Push"
   - **Expiration**: Choose 90 days or No expiration
   - **Select scopes**: Check `repo` (full control of private repositories)
4. Click **"Generate token"**
5. **IMPORTANT**: Copy the token immediately (you won't see it again!)
   - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 2: Push with Token

Run this command in your terminal:
```bash
git push -u origin main
```

When prompted:
- **Username**: `burristerrence`
- **Password**: Paste your Personal Access Token (NOT your GitHub password!)

---

## Option 2: GitHub Desktop (Easier - No Token Needed)

### Step 1: Download GitHub Desktop
1. Go to: https://desktop.github.com/
2. Download and install GitHub Desktop
3. Sign in with your GitHub account

### Step 2: Add Repository
1. Open GitHub Desktop
2. Click **File** → **Add Local Repository**
3. Browse to: `C:\Users\burri\OneDrive\MY PORTFOLIO`
4. Click **"Add repository"**

### Step 3: Publish Repository
1. Click **"Publish repository"** button (top right)
2. Repository name: `my-portfolio`
3. Make sure "Keep this code private" is unchecked (for public repo)
4. Click **"Publish repository"**
5. Done! Your code is on GitHub! 🎉

---

## ✅ After Pushing

Once your code is pushed, verify:
1. Go to: https://github.com/burristerrence/my-portfolio
2. Refresh the page
3. You should see all your files!

---

## 🚀 Then Deploy!

After your code is on GitHub, deploy to Vercel:
1. Go to: https://vercel.com
2. Sign in with GitHub
3. Import your `my-portfolio` repository
4. Click "Deploy"
5. Your site will be live! 🎉

