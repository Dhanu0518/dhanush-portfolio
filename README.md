# S Dhanush — Portfolio

React + TypeScript + Vite portfolio site.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Edit your content

All resume content lives in one file: `src/data.ts`
Update your experience, projects, and skills there — no need to touch the components.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy free on GitHub Pages

1. Push this project to a new GitHub repo (e.g. `dhanush-portfolio`)
2. Install the gh-pages helper:
   ```bash
   npm install --save-dev gh-pages
   ```
3. In `package.json`, add:
   ```json
   "homepage": "https://Dhanu0518.github.io/dhanush-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. In `vite.config.ts`, set the base path:
   ```ts
   export default defineConfig({
     plugins: [react()],
     base: '/dhanush-portfolio/',
   })
   ```
5. Run:
   ```bash
   npm run deploy
   ```
6. In your GitHub repo settings → Pages, set source to the `gh-pages` branch.

Your live URL will be `https://Dhanu0518.github.io/dhanush-portfolio` — put that on your resume and LinkedIn.

## Alternative: Vercel (easier, custom domain support)

1. Push to GitHub
2. Go to vercel.com → New Project → import the repo
3. Vercel auto-detects Vite, just click Deploy
4. You get a live URL in ~1 minute, and can add a custom domain later
