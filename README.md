# penomovu - Personal Bio Website

A modern, minimalist personal bio website built with React, featuring a local video background and social media links.

## Features

- 🎥 Local video background with audio controls (plenka - cascade [escapism])
- 📱 Responsive design for mobile and desktop
- 🔗 Interactive social media links
- 🎨 Modern dark purple minimalist theme
- ⚡ Fast loading with Vite
- 🚀 Ready for Netlify deployment (fully static)

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS + Shadcn/ui
- **Build Tool**: Vite
- **Deployment**: Netlify (static)

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/penomovu/penomovu-bio.git
cd penomovu-bio
```

2. Install dependencies:
```bash
cd client
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment to Netlify

### Option 1: Automated (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Netlify will automatically detect the `netlify.toml` configuration
4. Deploy!

### Option 2: Manual
1. Run the build script: `./deploy-static.sh`
2. Upload the `client/dist` folder to Netlify

### Build Settings for Netlify
- **Build command**: `cd client && npm install && npm run build`
- **Publish directory**: `client/dist`
- **Node version**: 20

## Social Links

- [GitHub](https://github.com/penomovu)
- [LinkedIn](https://linkedin.com/in/penomovu)
- [X (Twitter)](https://twitter.com/penomovu)
- [Stack Overflow](https://stackoverflow.com/users/penomovu)
- [Discord](https://discord.com/users/penomovu)
- [YouTube](https://youtube.com/@penomovu)

## License

MIT License - feel free to use this as a template for your own bio site!

---

Made with ❤️ by penomovu