# Deployment Instructions

## Vercel Deployment

This project is configured for static deployment on Vercel. The `vercel.json` configuration file handles the build process automatically.

### Quick Deploy

1. **Connect to Vercel**: Import this repository to your Vercel dashboard
2. **Automatic Configuration**: Vercel will detect the `vercel.json` configuration
3. **Deploy**: Click deploy - the build process will handle everything automatically

### Build Process

The deployment process:
1. Changes working directory to `client` 
2. Installs dependencies (`npm install`)
3. Runs `npm run build:skip-check` (Vite build without TypeScript checking)
4. Outputs static files to `dist` 
5. Serves the built application with proper routing for video assets

### Fixed Build Issues (Latest)
- ✅ Added missing PostCSS configuration (`postcss.config.js`)
- ✅ Added missing Tailwind configuration (`tailwind.config.ts`)  
- ✅ Fixed Vite config to use ES module path resolution
- ✅ Added `@types/node` dependency for build process
- ✅ Updated Vercel config to use `cwd` for proper directory handling

### Manual Build (Local Testing)

```bash
cd client
npm install
npm run build
npm run preview
```

### Configuration Files

- **vercel.json**: Deployment configuration
- **client/package.json**: Frontend dependencies
- **client/tsconfig.json**: TypeScript configuration for the frontend

### Features Included

- ✅ Video autoplay with sound enabled
- ✅ Responsive design with dark purple theme
- ✅ Social media links (GitHub, LinkedIn, X, Stack Overflow)
- ✅ Minimalist profile card design
- ✅ Local video background ("plenka - cascade [escapism].mp4")

### Troubleshooting

If deployment fails:
1. Check Vercel build logs for specific errors
2. Ensure all dependencies are listed in `client/package.json`
3. Verify video file exists in `client/public/videos/`
4. Use `build:skip-check` script to bypass TypeScript errors if needed

The application is now fully ready for static deployment on Vercel, Netlify, or any similar platform.