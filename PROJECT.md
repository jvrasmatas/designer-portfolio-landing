# Landing Page — Kiriacos / Music Graphic Designer

## Overview

Professional landing page for **Kiriacos**, freelance graphic designer specialized in **music graphic design** — visual identities, album covers, promotional material and branding for the music industry. Has worked with international artists including Maria Becerra, Maxi Espindola, Lit Killah, Elena Rose, Juliito and Lalo Yaha.

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
| 3D Hero | Spline viewer (`@splinetool/viewer@1.12.94`) |
| Contact form | Formspree (`mzdwbgpr`) → kiriacosvrasmatas@gmail.com |
| Version control | Git + GitHub (`jvrasmatas/designer-portfolio-landing`) |

---

## Design Direction

### Theme
- **Light theme** — warm off-white background
- **Personality:** Minimal, clean, editorial, music-industry premium

### Color Palette
```
--color-bg:          #f7f6f1   /* Warm off-white — main background */
--color-bg-card:     #f5f5f5
--color-bg-elevated: #eeeeee
--color-border:      #d8d8d8
--color-text:        #0d0d0d   /* Near black */
--color-text-muted:  #666666
--color-text-dim:    #aaaaaa
--color-accent:      #0e6e3f   /* Green — accent and CTAs */
--color-accent-hover:#0a5530
```

### Typography
```
Font: 'Helvetica Neue', Helvetica, Arial, sans-serif (everywhere)

Headings:  clamp(5rem, 9vw, 9rem) — bold, letter-spacing -0.04em, nowrap
Body:      1rem, line-height 1.1, letter-spacing -0.02em
Labels:    0.75rem uppercase letter-spacing 0.15em
```

---

## Site Structure

### Pages
- `index.html` — Main landing page
- `work.html` — All my work (full portfolio, sections by artist)

### Sections (index.html)
1. **#home** — Hero: "Trust the process." + Spline 3D model right column + stats
2. **#about** — About me: bio, quote, CTAs + photo (kv01.jpg.jpeg)
3. **#projects** — Clients carousel (6 artists, character-select style)
4. **#services** — Services accordion: 6 items with expandable descriptions
5. **#contact** — Contact form (Formspree) + social links
6. **Footer** — nav, social, copyright

### File Structure
```
/
├── PROJECT.md
├── index.html
├── work.html
├── css/
│   ├── variables.css       ← Design tokens
│   ├── reset.css
│   ├── base.css            ← Body, section-heading, reveal
│   ├── components.css      ← Buttons, badges, cursor, noise
│   ├── navbar.css
│   ├── footer.css
│   ├── lightbox.css
│   ├── work.css
│   └── sections/
│       ├── hero.css
│       ├── about.css
│       ├── portfolio.css   ← Carousel + modal
│       ├── services.css    ← Accordion
│       └── contact.css
└── js/
    ├── main.js             ← Entry + services accordion
    ├── navbar.js
    ├── animations.js       ← Scroll reveal + counters + cursor
    ├── portfolio.js        ← Carousel logic + modal
    ├── contact.js          ← Formspree submit
    ├── lightbox.js
    ├── work.js             ← work.html builder
    └── data/
        └── artists.js      ← Artist/project data (placeholder)
```

---

## Key Features

### Clients Carousel
- 6 artist cards, character-select depth effect
- Roles: center (large) → left1/right1 (medium, blur 2px) → left2/right2 (small, blur 4px) → back (hidden)
- Artist name: minimal white uppercase text centered on card (center card only)
- No ghost text background
- Click center card → modal with all works
- Arrows on left/right sides, keyboard navigation

### Services Accordion
- 6 services with expandable descriptions
- One open at a time, smooth grid-template-rows animation
- Plus icon rotates 45° to X when open

### Contact Form
- Formspree endpoint: `mzdwbgpr`
- Sends to: kiriacosvrasmatas@gmail.com
- Fields: name, email, project type (select), message
- States: loading → success / error

### work.html
- Sections per artist + "Personal Projects" section
- Each thumbnail opens lightbox
- Click-to-zoom on all design images

---

## Git Strategy

### Branches
```
main                     ← Stable production
develop                  ← Active development
feature/major-restructure ← Current working branch
```

### Commit convention (Conventional Commits)
```
feat: new feature
fix: bug fix
style: CSS/visual changes
refactor: code restructure
docs: documentation
```

---

## Client Info

| | |
|---|---|
| **Name** | Kiriacos Vrasmatas |
| **Specialty** | Music graphic design — album covers, branding, art direction |
| **Profile** | Freelance, international clients |
| **Email** | kiriacosvrasmatas@gmail.com |
| **Instagram** | @kiriacospsd |
| **TikTok** | @kiriacospsd |
| **Behance** | behance.net/kiriacosvr |

### Pending from client
- Real artist names/photos for the 6 carousel slots
- Embed codes from Behance for the modal and work.html (agreed approach)
- Personal bio text (final version)

---

## Changelog

| Date | Version | Changes |
|------|---------|---------|
| 2026-05-17 | v1.0 | Initial setup, base structure, dark landing |
| 2026-05-17 | v1.1 | Identity: Kiriacos. Font → Helvetica. Palette → black/white/green |
| 2026-05-17 | v1.2 | Full English. Carousel 3×2 grid → character-select. work.html. Real contact info |
| 2026-05-17 | v1.3 | Lightbox, same-tab work navigation, square images |
| 2026-05-17 | v1.4 | Light theme (#f7f6f1 bg). Services section with accordion. About photo real |
| 2026-05-18 | v1.5 | Titles single-line nowrap, tripled heading size (clamp 5–9rem). Ghost text removed from carousel. Minimal artist name on card. Formspree connected |

---

*Last updated: 2026-05-18 v1.5 — Claude Code*
