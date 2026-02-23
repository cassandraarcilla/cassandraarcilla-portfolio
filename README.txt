# &lt;CassandraArcilla/&gt; — Personal Portfolio

> A personal portfolio website for **Cassandra Aubrey R. Arcilla** — Aspiring Front-End Web Developer & UI/UX Designer based in Angeles City, Philippines.

---

## Overview

A multi-page personal portfolio showcasing projects, skills, certifications, and contact information. Built with a dark/maroon aesthetic featuring an extensive animation system, custom cursor, particle effects, a theme toggle (dark/light mode), and an interactive animated code card powered by React.

---

## Live Pages

| Page | Description |
|------|-------------|
| `home/home.html` | Hero with particle canvas, animated React code card, floating badges, services with 3D tilt |
| `about/about.html` | Bio with orbit rings on profile, skill tabs with staggered tag animations, 12 certifications with filter |
| `projects/projects.html` | Project cards with gallery thumbnails, modal system, live & code links |
| `resume/resume.html` | Timeline-style education/certification layout with animated left bars |
| `contact/contact.html` | Working EmailJS contact form, social links, FAQ accordion |

---

## Tech Stack

### Core
| Technology | Role |
|------------|------|
| **HTML5** | Page structure and semantic markup across all pages |
| **CSS3** | Custom styling, animations, CSS variables for theming, light/dark mode |
| **Vanilla JavaScript (ES6+)** | Animation engine, scroll effects, modal system, theme toggle, typewriter, particles |

### Frameworks & Libraries

#### Bootstrap 5.3
- Loaded via CDN: `cdn.jsdelivr.net/npm/bootstrap@5.3.3`
- Used for: responsive grid layout, navbar, collapsible components, utility classes

#### React 18 *(Homepage — Code Card Component only)*
- Loaded via CDN: `unpkg.com/react@18` + `unpkg.com/react-dom@18`
- Transpiled in-browser using **Babel Standalone**
- Powers the animated typing code card on the homepage (`#react-code-card`)
- Features: character-by-character typewriter, syntax highlighting, glitch effect, floating animation, line numbers, status bar

### Services & Tools

| Service | Purpose |
|---------|---------|
| **EmailJS** | Contact form email delivery — `@emailjs/browser@4` |
| **Google Fonts** | Playfair Display, DM Mono, Lato |

---

## Project Structure

```
cassandraarcilla-portfolio/
├── assets/
│   ├── shared.css          # Global styles, CSS variables, theme system, navbar, footer,
│   │                       # modal, animation utilities (reveal variants, stagger, ripple)
│   └── shared.js           # Site-wide JS: theme toggle, scroll effects, modal, mobile
│                           # drawer, toast, unified animation engine (10 systems)
│
├── home/
│   ├── home.html           # Homepage — hero grid, scan line, floating badges
│   ├── home.css            # Particle canvas, custom cursor, hero animations,
│   │                       # service card 3D tilt, floating badge badges
│   └── home.js             # 11 animation systems (particles, cursor, tilt, magnetic
│                           # buttons, char reveal, badge cycle, parallax, counters)
│
├── about/
│   ├── about.html          # Bio, orbit-ring photo, skill tabs, 12 certifications
│   ├── about.css           # Spinning orbit rings, dot constellation, slide-in text,
│   │                       # skill group hover bar, cert card shimmer
│   └── images/             # Profile photo, skill icons, contact icons
│
├── projects/
│   ├── projects.html       # Project cards with gallery thumbnail strip
│   ├── projects.css        # Card 3D hover, light mode overrides, badge styles
│   └── projects.js         # Project data (slides, links, features), modal handlers
│
├── contact/
│   ├── contact.html        # Contact form, social links, FAQ accordion
│   ├── contact.css         # Animated label focus, field underline indicator,
│   │                       # info card top-border reveal, social button lift
│   └── contact.js          # EmailJS form handler with mailto fallback
│
├── resume/
│   ├── resume.html         # Timeline layout with education & certifications
│   ├── resume.css          # Animated left bar on cards, shimmer on hover,
│   │                       # cert filter system, download button shimmer
│   └── cassandra-arcilla-resume.pdf
│
└── README.md
```

---

## Animation Systems

### Home Page (`home.js` + `home.css`)
| System | Description |
|--------|-------------|
| **Particle canvas** | 55 floating maroon particles with mouse repulsion and connection lines |
| **Custom cursor** | Dot + lagging ring that grows on interactive element hover |
| **Hero grid** | Subtle dot-grid background with radial mask fade |
| **Scan line** | Glowing horizontal line sweeps down the hero on loop |
| **Char-by-char title** | Each letter in the hero title reveals with a 3D rotateX flip |
| **Staggered entrance** | Badge → sub → title → typewriter → desc → buttons → stats fade up sequentially |
| **3D service card tilt** | Cards tilt in perspective tracking mouse position |
| **Magnetic buttons** | CTA buttons softly follow cursor within their bounds |
| **Floating badges** | 3 pill tags around the code card bob and cycle text every 3s |
| **CTA parallax** | CTA section background shifts on scroll |
| **Stat counters** | Numbers count up with ease-out easing when scrolled into view |

### All Pages (`shared.js` + `shared.css`)
| System | Description |
|--------|-------------|
| **Scroll reveal** | `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale` with sibling stagger |
| **Click ripple** | Maroon ripple effect on all cards, certs, FAQ items, resume items |
| **Eyebrow typewriter** | Section labels (`Portfolio`, `What I Do`, etc.) type themselves in on scroll |
| **Section accent lines** | Animated maroon gradient line auto-inserts above every section title |
| **Section fade-in** | Entire sections fade in as they enter the viewport |
| **Skill tag stagger** | Tags animate in one-by-one; re-triggers on tab switch |
| **Stagger children** | Generic stagger container for any list of elements |

### About Page
- Spinning + counter-spinning orbit rings around profile photo
- Profile image zoom and shadow deepen on hover
- 5 decorative dots pop in around the photo
- Slide-in-right entrance for name, role, bio, contacts
- Contact rows highlight on hover with icon bounce
- Skill group top-border sweeps in on hover

### Resume Page
- Left accent bar grows from top to bottom when card enters viewport
- Resume cards shift right + shimmer sweep on hover
- Download button has light shimmer on hover
- Cert "View ↗" links nudge right on hover

### Contact Page
- Input fields scale up subtly on focus
- Labels switch to maroon when their field is focused
- Animated underline grows under focused field
- Info cards get a top-border gradient on hover
- Social buttons lift up with maroon border on hover

---

## Features

### Theme Toggle
- Dark/Light mode switch in the navbar as a pill toggle
- Navbar stays **dark in both modes** — only link text colors change in light mode
- Comprehensive light mode: warm white (`#fdfaf7`) with white cards and subtle shadows
- Theme preference saved to `localStorage`
- Accessible from both navbar and mobile drawer

### Animated React Code Card
- Character-by-character typing with variable speed
- Syntax-highlighted tokens (keywords, strings, props, comments, types)
- Line numbers, blinking cursor, macOS-style window chrome
- Floating idle animation + glitch effect on loop restart
- Live status bar showing typing/ready state
- Surrounded by 3 floating badge labels that cycle text

### Project Modal System
- Click any project card → full-screen modal with image gallery
- Side thumbnail strip for multiple slides per project
- View Live and View Code (GitHub) buttons
- Escape key or backdrop click to close

### Certification Filter System
- Present on both About and Resume pages
- Filter by issuer: freeCodeCamp (cyan), Cisco (blue), Simplilearn (orange), HubSpot (coral)
- Color-coded SVG icons per issuer category
- 12 certifications total with real certificate URLs

### Contact Form (EmailJS)
Replace these three placeholders in `contact/contact.js`:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // EmailJS Dashboard → Email Services
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // EmailJS Dashboard → Email Templates
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // EmailJS Account → API Keys
```

**EmailJS template variables:**
- `{{from_name}}` — sender's name
- `{{from_email}}` — sender's email
- `{{subject}}` — message subject
- `{{message}}` — message body
- Set "To Email" → `arcillacassandra009@gmail.com`

Until credentials are added, the form falls back to opening the system email client automatically.

---

## Color Palette

| Variable | Value | Use |
|----------|-------|-----|
| `--black` | `#0a0a0b` | Page background (dark) |
| `--black-2` | `#111114` | Card backgrounds |
| `--black-3` | `#1a1a1f` | Deeper card / hover backgrounds |
| `--maroon` | `#7b1422` | Primary brand color |
| `--maroon-lite` | `#c42040` | Accents, active links, highlights |
| `--maroon-deep` | `#5c0f1a` | CTA strip, deep shadows |
| `--cream` | `#f5ede8` | Body text (dark mode) |
| `--gray-mid` | `#8a8090` | Muted text, placeholders |

**Light mode overrides** (applied via `body.light`)

| Variable | Value | Use |
|----------|-------|-----|
| `--black` | `#fdfaf7` | Warm white page background |
| `--black-2` | `#ffffff` | White card backgrounds |
| `--cream` | `#1c1117` | Body text (light mode) |
| `--gray-mid` | `#6b5868` | Muted text (light mode) |

---

## Typography

| Font | Weight | Use |
|------|--------|-----|
| **Playfair Display** | 400, 700, 900 | Section headings, hero title, card titles |
| **DM Mono** | 300, 400, 500 | Nav links, buttons, labels, code, eyebrows |
| **Lato** | 300, 400, 700 | Body text, descriptions, form inputs |

---

## Certifications (12 total)

| Issuer | Certificates |
|--------|-------------|
| **freeCodeCamp** | Responsive Web Design · JS Algorithms & Data Structures · Back End & APIs |
| **Cisco** | Introduction to Networks · JavaScript Essentials 1 |
| **Simplilearn** | Graphic Design UI/UX · UI/UX with ChatGPT · Design Thinking |
| **HubSpot** | Digital Marketing · Content Marketing · SEO · SEO II |

---

## Getting Started

Static website — no build step required.

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

Navigate to `http://localhost:8000/home/home.html`

---

## Customization Checklist

- [ ] Add EmailJS credentials in `contact/contact.js` (3 constants at the top)
- [ ] Replace project screenshot images in `projects/` folders
- [ ] Update GitHub/social links in `contact.html` and `projects.js`
- [ ] Add real resume PDF at `resume/cassandra-arcilla-resume.pdf`
- [ ] Replace `images/logo.png` with your actual logo on all pages

---

## Author

**Cassandra Aubrey R. Arcilla**
Aspiring Front-End Web Developer · UI/UX Designer
Angeles City, Philippines
arcillacassandra009@gmail.com

---

*Built with HTML5, CSS3, Vanilla JavaScript, Bootstrap 5.3, and React 18*