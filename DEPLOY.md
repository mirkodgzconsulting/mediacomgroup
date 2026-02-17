# Deployment Instructions for ZMedia Group

This project is configured for **automatic deployment on Vercel**.
Follow these steps to connect your local project to the cloud.

## Step 1: Push to GitHub

1. Create a **New Repository** on GitHub (e.g., `zmedia-group-website`).
2. Run the following commands in your terminal to link this local folder to GitHub:

```bash
git remote add origin https://github.com/YOUR_USERNAME/zmedia-group-website.git
git branch -M main
git push -u origin main
```

## Step 2: Connect to Vercel

1. Log in to [Vercel](https://vercel.com).
2. Click **Add New** > **Project**.
3. Select **Import form GitHub**.
4. Choose the `zmedia-group-website` repository you just created.
5. Click **Deploy**.

## Automatic Updates

From now on, every time you make changes and run:

```bash
git add .
git commit -m "Update website"
git push
```

Vercel will automatically detect the changes, build the new version, and deploy it live within seconds.

## Project Configuration

- **Framework**: Next.js (detected automatically)
- **Build Command**: `next build` (default)
- **Output Directory**: `.next` (default)
- **Environment Variables**: No sensitive keys are currently required.
