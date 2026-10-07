# NEXORA — Intelligent Energy Technology

A modern, responsive landing page for **NEXORA**, a fictional intelligent energy product, built around an interactive 3D model rendered in the browser with React Three Fiber.

> **Note:** NEXORA is a fictional product concept created for an internship project. The 3D model is **not my work**. It comes from the Algoryx Community.
> Model credit and license: [ADD CREDIT + LICENSE]

**Live Demo:** [ADD LINK]


![NEXORA hero](./screenshots/hero.png)
<!-- Add screenshots: hero.png, showcase.png, mobile.png -->

## Overview
The project presents the 3D asset as part of a real product experience, not as a standalone viewer. The model appears in the hero section and in a dedicated interactive showcase, surrounded by normal React content: features, specifications, statistics, applications and calls to action.

## Features
- Hero with a 3D model that floats, spins slowly and responds subtly to the mouse
- Interactive product showcase with drag-to-rotate, a reset-view button and part labels
- Loading state ("Initializing NEXORA...") and a graceful fallback if the model fails to load
- Animated statistics that count up when they enter the viewport
- Scroll-reveal animations, card hover effects and an animated mobile menu
- Fully responsive layout with no horizontal overflow
- All content kept in a single data file

## Sections
Navbar · Hero · Intro · Features · 3D Product Showcase · Specifications · Statistics · Applications · Why NEXORA · CTA · Footer

## Tech Stack
- React 19 + Vite (JavaScript)
- Tailwind CSS v4
- Three.js, React Three Fiber, @react-three/drei
- Framer Motion
- Lucide React

## Project Structure
```
src/
├── components/
│   ├── 3d/         ProductModel, ProductScene, ModelLighting, ModelCanvas, LazyModelCanvas
│   ├── common/     Button, SectionHeading, StatCard, motion helpers
│   ├── layout/     Navbar, Footer
│   └── sections/   Hero, Intro, Features, ProductShowcase, Specifications,
│                   Statistics, Applications, WhyNexora, CTA
├── data/siteData.js
├── App.jsx
├── main.jsx
└── index.css
public/models/      GLB model
```

## 3D Implementation
- Model loaded with `useGLTF` and auto-scaled to a fixed size, so it fits any asset
- Hero and showcase use separate canvases that share the same model
- Procedural lighting environment (no external HDR download)
- Contact shadows, capped device pixel ratio and a small `useFrame` loop for performance
- The showcase canvas mounts only when it is near the viewport, and the 3D code is lazy-loaded
- Error boundary with a simple placeholder model if the GLB is missing

## Getting Started
```bash
git clone [ADD REPO URL]
cd nexora-energy-landing
npm install
npm run dev
```

Place the GLB at `public/models/algoryx-model.glb`, or change `modelPath` in `src/data/siteData.js`.

```bash
npm run build     # production build in dist/
npm run preview   # preview the build locally
```

## Deployment
Deploy to Vercel or Netlify with build command `npm run build` and output directory `dist`.
For a sub-path host such as GitHub Pages, set `base` in `vite.config.js`.

## Design
Dark charcoal interface, white typography and a cyan accent inspired by the glowing core of the model, with subtle glass effects and thin borders. The 3D model stays visually dominant.

## What I Learned
- Integrating a GLB asset into a React site with React Three Fiber
- Separating 3D logic from UI components
- Basic 3D performance practices (lazy loading, DPR limits, minimal per-frame work)
- Combining Framer Motion animations with a 3D scene

## Credits
- 3D model: Algoryx Community — [Rajat Banerjee ]
- Icons: Lucide
- NEXORA name, copy and specifications: fictional, created for this project

