# Kybera Landing

Landing page and documentation site for [Kybera](https://kybera.xyz) - the AI-powered multi-chain crypto wallet.

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |

## Tech Stack

| Category   | Technology                          |
|------------|-------------------------------------|
| Framework  | React 19 + TypeScript               |
| Build Tool | Vite 7                              |
| Animations | Framer Motion                       |
| 3D         | React Three Fiber + Three.js        |
| Icons      | Lucide React                        |
| Routing    | React Router                        |
| Styling    | CSS Modules                         |

## Project Structure

```
src/
  main.tsx              # App entry point
  App.tsx               # Root component with routing
  App.css               # Global styles and utility classes
  index.css             # CSS custom properties, resets, animations
  components/
    Navbar.tsx           # Navigation bar
    Hero.tsx             # Hero section with app mockup
    Features.tsx         # Feature cards grid
    OpenClaw.tsx         # OpenClaw AI research section
    Security.tsx         # Security features section
    Chains.tsx           # Supported chains grid
    CTA.tsx              # Call-to-action section
    Footer.tsx           # Site footer
    Docs.tsx             # Full documentation page
    ScrollTimeline.tsx   # Scroll progress indicator
    AnimatedCrab.tsx     # 3D animated crab (Three.js)
    Background.tsx       # Starfield + nebula background
    *.module.css         # Component-scoped styles
```

## Deployment

Deployed to [Vercel](https://vercel.com) with SPA rewrite rules. The production site is available at [kybera.xyz](https://kybera.xyz).

## License

MIT License - see [LICENSE](LICENSE) for details.

## Author

Built by [Xipz](https://x.com/Xipzer)
