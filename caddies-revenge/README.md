# The Caddie's Revenge — deploy guide

This folder is your app, ready to put on the internet. You do NOT need to
install anything on your computer or type any commands. Just follow the steps.

## Step 1 — Put the code on GitHub

1. Go to **github.com** and sign in.
2. Click the **+** icon (top right) → **New repository**.
3. Name it **caddies-revenge**, leave everything else as-is, click
   **Create repository**.
4. On the next page, click the link **"uploading an existing file"**.
5. Open this folder on your computer, select **everything inside it**
   (the `src` folder, `index.html`, `package.json`, `vite.config.js`,
   `.gitignore`, `README.md`) and drag it onto the GitHub upload box.
   - Do NOT upload `node_modules` or `dist` if you see them — they aren't needed.
6. Scroll down, click **Commit changes**.

## Step 2 — Deploy on Vercel

1. Go to **vercel.com** and sign in (use your GitHub account).
2. Click **Add New…** → **Project**.
3. Find **caddies-revenge** in the list and click **Import**.
4. Vercel will auto-detect it's a Vite app. Don't change any settings.
5. Click **Deploy** and wait about a minute.
6. You'll get a link like **https://caddies-revenge.vercel.app** — that's your app!

## Step 3 — Add it to your phone

1. Open the Vercel link on your iPhone in Safari.
2. Tap the **Share** button → **Add to Home Screen**.
3. It now opens like a real app.

Send the same link to your friend and they can do the same.

---

### Good to know for now (Phase 1)

- The game itself works fully. Login and friends won't yet save across
  different phones — that's what we add next with Supabase (Phase 2).
- To update the app later: change a file on GitHub (or re-upload), and
  Vercel automatically rebuilds and updates your link. No extra steps.
