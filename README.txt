# &lt;CassandraArcilla/&gt; — Personal Portfolio

> A personal portfolio website for **Cassandra Aubrey R. Arcilla** — UI/UX Designer & Frontend Developer based in Angeles City, Philippines.

---

## Overview

A multi-page personal portfolio showcasing projects, skills, certifications, and contact information. Built with a dark/maroon aesthetic featuring smooth animations, a theme toggle (dark/light mode), and an interactive animated code card powered by React.

---

## Live Pages

| Page | Description |
|------|-------------|
| `home/home.html` | Hero section, animated React code card, services overview |
| `about/about.html` | Bio, skill tabs, certifications with View More toggle |
| `projects/projects.html` | Project cards with modal details, image previews, live & code links |
| `resume/resume.html` | Embedded PDF resume viewer |
| `contact/contact.html` | Working contact form via EmailJS, social links, FAQ |

---

## Tech Stack

### Core
| Technology | Role |
|------------|------|
| **HTML5** | Page structure and semantic markup across all pages |
| **CSS3** | Custom styling, animations, CSS variables for theming |
| **Vanilla JavaScript (ES6+)** | Interactivity, scroll effects, modal system, theme toggle, typewriter |

### Frameworks & Libraries

#### Bootstrap 5.3
- Loaded via CDN: `cdn.jsdelivr.net/npm/bootstrap@5.3.3`
- Used for: responsive grid layout, navbar, collapsible components, utility classes
- Applied across all pages for consistent layout and responsiveness

#### React 18 *(Homepage — Code Card Component only)*
- Loaded via CDN: `unpkg.com/react@18` + `unpkg.com/react-dom@18`
- Transpiled in-browser using **Babel Standalone**
- Powers the animated typing code card on the homepage (`#react-code-card`)
- Features: character-by-character typewriter, syntax token highlighting, glitch effect, floating animation, line number display, live status bar

> **Note:** React is not used as a full SPA framework. It powers one interactive component on the homepage. The rest of the site is standard multi-page HTML.

### Services & Tools

| Service | Purpose |
|---------|---------|
| **EmailJS** | Contact form email delivery (no backend needed) — `@emailjs/browser@4` |
| **Google Fonts** | Typography — Playfair Display, DM Mono, Lato |
| **Unsplash** | Placeholder project preview images in modals |

---

## Project Structure

```
cassandraarcilla-portfolio/
├── assets/
│   ├── shared.css          # Global styles, CSS variables, dark/light theme, navbar, footer, modal
│   └── shared.js           # Site-wide JS: theme toggle, scroll effects, modal, mobile drawer, toast
│
├── home/
│   ├── home.html           # Homepage with React animated code card
│   ├── home.css            # Hero, services, code card, CTA styles
│   └── home.js             # Typewriter, stat counters, fade-in animations
│
├── about/
│   ├── about.html          # Bio, skills tabs, certifications (with View More toggle)
│   ├── about.css           # About page styles
│   └── images/             # Profile photo, skill/soft-skill icons, certification icon
│
├── projects/
│   ├── projects.html       # Project cards with View Live / Code buttons
│   ├── projects.css        # Project card, badge, modal gallery styles
│   ├── projects.js         # Project data (slides, links, features), card click handlers
│   └── images/             # Logo
│
├── contact/
│   ├── contact.html        # Contact form, social links, FAQ accordion
│   ├── contact.css         # Form, info card, social button styles
│   └── contact.js          # EmailJS form submission handler
│
├── resume/
│   ├── resume.html         # PDF viewer page
│   ├── resume.css          # Resume page styles
│   └── cassandra-arcilla-resume.pdf
│
└── README.md
```

---

## Features

### Theme Toggle
- Dark/Light mode switch embedded in the navbar as a pill toggle
- Moon icon (dark mode) → Sun icon (light mode) with smooth sliding thumb animation
- Navbar stays **dark in both modes** to preserve the white-maroon logo visibility
- Theme preference saved to `localStorage`
- Also accessible from the mobile drawer

### Animated React Code Card
- Renders a fake code editor with character-by-character typing
- Syntax-highlighted tokens (keywords, strings, props, comments)
- Line numbers, blinking cursor, macOS-style window chrome
- Floating idle animation + glitch effect on loop restart
- Status bar showing typing/ready state

### Project Modal System
- Click any project card → full-screen modal with image gallery
- 5 image slides per project with fade transition on dot click
- View Live and View Code (GitHub) buttons per project
- Fully keyboard accessible (Escape to close)

### Contact Form (EmailJS)
To activate real email sending, replace these placeholders in `contact/contact.js`:

```js
emailjs.init('YOUR_PUBLIC_KEY');        // From EmailJS Account > API Keys
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
```

Sign up at [emailjs.com](https://www.emailjs.com) → create a Gmail service → create a template → copy the IDs.

The template should use these variables:
- `{{from_name}}` — sender's name
- `{{from_email}}` — sender's email
- `{{subject}}` — message subject
- `{{message}}` — message body

### Certifications (View More)
- First 3 certifications are shown by default
- "View More Certifications" button reveals the remaining entries
- Each certification has a **View Certificate** button (update URLs in `about.html`)

---

## Color Palette

| Variable | Value | Use |
|----------|-------|-----|
| `--black` | `#0a0a0b` | Page background (dark) |
| `--maroon` | `#7b1422` | Primary brand color |
| `--maroon-lite` | `#c42040` | Accents, active links |
| `--cream` | `#f5ede8` | Body text (dark mode) |
| `--white` | `#ffffff` | Headings (dark mode) |

---

## Typography

| Font | Weight | Use |
|------|--------|-----|
| **Playfair Display** | 400, 700, 900 | Section headings, hero title |
| **DM Mono** | 300, 400, 500 | Nav links, buttons, code, labels |
| **Lato** | 300, 400, 700 | Body text, descriptions |

---

## Getting Started

This is a **static website** — no build step or server required.

1. Download and extract the zip
2. Open any `.html` file directly in your browser, or serve locally:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

3. Navigate to `http://localhost:8000/home/home.html`

---

## Customization Checklist

- [ ] Replace `YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID` in `contact/contact.js`
- [ ] Update certificate URLs in `about/about.html` (search for `placeholder`)
- [ ] Replace Unsplash placeholder images in `projects/projects.js` with real screenshots
- [ ] Update GitHub and social media links in `projects.html` and `contact.html`
- [ ] Update Figma live URL in `projects.js` for the Garage Cafe project

---

## Author

**Cassandra Aubrey R. Arcilla**
UI/UX Designer · Frontend Developer
Angeles City, Philippines
arcillacassandra009@gmail.com

---

*Built with HTML5, CSS3, JavaScript, Bootstrap 5, and React 18*