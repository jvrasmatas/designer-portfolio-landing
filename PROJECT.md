# Landing Page — Diseñador Gráfico

## Visión General

Landing page profesional para un diseñador gráfico independiente. El objetivo es transmitir personalidad creativa, generar confianza y convertir visitantes en clientes potenciales a través de un diseño elegante, minimalista y con alta carga visual.

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
--color-text:       #f0f0f0   /* Texto primario */
--color-text-muted: #777777   /* Texto secundario / labels */
--color-accent:     #e8ff3b   /* Amarillo eléctrico — CTA y acentos */
--color-accent-alt: #ffffff   /* Blanco para contraste */
```

### Tipografía
```
--font-display: 'Syne', sans-serif        /* Headlines bold, carácter fuerte */
--font-body:    'Inter', sans-serif       /* Cuerpo legible y neutro */

Escala:
  - Hero heading:   clamp(4rem, 10vw, 9rem) — impacto visual
  - H2 sección:     clamp(2.5rem, 5vw, 4.5rem)
  - H3 cards:       1.5rem – 2rem
  - Body:           1rem / line-height 1.6
  - Labels/caps:    0.75rem uppercase letter-spacing 0.15em
```

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

### 3. `#portfolio` — Portafolio
- Grid 2-3 columnas responsive
- Filtro por categoría: Branding / Editorial / Digital / Motion
- Cards con: imagen de proyecto, nombre, categoría, año
- Hover: overlay oscuro + título aparece + flecha de enlace
- Click: modal o redirección a página de proyecto (placeholder de momento)
- 6-8 proyectos de ejemplo (con imágenes placeholder de calidad)

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

- El diseñador gráfico aún no proporcionó su nombre, bio, ni proyectos reales → se usan placeholders
- Las imágenes de portafolio serán de alta calidad (Unsplash/placeholder) hasta que el cliente entregue assets
- El formulario de contacto usará un servicio estático (Formspree o EmailJS) ya que no hay backend
- Posibilidad futura: agregar sección de testimonios y blog

---

## Recursos y Referencias

- **Inspiración:** https://fabrica.framer.media/studio
- **Fuentes:** https://fonts.google.com (Inter + Syne)
- **Íconos:** https://lucide.dev
- **Placeholders imágenes:** https://unsplash.com
- **Convención commits:** https://www.conventionalcommits.org

---

*Última actualización: 2026-05-17 — Claude Code (diseñador senior)*
