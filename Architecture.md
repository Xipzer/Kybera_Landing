# Architecture

## Overview

Kybera Landing is a static single-page application (SPA) built with React and TypeScript. It serves as the marketing site and documentation hub for the Kybera wallet app hosted at `app.kybera.xyz`. The landing site itself contains no backend, no API calls, no environment variables, and no sensitive data.

## Routing

Client-side routing via React Router with two routes:

- `/` - Landing page (composed of Hero, Features, OpenClaw, Security, Chains, CTA sections)
- `/docs` - Documentation page

Vercel's `vercel.json` rewrites all paths to `index.html` for SPA support.

## Component Architecture

```
App
  Background          (fixed starfield + nebula backdrop)
  Navbar              (top nav with section links + Launch App CTA)
  Routes
    LandingPage
      ScrollTimeline  (scroll progress indicator on the right edge)
      Hero            (headline, stats, interactive app mockup)
      Features        (6 feature cards in a grid)
      OpenClaw        (AI research section with 3D crab, setup steps)
      Security        (security features + animated shield visual)
      Chains          (supported chains grid + DEX/bridge integrations)
      CTA             (final call-to-action)
    Docs              (full documentation with scroll timeline)
  Footer              (links, social, copyright)
```

## Styling

- **CSS Modules** for component-scoped styles (`*.module.css`)
- **Global CSS** in `index.css` (design tokens, resets) and `App.css` (shared utilities like `.btn-primary`, `.glass-card`, `.gradient-text`)
- **Design tokens** via CSS custom properties (`--bg-deep`, `--accent-primary`, `--font-display`, etc.)
- **Fonts**: Space Grotesk (display) + Inter (body) via Google Fonts

## Animations

- **Framer Motion** handles scroll-triggered reveals, hover effects, and continuous animations
- **React Three Fiber** renders the 3D animated crab in the OpenClaw section (code-split via `React.lazy`)
- **CSS keyframes** for ambient effects (float, pulse-glow, shimmer, gradient-shift)

## Build

Vite handles bundling. The build pipeline:

1. `tsc -b` - TypeScript type checking
2. `vite build` - Production bundle

The AnimatedCrab component is code-split into a separate chunk since it pulls in the Three.js dependency tree.

## External References

- `https://app.kybera.xyz` - Main Kybera wallet app
- `https://x.com/KyberaXYZ` - Project Twitter/X
- `https://github.com/Xipzer` - Author GitHub
- `https://github.com/openclaw/openclaw` - OpenClaw repository
