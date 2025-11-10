# fastnas-website

This is a Vite + React + Tailwind project prepared for publishing to GitHub and hosting via GitHub Pages or a custom domain.

What I added to make this repo GitHub-ready for hosting:

- `.gitignore` — ignores node_modules, build output and common files.
- `LICENSE` — MIT license (you can change this if desired).
- `CNAME.template` — example CNAME file (copy to `CNAME` and replace with your domain to enable a custom domain).
- `.github/workflows/pages.yml` — GitHub Actions workflow that builds the site with `npm run build` and deploys the `dist/` folder to GitHub Pages.

Quick start

1. Install deps locally:

   npm install

2. Run the dev server:

   npm run dev

3. Build for production (what the action runs):

   npm run build

How to publish to GitHub (one-time):

1. Create a new repository on GitHub (do not initialize with a README or license if you plan to push this repo).
2. Set the remote and push:

   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<your-repo>.git
   git push -u origin main

After pushing, the GitHub Actions workflow will run on pushes to `main` and deploy the built `dist/` site to GitHub Pages.

Custom domain

If you want to use a custom domain:

1. Copy `CNAME.template` to `CNAME` in the repository root and put your domain in it (e.g. `example.com`).
2. Push the change to `main` and verify DNS settings per GitHub Pages docs.

Notes

- If you prefer a different flow (deploy to `gh-pages` branch, or use another deployment provider like Netlify/Vercel), let me know and I can add that instead.
- The action uses the official Pages actions to upload the `dist` artifact and deploy it; it requires the repo's GitHub Pages feature to be enabled (the action sets that automatically).

# FASTNAS Website

A modern, responsive landing page for FASTNAS - Your lightweight & robust Network Attached Storage.

## Design Specifications

- **Background Color**: #c80000 (Red)
- **Text Color (White)**: #eeebdd
- **Text Color (Black)**: #000000

### Typography

- **Agrandir Font**: Used for body text, features, and navigation links

  - Navbar links: 25px
  - Hero subtitle: 28px
  - Features text: 40px
  - Footer: 25px

- **Horizon Font**: Used for brand name
  - Navbar logo: 45px
  - Hero title: 120-180px

## Tech Stack

- React 18
- Vite
- TailwindCSS
- Modern ES6+

## Setup Instructions

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Add Custom Fonts**

   You need to add the Agrandir and Horizon font files to the `public/fonts/` directory:

   ```
   public/
   └── fonts/
       ├── Agrandir-Regular.woff
       ├── Agrandir-Regular.woff2
       ├── Horizon-Regular.woff
       └── Horizon-Regular.woff2
   ```

   If you don't have these fonts, you can:

   - Purchase them from their respective foundries
   - Use similar alternatives (e.g., Inter for Agrandir, Bebas Neue for Horizon)
   - Update `src/index.css` to use fallback fonts

3. **Run Development Server**

   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
fastnas-website/
├── public/
│   └── fonts/          # Custom font files (you need to add these)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── MainContent.jsx
│   │   ├── Features.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Features

- ✅ Fully responsive design
- ✅ Modern React components
- ✅ TailwindCSS for styling
- ✅ Custom fonts (Agrandir & Horizon)
- ✅ SVG icons for tech stack and platforms
- ✅ Smooth scrolling navigation
- ✅ Optimized build with Vite

## Sections

1. **Hero** - Main landing with FASTNAS branding
2. **Main Content** - Value proposition
3. **Features** - Built with tech stack, supported platforms, and key features
4. **Contact** - Email and GitHub issues
5. **Footer** - Simple footer message

## Notes

- The @tailwind warnings in CSS are expected and will be processed by PostCSS during build
- Make sure to add your custom fonts to the `public/fonts/` directory
- Update the GitHub and social media links in the Contact component
- The design closely follows the mockup from `/Users/adityaa/Downloads/djanji`

## License

Open source - Made with ❤️ for the community
