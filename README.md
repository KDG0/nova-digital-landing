# NOVA DIGITAL — Landing Page

A high-performance, production-ready landing page for **NOVA DIGITAL**, a digital marketing and SaaS development agency. Built with Next.js 14+, App Router, and Tailwind CSS.

## Live Demo

> Coming soon — [https://novadigital.dev](https://novadigital.dev)

## Screenshot

> Coming soon

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Fonts:** Google Fonts via `next/font` (Sora + Space Grotesk)
- **Animations:** Custom scroll reveal with IntersectionObserver, CSS keyframe animations
- **Architecture:** Server Components by default, Client Components only where needed
- **Performance:** Static generation, no external image dependencies

## Features

- Fully responsive mobile-first design
- Animated gradient hero with glassmorphism cards
- Scroll reveal animations via custom `useScrollReveal` hook
- Mobile hamburger menu with smooth transitions
- Dark/light alternating sections for visual rhythm
- Micro-interactions with Tailwind (hover lifts, glowing borders, color transitions)
- SEO-optimized metadata and OpenGraph tags

## Getting Started

```bash
# Clone the repository
git clone https://github.com/kvnguifarro/nova-digital-landing.git

# Navigate to the project
cd nova-digital-landing

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.js          # Root layout with fonts & metadata
│   ├── page.js            # Main page composing all sections
│   └── globals.css        # Global styles, animations, themes
├── components/
│   ├── Navbar.jsx          # Fixed nav with mobile hamburger
│   ├── Hero.jsx            # Hero section with animated gradient
│   ├── Services.jsx        # Service cards with glassmorphism
│   ├── Process.jsx         # 4-step visual timeline
│   ├── CaseStudies.jsx     # Case studies on dark background
│   ├── TechStack.jsx       # Tech stack badges
│   ├── Testimonials.jsx    # Client testimonials
│   ├── CTA.jsx             # Call-to-action with gradient
│   └── Footer.jsx          # Footer with links & newsletter
├── hooks/
│   └── useScrollReveal.js  # IntersectionObserver scroll animations
└── lib/
    └── data.js             # Static content data
```

## Author

**Kevin Guifarro** — [guifarro.dev](https://guifarro.dev)
