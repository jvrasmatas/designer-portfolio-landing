# Landing Page — Kiriacos / Music Graphic Designer

## Overview

Professional landing page for **Kiriacos**, freelance graphic designer specialized in **music graphic design** — visual identities, album covers, promotional material and branding for the music industry. Has worked with international artists.

**Goal:** Convey credibility in the music industry, showcase work and convert visits into new clients.

**Inspiration:** [Fabrica® Studio](https://fabrica.framer.media/studio)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 semantic |
| Styles | CSS3 (custom properties, Grid, Flexbox) |
| Interactivity | Vanilla JavaScript (ES6+ modules) |
| Fonts | Helvetica Neue — system stack, no external dependency |
| Icons | SVG inline |
| Animations | CSS transitions + Intersection Observer API |
| Contact form | Formspree (`mzdwbgpr`) → kiriacosvrasmatas@gmail.com |
| Version control | Git + GitHub (`jvrasmatas/designer-portfolio-landing`) |

---

## Design Direction

### Theme
- **Light theme** — warm off-white background `#f7f6f1`
- **Personality:** Minimal, clean, editorial, music-industry premium

### Color Palette
```
--color-bg:          #f7f6f1   /* Warm off-white */
--color-bg-card:     #f5f5f5
--color-border:      #d8d8d8
--color-text:        #0d0d0d   /* Near black */
--color-text-muted:  #666666
--color-accent:      #0e6e3f   /* Green */
--color-accent-hover:#0a5530
```

### Typography
```
Font:      'Helvetica Neue', Helvetica, Arial, sans-serif
Headings:  clamp(3.5rem, 7vw, 6.5rem) — bold, letter-spacing -0.04em, nowrap
Body:      1rem, line-height 1.1, letter-spacing -0.02em
```

---

## Site Structure

### Pages
- `index.html` — Main landing page
- `work.html` — All my work (full portfolio, sections by artist)

### Sections (index.html)
1. **#home** — Hero: "Trust the process." + fullscreen background video (`assets/landing back 2.mp4`, 100% opacity, no overlay) + stats row
2. **#about** — About me: bio, quote, CTAs + real photo (`assets/images/kv01.jpg.jpeg`)
3. **#projects** — Carousel of 6 artists (character-select style), labeled "Projects" in heading. Navbar link: "My work"
4. **#services** — Services accordion: 6 items with expandable descriptions
5. **#contact** — Heading top full-width, form + contact details below side by side. Formspree connected
6. **Footer** — nav, social, copyright

### File Structure
```
/
├── PROJECT.md
├── index.html
├── work.html
├── assets/
│   ├── images/
│   │   └── kv01.jpg.jpeg        ← About photo
│   ├── landing back 2.mp4       ← Hero background video (active)
│   └── landing background.mp4   ← Previous video (unused)
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── base.css
│   ├── components.css
│   ├── navbar.css
│   ├── footer.css
│   ├── lightbox.css
│   ├── work.css
│   └── sections/
│       ├── hero.css
│       ├── about.css
│       ├── portfolio.css
│       ├── services.css
│       └── contact.css
└── js/
    ├── main.js
    ├── navbar.js
    ├── animations.js
    ├── portfolio.js
    ├── contact.js
    ├── lightbox.js
    ├── work.js
    └── data/
        └── artists.js
```

---

## Key Features

### Hero Video
- File: `assets/landing back 2.mp4`
- `autoplay muted loop playsinline`
- `object-fit: cover` — fills full hero section
- No overlay — video at 100% opacity
- Content (text, stats) sits on z-index 3 above video

### Clients Carousel ("Projects")
- 6 artist cards, character-select depth effect
- Artist name: minimal white uppercase text centered on card (center card only)
- No ghost text background
- Click center card → modal with all works (Behance embed approach — pending)
- Arrows on left/right sides, keyboard navigation

### Services Accordion
- 6 services with expandable descriptions
- One open at a time, smooth animation
- Plus icon rotates to X when open

### Contact Form
- Formspree endpoint: `mzdwbgpr`
- Sends to: kiriacosvrasmatas@gmail.com
- Layout: heading full-width top, form left + details right below

---

## Client Info

| | |
|---|---|
| **Name** | Kiriacos Vrasmatas |
| **Specialty** | Music graphic design |
| **Email** | kiriacosvrasmatas@gmail.com |
| **Instagram** | @kiriacospsd |
| **TikTok** | @kiriacospsd |
| **Behance** | behance.net/kiriacosvr |

### Pending
- Real artist names/photos for the 6 carousel slots
- Behance embed codes for modal and work.html
- Final personal bio text

---

## Git

### Branches
```
main                      ← Stable production
develop                   ← Active development
feature/major-restructure ← Current working branch
```

---

## Changelog

| Date | Version | Changes |
|------|---------|---------|
| 2026-05-17 | v1.0 | Initial setup, dark landing |
| 2026-05-17 | v1.1 | Kiriacos identity, Helvetica, green palette |
| 2026-05-17 | v1.2 | Full English, carousel, work.html |
| 2026-05-17 | v1.3 | Lightbox, square images, same-tab navigation |
| 2026-05-17 | v1.4 | Light theme, Services accordion, real about photo |
| 2026-05-18 | v1.5 | Large headings, ghost text removed, artist pill on card |
| 2026-05-18 | v1.6 | Minimal navbar edge-to-edge, reduced margins, contact layout reorganized |
| 2026-05-18 | v1.7 | Hero background video (landing back 2.mp4, 100% opacity). "Projects" heading. Navbar "My work" |

---

*Last updated: 2026-05-18 v1.7 — Claude Code*
