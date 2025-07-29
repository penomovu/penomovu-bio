# Personal Bio Website

## Overview

This is a modern, interactive personal bio website for "penomovu", a C++ and Python developer. The application is built as a full-stack web application with a React frontend and Express.js backend, designed to showcase personal information and social media links in an engaging, visually appealing format.

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

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production bundling
- **API**: RESTful API structure (currently minimal implementation)

### Database Layer
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured for Neon Database)
- **Migrations**: Drizzle Kit for schema management
- **Schema Location**: `shared/schema.ts` for type sharing between frontend and backend

## Key Components

### Frontend Components
1. **ProfileCard**: Main bio display with profile image, name, title, and social links
2. **VideoBackground**: YouTube video background with controls for play/pause and mute
3. **SocialLinks**: Interactive social media links with hover effects
4. **ViewCounter**: Animated view counter with loading states
5. **UI Components**: Comprehensive set of shadcn/ui components for consistent design

### Backend Components
1. **Storage Interface**: Abstract storage layer with in-memory implementation
2. **Route Registration**: Modular route setup for API endpoints
3. **Vite Integration**: Development server integration for HMR

### Shared Components
1. **Schema Definitions**: Shared TypeScript types and Zod validation schemas
2. **Database Models**: User model with username/password fields

## Data Flow

### Current Implementation
1. **Static Content**: Profile information is hardcoded in components
2. **View Counter**: Simulated with local state and timers
3. **Social Links**: Static configuration with external URL navigation
4. **Background Video**: YouTube embed with iframe messaging for controls

### Database Schema
- **Users Table**: Basic user model with ID, username, and password fields
- **Storage Layer**: Memory-based storage with CRUD operations for users

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