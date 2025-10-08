# Copilot Instructions for AI Coding Agents

## Project Overview
- This is a Next.js portfolio project using the `/src/app` directory structure and TypeScript.
- The project is bootstrapped with `create-next-app` and uses modern Next.js features (app router, file-based routing, server components).
- Main sections are organized under `src/app/` as route folders (e.g., `portafolio/`, `contacto/`, `perfil_profesional/`).
- Each portfolio subproject (e.g., `crazypapa`, `crazyroom`, `dandolahora`, etc.) is a nested route with its own `page.tsx`.
- Shared UI components are in `src/app/components/` (e.g., `nav.tsx`, `btn.tsx`, `back.tsx`).

## Key Patterns & Conventions
- **Routing:** Each folder under `src/app/` with a `page.tsx` is a route. Nested folders represent nested routes.
- **Metadata:** Some routes have a `metada.tsx` (likely a typo for `metadata.tsx`). Use this for route-specific metadata.
- **Styling:** Global styles are in `src/app/globals.css`. Component-level styles may be colocated or inlined.
- **Assets:** Static files (images, SVGs) are in `public/` and referenced with root-relative paths (`/profile.png`).
- **TypeScript:** All code is TypeScript. Use type annotations and interfaces for props and data structures.

## Developer Workflows
- **Development:**
  - Start with `pnpm dev` (or `npm run dev`, `yarn dev`, `bun dev`).
  - Edit pages/components; changes auto-reload.
- **Build:**
  - Run `pnpm build` to create a production build.
- **Preview:**
  - Run `pnpm start` to preview the production build locally.
- **Dependencies:**
  - Managed with `pnpm` (preferred), but `npm`, `yarn`, or `bun` are also supported.

## Project-Specific Notes
- **Portfolio Structure:** Each project in `portafolio/` may have further nested routes (e.g., `mutatis/`). Maintain this structure for new portfolio entries.
- **Component Usage:** Reuse components from `src/app/components/` for navigation and UI consistency.
- **No custom test or lint scripts** are defined in the README; follow standard Next.js/TypeScript best practices unless otherwise specified.

## Examples
- To add a new portfolio project: create a new folder under `src/app/portafolio/`, add a `page.tsx`, and optionally a `mutatis/` subfolder for variants.
- To update navigation: edit `src/app/components/nav.tsx`.

## References
- Main entry: `src/app/page.tsx`
- Global layout: `src/app/layout.tsx`
- Navigation: `src/app/components/nav.tsx`
- Portfolio index: `src/app/components/portaFolioIndex.tsx`

---
If you are unsure about a pattern, check similar files in the same directory or ask for clarification.
