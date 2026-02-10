# Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. Fully responsive, single-page design with smooth animations. Ready to deploy on GitHub Pages.

## Features

- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- ⚛️ **Built with React** - Modern component-based architecture
- 🎨 **Modern Design** - Clean and professional aesthetic with smooth animations
- ⚡ **Fast Performance** - Built with Vite for instant build times and HMR
- 🚀 **Easy Deployment** - One command deployment to GitHub Pages
- 🎯 **Single Page App** - No routing needed, all content on one page
- ♿ **Accessible** - Semantic HTML and accessibility best practices

## Quick Start

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser to the local URL (typically `http://localhost:5173`)

### Customization

1. **Update Personal Info** - Edit `src/App.tsx`:
   - Change "Your Name" in the navbar
   - Update the about section with your bio
   - Change the hero tagline

2. **Add Your Projects** - Edit the `projects` array in `src/App.tsx`

3. **Update Skills** - Edit the `skills` array in `src/App.tsx`

4. **Change Colors** - Edit CSS variables in `src/App.css`

## Deployment to GitHub Pages

### Step 1: Build
```bash
npm run build
```

### Step 2: Create GitHub Repo
Name it `username.github.io`

### Step 3: Deploy
Copy the `dist` folder contents to your repo and push to GitHub Pages.

## File Structure

```
src/
├── App.tsx          # Main portfolio component
├── App.css          # Component styles
├── main.tsx         # React entry point
└── index.css        # Global styles
```

## Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

**Ready to go live?** Run `npm run build` and deploy to GitHub Pages! 🚀
