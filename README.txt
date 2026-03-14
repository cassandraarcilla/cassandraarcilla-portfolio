# &lt;CassandraArcilla /&gt;

**Personal Portfolio Website**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![React](https://img.shields.io/badge/React_18-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![EmailJS](https://img.shields.io/badge/EmailJS-FF6B35?style=flat)](https://www.emailjs.com/)

> A multi-page personal portfolio built with vanilla HTML, CSS, and JavaScript — featuring advanced animations, a dark/light theme system, interactive project modals, and a functional contact form.

---

## Live Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `home/home.html` | Hero section with particle background and animated React code card |
| **About** | `about/about.html` | Profile, skills, education, and professional biography |
| **Projects** | `projects/projects.html` | Project cards with modal gallery, role badges, and contribution details |
| **Resume** | `resume/resume.html` | Timeline-style resume with downloadable PDF |
| **Contact** | `contact/contact.html` | EmailJS contact form with FAQ accordion |

---

## Key Features

### Animation System
- Particle background with mouse interaction
- Custom animated cursor
- 3D tilt service cards
- Magnetic call-to-action buttons
- Scroll reveal engine
- Typewriter section headers
- Floating badge cycle
- Counter animations
- Ripple click effects
- Animated section accent lines

### Dark / Light Theme
- Navbar toggle pill switch
- Theme preference stored in `localStorage`
- Navbar stays dark in both modes
- Warm white light mode (`#fdfaf7`) with full component coverage
- All pages fully responsive

### Animated React Code Card *(Homepage)*
- Character-by-character typing effect with syntax highlighting
- Line numbers and typing status indicator
- macOS-style window header
- Glitch loop and floating idle animations

### Project Modal System
- Full-screen overlay with backdrop blur
- Screenshot gallery with thumbnail strip navigation
- Role badge, contributions checklist, and features grid per project
- Live and GitHub links with ESC / backdrop close support

### Contact Form
- Powered by EmailJS with graceful `mailto:` fallback
- Character counter on the message field
- Field focus animations (maroon glow ring + progress bar)
- Animated success / error status messages

---

## Project Structure

```
cassandraarcilla-portfolio/
│
├── assets/
│   ├── shared.css          # Global styles, variables, navbar, footer
│   └── shared.js           # Shared JS (theme toggle, scroll reveal, cursor)
│
├── home/
│   ├── home.html
│   ├── home.css
│   └── home.js
│
├── about/
│   ├── about.html
│   ├── about.css
│   └── images/
│
├── projects/
│   ├── projects.html
│   ├── projects.css
│   └── projects.js         # Project data, gallery, and modal logic
│
├── contact/
│   ├── contact.html
│   ├── contact.css
│   └── contact.js          # EmailJS form handler
│
├── resume/
│   ├── resume.html
│   ├── resume.css
│   └── cassandra-arcilla-resume.pdf
│
└── README.md
```

---

## Getting Started

This is a **static website** — no build tools or package managers required.

**Option 1 — Python**
```bash
python -m http.server 8000
```

**Option 2 — Node**
```bash
npx serve .
```

Then open:
```
http://localhost:8000/home/home.html
```

---

## 📧 Contact Form Setup (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Set up a service and email template
3. Open `contact/contact.js` and replace the placeholder credentials:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
```

**Required template variables:**

| Variable | Value |
|----------|-------|
| `{{from_name}}` | Sender's name |
| `{{from_email}}` | Sender's email |
| `{{subject}}` | Message subject |
| `{{message}}` | Message body |

Set the destination email to `arcillacassandra009@gmail.com`.

> **Note:** If credentials are not configured, the form automatically falls back to the system mail client via `mailto:`.

---

## Design System

### Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| Maroon | `#7b1422` | Primary brand, borders, accents |
| Accent | `#c42040` | Highlights, hover states, badges |
| Deep Maroon | `#5c0f1a` | Gradients, deep backgrounds |
| Dark BG | `#0a0a0b` | Page background (dark mode) |
| Dark Surface | `#111114` | Card backgrounds |
| Dark Elevated | `#1a1a1f` | Elevated elements |
| Light BG | `#fdfaf7` | Page background (light mode) |
| Light Surface | `#ffffff` | Cards (light mode) |

### Typography

| Font | Usage |
|------|-------|
| **Playfair Display** | Headings, section titles |
| **DM Mono** | Navigation, labels, badges, code |
| **Lato** | Body text, paragraphs |

---

## Customization Checklist

- [ ] Add EmailJS credentials in `contact/contact.js`
- [ ] Replace project screenshots in `projects/images/`
- [ ] Update GitHub and social links across all pages
- [ ] Replace resume PDF in `resume/`
- [ ] Replace logo image across all pages
- [ ] Update personal info (name, location, phone, email) in all footers
- [ ] Add or update project data in `projects/projects.js`

---

## Author

**Cassandra Aubrey R. Arcilla**  
Frontend Web Developer · UI/UX Designer  
Angeles City, Philippines  
[arcillacassandra009@gmail.com](mailto:arcillacassandra009@gmail.com)