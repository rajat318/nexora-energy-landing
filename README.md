# NEXORA — Intelligent Energy Technology

Week 3 internship project: a futuristic SaaS/technology landing page built around a 3D model.
NEXORA is a **fictional product concept**. The 3D model is **not** my work: it comes from the Algoryx Community. Credit/license: [ADD CREDIT + LICENSE].

## Stack
React, Vite, JavaScript, Tailwind CSS v4, Three.js, React Three Fiber, drei, Framer Motion, Lucide React.

## Run
```bash
npm install
npm run dev      # development
npm run build    # production build in dist/
npm run preview  # test the build
```

## 3D model
Put the GLB at `public/models/algoryx-model.glb` (or edit `modelPath` in `src/data/siteData.js`).
If the file is missing or fails to load, a simple placeholder core is shown instead of crashing the page.
Tune scale/position in `src/components/3d/ProductModel.jsx` (`TARGET_SIZE`).

## Structure
`components/3d` scene, model, lighting, canvas · `components/sections` page sections · `data/siteData.js` all content.

## Deploy
Vercel/Netlify: build command `npm run build`, output `dist`. For a sub-path host (GitHub Pages) set `base` in `vite.config.js`.

Live URL: [ADD LINK]  ·  Repo: [ADD LINK]
