<CassandraArcilla />
Personal Portfolio Website

Cassandra Aubrey R. Arcilla
Aspiring Front-End Web Developer and UI/UX Designer
Angeles City, Philippines

Overview

This is a multi-page personal portfolio website showcasing projects, certifications, skills, resume, and contact information.

The site features a dark maroon aesthetic with advanced animation systems, interactive UI components, a dark/light theme toggle, and an animated React-powered code card on the homepage.

The project demonstrates:

Strong front-end architecture

Advanced CSS and JavaScript animations

UI/UX design implementation

Responsive layout design

Component-based thinking with React integration

Live Pages
Page	Description
home/home.html	Hero section with particle background and animated React code card
about/about.html	Profile section with orbit animation and certification filter
projects/projects.html	Project cards with modal gallery and external links
resume/resume.html	Timeline-style resume layout
contact/contact.html	Functional EmailJS contact form with FAQ
Tech Stack
Core Technologies

HTML5

CSS3

Vanilla JavaScript (ES6+)

Frameworks and Libraries

Bootstrap 5.3 (CDN)

React 18 (Homepage component only)

Babel Standalone

EmailJS

Google Fonts

Key Features
Animation System

Particle background with mouse interaction

Custom animated cursor

3D tilt service cards

Magnetic call-to-action buttons

Scroll reveal engine

Typewriter section headers

Floating badge cycle

Counter animations

Ripple click effects

Animated section accent lines

Dark and Light Mode

Navbar toggle switch

Theme preference stored in localStorage

Navbar remains dark in both modes

Warm white light mode background (#fdfaf7)

Fully responsive layout

Animated React Code Card

Character-by-character typing effect

Syntax highlighting

Line numbers

Glitch loop animation

Floating idle animation

Typing status indicator

macOS-style window header

Project Modal System

Full-screen modal display

Image gallery with thumbnail navigation

View Live and View Code buttons

ESC key and backdrop close support

Certification Filter System

Available on About and Resume pages.

Filter by issuer:

freeCodeCamp

Cisco

Simplilearn

HubSpot

Each category is color-coded for visual clarity.

Project Structure
cassandraarcilla-portfolio/
│
├── assets/
│   ├── shared.css
│   └── shared.js
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
│   └── projects.js
│
├── contact/
│   ├── contact.html
│   ├── contact.css
│   └── contact.js
│
├── resume/
│   ├── resume.html
│   ├── resume.css
│   └── cassandra-arcilla-resume.pdf
│
└── README.md
Contact Form Setup (EmailJS)

Open contact/contact.js and replace the following:

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

Required template variables:

{{from_name}}

{{from_email}}

{{subject}}

{{message}}

Set the destination email to:

arcillacassandra009@gmail.com

If credentials are not configured, the form automatically falls back to the system mail client.

Design System
Color Palette

Primary Brand:

#7b1422 (Maroon)

#c42040 (Accent)

#5c0f1a (Deep Maroon)

Dark Mode:

#0a0a0b

#111114

#1a1a1f

Light Mode:

#fdfaf7

#ffffff

Typography

Playfair Display — Headings

DM Mono — Navigation, buttons, code

Lato — Body text

Getting Started

This is a static website. No build tools required.

Option 1 — Python
python -m http.server 8000
Option 2 — Node
npx serve .

Then open:

http://localhost:8000/home/home.html
Customization Checklist

Add EmailJS credentials

Replace project screenshots

Update GitHub and social links

Replace resume PDF

Replace logo across all pages

Author

Cassandra Aubrey R. Arcilla
Aspiring Front-End Web Developer and UI/UX Designer
Angeles City, Philippines
arcillacassandra009@gmail.com