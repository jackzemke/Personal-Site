# Copilot Instructions - Jack Zemke Portfolio

## Project Overview
This is a personal portfolio site built with Next.js 15, React 19, Tailwind CSS v4, and Framer Motion. It's currently under active development with a focus on AI developer Jack Zemke's work and projects.

## Architecture & Key Patterns

### Page Structure
- Uses Next.js Pages Router (not App Router) - all pages go in `/pages/`
- Two main pages: `index.js` (home) and `about.js`
- Shared layout pattern: `NavBar` + animated background blobs on every page
- Head component with consistent title format: "PageName - Jack Zemke"

### Component Architecture
- **Reusable Background**: All pages use identical 4-blob animated background with specific positioning
- **NavBar Component**: Fixed top navigation with glassmorphism effect (`bg-blue-100/25 backdrop-blur-xl`)
- **AnimatedBlob Component**: Framer Motion-powered floating background elements with randomized movement every 2 seconds

### Styling Conventions
- **Color Palette**: Primary blue (`blue-700`, `blue-600`), blob colors (pink-400, blue-400, purple-400, yellow-300)
- **Glassmorphism**: NavBar uses backdrop-blur with semi-transparent backgrounds
- **Typography**: Blue headings (`text-blue-700`), gray body text (`text-gray-700`)
- **Layout**: Centered content with `min-h-screen flex flex-col items-center justify-center px-4/6`

### Animation System
- Framer Motion for blob animations with spring physics (`stiffness: 20, damping: 10`)
- Blobs have 30% opacity, heavy blur (`blur-3xl`), and move within 60px radius
- 2-second intervals for new random positions and scales (0.9-1.2x)

## Development Workflow
- **Dev**: `npm run dev` (Next.js default)
- **Build**: `npm run build`
- **Deployment**: Vercel (configured for automatic deploys)
- **Domain**: Managed through Cloudflare

## File Naming & Import Conventions
- Component files: lowercase with descriptive names (`animantedblob.js`, `navbar.js`)
- Use `@/` alias for imports from project root
- Icons via `react-icons` (currently using `FaLinkedin`)

## Tailwind V4 Specifics
- Uses `@import "tailwindcss"` in globals.css (v4 syntax)
- Custom CSS variables for theme colors in `:root`
- Inline theme configuration with `@theme inline` directive

## Current Limitations & Future Plans
- Contact form, project gallery, and blog posts are planned but not implemented
- Some navigation links are commented out in NavBar
- Site is explicitly marked as "under construction"
- Main CTA links to external GitHub project (Entergy-AI)

## Key Dependencies
- **Framer Motion 12.19.1**: For all animations
- **React Icons 5.5.0**: For social media icons
- **Vercel Analytics**: Integrated for tracking
- **Tailwind CSS 4.1.10**: Latest v4 with new syntax

When adding new pages, follow the established pattern of including NavBar, the 4-blob background, and consistent styling. All animations should use Framer Motion with spring transitions for consistency.