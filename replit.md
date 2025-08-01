# Personal Bio Website

## Overview

This is a modern, marketing-focused personal bio website for "penomovu", a senior software developer. The application has been transformed from a simple bio card into a comprehensive professional portfolio with stronger marketing identity while maintaining a minimalist dark design. Built as a full-stack React application with both client-side interactivity and server capabilities.

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

### Application Architecture
- **Type**: Full-stack React application with Express backend
- **Frontend**: React SPA with enhanced animations and professional UI
- **Backend**: Express server for potential future API endpoints
- **Video**: Local MP4 file with professional background effects
- **Build**: Vite for development and production bundling
- **Deployment**: Replit with workflow automation

## Key Components

### Frontend Components
1. **HeroSection**: Professional hero with animated tagline and rotating specialties
2. **SkillsSection**: Technical expertise showcase with interactive skill categories
3. **ProfileCard**: Enhanced marketing-focused profile with achievements, CTA, and status
4. **Navigation**: Glass-effect navigation bar with smooth animations
5. **Footer**: Branded footer with professional touch
6. **VideoBackground**: Local video background with enhanced visual effects
7. **SocialLinks**: Interactive social media links with improved hover states
8. **LandingOverlay**: Professional entry screen with marketing messaging

## Data Flow

### Current Implementation
1. **Marketing Identity**: Professional portfolio with clear value proposition and CTAs
2. **Interactive Components**: Animated hero section, skill showcases, and achievement highlights
3. **Navigation System**: Glass-effect navigation with smooth transitions
4. **Social Integration**: Enhanced social links with improved visual feedback
5. **Background Video**: Professional video background with enhanced visual effects
6. **Theme**: Upgraded dark theme with stronger visual hierarchy and marketing focus

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