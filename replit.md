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

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations handle schema updates

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution, Vite dev server
- **Production**: Node.js serves bundled application with static file serving
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Key Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server execution
- `db:push`: Database schema synchronization

### Hosting Considerations
- **Static Assets**: Served from `dist/public` in production
- **API Routes**: Express server handles `/api` prefixed routes
- **Database**: Configured for Neon Database with connection string
- **Environment**: Designed for deployment on platforms supporting Node.js and PostgreSQL

The application follows a modern full-stack architecture with clear separation of concerns, type safety throughout, and a component-based UI design system. The current implementation focuses on presenting personal bio information with engaging visual effects and social media integration.