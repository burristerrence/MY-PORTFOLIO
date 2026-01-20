# GitHub Commands - What You'll See

## 📋 Commands GitHub Shows You

After creating your repository, GitHub displays a page with setup instructions. Look for this section:

### "…or push an existing repository from the command line"

GitHub will show you commands that look like this:

```bash
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git branch -M main
git push -u origin main
```

---

## 🔍 Understanding Each Command

### 1. `git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git`
- **What it does**: Connects your local repository to the GitHub repository
- **"origin"**: This is the name for your GitHub repository (standard convention)
- **Replace**: `YOUR_USERNAME` with your actual GitHub username

### 2. `git branch -M main`
- **What it does**: Renames your current branch to "main" (GitHub's default)
- **Why**: GitHub uses "main" instead of "master" as the default branch name

### 3. `git push -u origin main`
- **What it does**: Pushes your code to GitHub
- **`-u`**: Sets up tracking so future pushes are easier
- **`origin main`**: Pushes to the "main" branch on GitHub (origin)

---

## ⚠️ Important Notes

### Authentication Required
When you run `git push`, GitHub will prompt you for:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (NOT your GitHub password)

### Personal Access Token
If you don't have one, create it at:
https://github.com/settings/tokens

1. Click "Generate new token" → "Generate new token (classic)"
2. Name: "Portfolio Push"
3. Select scope: `repo` (full control)
4. Generate and **copy the token immediately**
5. Use this token as your password when pushing

---

## 🚀 Ready to Execute?

Once you have:
- ✅ Created the repository on GitHub
- ✅ Copied the commands (or have your username ready)
- ✅ Have a Personal Access Token ready (if needed)

Let me know and I'll help you run these commands!

---

## 📝 What to Share With Me

After creating the repository, share:
1. **Your GitHub username** (from the repository URL)
2. **Confirmation that repository is created**

Example:
- Username: `terrenceburris`
- Repository URL: `https://github.com/terrenceburris/my-portfolio`

Then I'll help you execute the commands!

