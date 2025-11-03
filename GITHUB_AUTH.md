# GitHub Authentication Setup

## Problem
GitHub no longer accepts passwords for Git operations. You need a Personal Access Token (PAT).

## Solution: Create a Personal Access Token

### Step 1: Create Token on GitHub

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `RouteRank Landing Page`
4. Select expiration (30 days, 90 days, or no expiration)
5. **Check these permissions:**
   - ✅ `repo` (full control of private repositories)
   - ✅ `workflow` (optional, if using GitHub Actions)
6. Click **"Generate token"**
7. **COPY THE TOKEN IMMEDIATELY** - you won't see it again!

### Step 2: Use Token as Password

When you push, use:
- **Username**: `interventionbluecamo-afk`
- **Password**: Paste your Personal Access Token (not your GitHub password)

```bash
git push -u origin main
# Username: interventionbluecamo-afk
# Password: [paste your token here]
```

### Step 3: Save Token (Optional but Recommended)

To avoid entering it every time:

**Option A: GitHub CLI (Recommended)**
```bash
# Install GitHub CLI if you don't have it
brew install gh

# Login (will open browser)
gh auth login

# Then you can use gh for Git operations
```

**Option B: Git Credential Helper**
```bash
# Cache token for 1 hour
git config --global credential.helper 'cache --timeout=3600'

# Or store permanently (less secure)
git config --global credential.helper store
```

**Option C: SSH Keys (Most Secure)**
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
# Copy public key: cat ~/.ssh/id_ed25519.pub

# Change remote URL to SSH
git remote set-url origin git@github.com:interventionbluecamo-afk/routerank-landing.git
```

## Quick Fix (Right Now)

1. **Go to**: https://github.com/settings/tokens/new
2. **Generate token** with `repo` permission
3. **Copy the token**
4. **Try pushing again**, use token as password:
   ```bash
   git push -u origin main
   ```

## If You Lose the Token

Just generate a new one - you can have multiple tokens active.

