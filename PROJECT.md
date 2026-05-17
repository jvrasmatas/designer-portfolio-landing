# Landing Page — Kiriacos / Diseñador Gráfico Musical

## Visión General

Landing page profesional para **Kiriacos**, diseñador gráfico freelancer especializado en **diseño musical** — identidad visual para artistas, portadas, material promocional y branding para la industria de la música. Ha trabajado con artistas internacionales.

El objetivo es transmitir credibilidad en la industria musical, mostrar su trabajo con artistas relevantes y convertir visitas en nuevos clientes del sector.

**Inspiración principal:** [Fabrica® Studio](https://fabrica.framer.media/studio) — diseño limpio, tipografía bold, dark theme minimalista, estructurado y directo al grano.

---

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Markup | HTML5 semántico |
| Estilos | CSS3 (custom properties, Grid, Flexbox) |
| Interactividad | JavaScript vanilla (ES6+) |
| Fuentes | Google Fonts (Inter + una display font) |
| Íconos | Lucide Icons (SVG inline) |
| Animaciones | CSS transitions + Intersection Observer API |
| Control de versiones | Git + GitHub |

> **Sin frameworks pesados.** Performance-first. Cero dependencias de build.

---

## Dirección de Diseño

### Estética
- **Estilo:** Minimalista editorial con carácter oscuro
- **Tema:** Dark mode como base (fondo ~#0a0a0a o #111111)
- **Personalidad:** Sofisticado, creativo, directo, premium

### Paleta de Colores
```
--color-bg:         #0d0d0d   /* Negro profundo — fondo principal */
--color-bg-card:    #161616   /* Cards y superficies elevadas */
--color-border:     #222222   /* Bordes sutiles */
--color-text:       #ffffff   /* Texto primario — blanco puro */
--color-text-muted: #888888   /* Texto secundario / labels */
--color-accent:     #25632E   /* Verde — color de acento y CTA */
--color-accent-hover: #1d4f24 /* Verde oscuro — hover */
--color-accent-alt: #ffffff   /* Blanco para contraste */
```

> Paleta definida por el cliente: **negro + blanco + verde #25632E**. Sin amarillos ni colores previos.

### Tipografía
```
--font-display: 'Helvetica Neue', Helvetica, Arial, sans-serif   /* Todo el sitio */
--font-body:    'Helvetica Neue', Helvetica, Arial, sans-serif   /* Sin Google Fonts */

Escala:
  - Hero heading:   clamp(4rem, 10vw, 9rem) — impacto visual
  - H2 sección:     clamp(2.5rem, 5vw, 4.5rem)
  - H3 cards:       1.5rem – 2rem
  - Body:           1rem / line-height 1.6
  - Labels/caps:    0.75rem uppercase letter-spacing 0.15em
```

> Tipografía: **Helvetica Neue** en todo el sitio. Sin importar Google Fonts.

### Efectos Visuales
- Textura de grano sutil en el hero (CSS noise filter o SVG filter)
- Transiciones suaves: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — 300-600ms
- Hover en portfolio cards: scale + overlay con info
- Cursor personalizado (punto que sigue al mouse)
- Scroll reveal con Intersection Observer (fade-up)
- Líneas divisoras con gradiente (transparente → color → transparente)
- Navbar: blur backdrop-filter al hacer scroll

---

## Arquitectura de Secciones

### 1. `#home` — Hero
- Saludo corto (etiqueta) + nombre del diseñador en tipografía gigante
- Tagline de 1-2 líneas sobre especialidad
- Dos CTAs: "Ver portafolio" (primario) + "Hablar conmigo" (secundario)
- Estadísticas inline: años de experiencia, proyectos completados, clientes
- Imagen/foto del diseñador o elemento visual abstracto (composición tipográfica)
- Badge animado "Available for work" (dot parpadeante verde)

### 2. `#about` — Acerca de
- Layout: 50/50 — texto izquierda, visual derecha
- Párrafo de presentación personal (historia, filosofía de diseño)
- Lista de habilidades/servicios con íconos o bullets elegantes
- Stack/herramientas: Figma, Illustrator, Photoshop, After Effects, etc.
- Frases de filosofía en bloque destacado (quote style)
- CTA secundario: descarga CV o link a LinkedIn

### 3. `#projects` — Projects / Clients
- Grid 3 columns × 2 rows = 6 artist cards
- Each card: square photo. On hover → dark overlay + artist name + discipline slides up
- Click on card → modal popup with all designs for that artist (2-col grid inside modal)
- Below grid: "All my work" button → opens `work.html` in new tab

### work.html — All My Work (separate page)
- Same navbar/footer as index
- Organized by artist/project sections
- Each section: large artist name header + discipline tag + image grid (3-4 cols)
- Mimics YouTube channel page with sections

### 4. `#contact` — Contacto
- Headline directo: "¿Tienes un proyecto en mente?"
- Formulario: nombre, email, tipo de proyecto (select), mensaje
- Información de contacto lateral: email, redes sociales
- Botón de envío con feedback visual (estado loading + success)
- Nota de respuesta rápida (ej: "Respondo en menos de 24h")

### 5. Navbar
- Logo/nombre del diseñador a la izquierda
- Links de navegación a la derecha (Home, Acerca, Portafolio, Contacto)
- Botón CTA "Contactar" destacado
- Al scroll: se vuelve sticky con blur/glassmorphism
- En mobile: menú hamburguesa con overlay

### 6. Footer
- Copyright
- Links de navegación rápida
- Redes sociales
- "Diseñado y desarrollado por [nombre]"

---

## Animaciones Planificadas

| Elemento | Animación | Trigger |
|---------|-----------|---------|
| Hero headline | Slide up stagger por palabra | Page load |
| Estadísticas | Counter animado | Scroll into view |
| Portfolio cards | Fade + scale in | Scroll into view |
| Navbar | Blur + border aparece | Scroll > 80px |
| CTA buttons | Ripple effect | Click |
| Cursor | Punto que escala en hovers | Mouse move |
| About image | Parallax sutil | Scroll |

---

## Estructura de Archivos

```
/
├── PROJECT.md              ← Este archivo (contexto del proyecto)
├── index.html              ← Página principal
├── css/
│   ├── reset.css           ← Normalize/reset
│   ├── variables.css       ← Custom properties
│   ├── base.css            ← Tipografía y estilos base
│   ├── components.css      ← Botones, cards, badges
│   ├── layout.css          ← Grid y layout principal
│   ├── sections/
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── portfolio.css
│   │   └── contact.css
│   ├── navbar.css
│   ├── footer.css
│   └── animations.css      ← Keyframes y transiciones
├── js/
│   ├── main.js             ← Init y coordinación
│   ├── navbar.js           ← Scroll behavior, hamburger
│   ├── portfolio.js        ← Filtro y modal
│   ├── animations.js       ← Intersection Observer, counters
│   └── contact.js          ← Form validation y submit
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── portfolio/      ← 6-8 imágenes de proyectos
│   │   └── about/
│   └── icons/
└── .gitignore
```

---

## Control de Versiones — Estrategia Git

### Ramas
```
main          ← Producción estable
develop       ← Desarrollo activo
feature/*     ← Features individuales
fix/*         ← Bug fixes
```

### Convención de Commits (Conventional Commits)
```
feat: nueva funcionalidad
fix: corrección de bug
style: cambios de estilos/CSS
refactor: refactoring sin cambio funcional
docs: documentación
chore: tareas de configuración
```

### Ejemplos de commits esperados
```
feat: implement hero section with animated headline
style: add portfolio grid with hover effects
feat: add navbar scroll behavior
fix: mobile menu overlay z-index
```

---

## Tareas — Estado del Proyecto

### Por hacer
- [ ] Crear estructura de carpetas
- [ ] Configurar repositorio GitHub
- [ ] Crear index.html base
- [ ] Implementar variables CSS y reset
- [ ] Desarrollar sección Hero
- [ ] Desarrollar sección About
- [ ] Desarrollar sección Portfolio (grid + filtros)
- [ ] Desarrollar sección Contact (form + validación)
- [ ] Implementar Navbar responsive
- [ ] Implementar Footer
- [ ] Animaciones (scroll reveal, counters, cursor)
- [ ] Optimización de performance (lazy loading imágenes)
- [ ] Testing responsive (mobile, tablet, desktop)
- [ ] Accessibility (ARIA labels, contraste, focus states)
- [ ] SEO básico (meta tags, og:tags, favicon)
- [ ] Deploy (GitHub Pages o Netlify)

### En progreso
- [x] Análisis de página de inspiración
- [x] Definición de diseño y arquitectura

### Completado
- [x] Creación de PROJECT.md
- [x] Definición de stack tecnológico
- [x] Definición de paleta de colores y tipografía
- [x] Arquitectura de secciones

---

## Notas del Cliente / Decisiones de Diseño

### Cliente
- **Nombre:** Kiriacos
- **Especialidad:** Diseño gráfico musical — portadas, branding para artistas, material promocional
- **Perfil:** Freelancer con trayectoria internacional
- **Artistas reales:** Pendiente que el cliente entregue la lista de artistas y proyectos destacados

### Decisiones confirmadas
- **Tipografía:** Helvetica Neue exclusivamente — sin Google Fonts
- **Paleta:** Negro (#0d0d0d) + Blanco (#ffffff) + Verde (#25632E)
- **Sección Portafolio → Clientes:** lista editorial de artistas, no grid de trabajos
- El formulario de contacto usará un servicio estático (Formspree o EmailJS) — sin backend
- Las imágenes de artistas son placeholder hasta que el cliente entregue assets reales

### Real contact info (confirmed)
- **Email:** kiriacosvrasmatas@gmail.com
- **Instagram:** @kiriacospsd
- **TikTok:** @kiriacospsd

### Pending from client
- Real artist names and projects for the Clients grid (6 slots)
- Real work images per artist for the modal and work.html
- Personal photo for About section
- Final personal bio

---

## Recursos y Referencias

- **Inspiración:** https://fabrica.framer.media/studio
- **Tipografía:** Helvetica Neue (sistema) — sin dependencia externa
- **Íconos:** SVG inline — sin librerías externas
- **Placeholders imágenes:** https://unsplash.com
- **Convención commits:** https://www.conventionalcommits.org

---

## Changelog

| Date | Version | Changes |
|------|---------|---------|
| 2026-05-17 | v1.0 | Initial setup, base structure, full landing with placeholder "Alex Morán" |
| 2026-05-17 | v1.1 | Real identity: Kiriacos. Font → Helvetica. Palette → black/white/green. Portfolio → Clients (editorial list) |
| 2026-05-17 | v1.2 | Full English site. Navbar name larger. Hero → "Trust the process." Clients → 3×2 photo grid with hover overlay + modal per artist. "All my work" → separate work.html page (sections by artist + image grid). Real contact info added. |

---

*Last updated: 2026-05-17 v1.2 — Claude Code (senior designer)*
