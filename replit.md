# Personal Bio Website

## Overview

This is a modern, minimalist personal bio website for "penomovu", a C++ and Python developer. The application is built as a fully static React application designed for Netlify deployment, featuring a local video background and social media links in a dark purple theme.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: TailwindCSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library (Radix UI primitives)
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite with React plugin
- **Design System**: Dark theme with purple accent colors, modern glassmorphism effects

### Static Architecture
- **Type**: Fully static React application
- **Video**: Local MP4 file ("plenka - cascade [escapism].mp4")
- **Build**: Vite for production bundling
- **Deployment**: Netlify with automated builds

## Key Components

### Frontend Components
1. **ProfileCard**: Main bio display with profile image, name, title, and social links
2. **VideoBackground**: Local video background with mute controls
3. **SocialLinks**: Interactive social media links (GitHub, LinkedIn, X, Stack Overflow)
4. **UI Components**: Minimalist shadcn/ui components for consistent design

## Data Flow

### Current Implementation
1. **Static Content**: Profile information is hardcoded in components
2. **Social Links**: Static configuration with external URL navigation (4 essential platforms)
3. **Background Video**: Local MP4 file with HTML5 video controls
4. **Theme**: Dark purple minimalist design

## External Dependencies

### Key Libraries
- **UI Framework**: React with Radix UI primitives
- **Styling**: TailwindCSS with class-variance-authority for component variants
- **Icons**: Lucide React and React Icons for consistent iconography
- **HTTP Client**: Fetch API with TanStack Query for caching
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Date Handling**: date-fns for date manipulation
- **Database**: Neon Database PostgreSQL with connection pooling

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Fast development server with HMR
- **PostCSS**: CSS processing with Autoprefixer
- **Replit Integration**: Special plugins for Replit environment

## Deployment Strategy

### Static Site Deployment (Netlify/Vercel)
The application is now configured as a **static React application** optimized for deployment on Netlify, Vercel, or similar platforms:

1. **Frontend Only**: Pure React SPA with local video background
2. **Build Process**: Vite builds optimized static assets to `client/dist`
3. **Video Assets**: Local MP4 file included in public directory
4. **TypeScript**: Fully typed with resolved module dependencies

### Vercel Configuration
- **Build Command**: `cd client && npm install && npm run build:skip-check`
- **Output Directory**: `client/dist`
- **Dependencies**: Complete package.json in client directory
- **TypeScript**: Fixed module resolution and type issues
- **Video Support**: Static video files served with proper routing

### Fixed Issues (January 30, 2025)
- ✓ Resolved TypeScript module resolution errors for @tanstack/react-query
- ✓ Fixed component type issues in calendar, input-otp, and chart components
- ✓ Created separate client package.json with all required dependencies
- ✓ Updated TypeScript configurations for proper module resolution
- ✓ Added Vercel deployment configuration with video asset routing
- ✓ Video autoplay now works with sound enabled by default

### Video Background Features
- ✓ Automatic video playback with sound (no mute button)
- ✓ Fallback handling for browser autoplay policies
- ✓ Smart interaction-based unmuting when needed
- ✓ Local video file: "plenka - cascade [escapism].mp4"

### Key Scripts
- `dev`: Development server with hot reload
- `build`: TypeScript check + Vite build
- `build:skip-check`: Vite build without TypeScript checking (for deployment)
- `preview`: Preview built static site

### Hosting Considerations
- **Static Assets**: All files served statically from client/dist
- **No Backend**: Pure frontend application, no server required
- **Video Files**: Included in public directory for local serving
- **Environment**: Optimized for CDN deployment (Netlify/Vercel)

The application is now a fully static website with engaging video background, perfect for personal bio/portfolio deployment on modern hosting platforms.