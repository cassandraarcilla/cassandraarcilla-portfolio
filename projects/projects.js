// projects.js — project data, card gallery, and modal

window.projectsData = {

  barangay: {
    title:    'Barangay Information System',
    subtitle: 'Full-stack Web Application · Group Project',
    label:    'Barangay System',
    gradient: 'linear-gradient(135deg,#0d1a2e,#1a3a5c)',
    roleTag:  'Group Leader · Backend Dev',
    roleColor: '#3b82f6',
    slides: [
      { label: 'Landing Page',   img: 'images/barangay-information-system/landing-page.jpg' },
      { label: 'Log in Portal',  img: 'images/barangay-information-system/log-in.jpg' },
      { label: 'Sign up',        img: 'images/barangay-information-system/sign-up.jpg' },
      { label: 'Home Dashboard', img: 'images/barangay-information-system/home.jpg' },
      { label: 'About',          img: 'images/barangay-information-system/about.jpg' },
      { label: 'Services',       img: 'images/barangay-information-system/service.jpg' },
      { label: 'Announcement',   img: 'images/barangay-information-system/announcement.jpg' },
      { label: 'Contact',        img: 'images/barangay-information-system/contact.jpg' },
      { label: 'My Account',     img: 'images/barangay-information-system/my-account.jpg' },
    ],
    desc: 'A full-stack web application for managing barangay services and resident information. Residents can register, log in, and request barangay services online, while officials manage records through a secure admin dashboard. Built to modernize local government operations and improve community accessibility.',
    role: 'Group Leader & Backend Developer',
    contributions: [
      'Led the team, coordinated task assignments, and managed project milestones from planning to deployment',
      'Architected and built the full REST API using Node.js and Express, handling all server-side logic',
      'Designed and implemented the MongoDB database schema for residents, services, and announcements',
      'Built secure authentication and role-based access control (resident vs. admin)',
      'Integrated backend API with the Vue 3 frontend developed by the team',
      'Conducted code reviews and resolved merge conflicts across the group repository',
    ],
    features: [
      'Resident registration and login system',
      'Online service request and tracking',
      'Admin dashboard for records management',
      'Announcements and community board',
      'Role-based access control',
      'Responsive design for all devices',
    ],
    tech: ['Vue 3', 'Vite', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: null,
    codeUrl: 'https://github.com/cassandraarcilla/6WCSERVER-Final-Project.git',
  },

  garage: {
    title:    'Garage Cafe',
    subtitle: 'Frontend Website · Group Project',
    label:    'Garage Cafe',
    gradient: 'linear-gradient(135deg,#2d1a0a,#5c3010)',
    roleTag:  'Group Leader · Frontend Dev',
    roleColor: '#f97316',
    slides: [
      { label: 'Home Page',    img: 'images/garage-cafe/home.jpg' },
      { label: 'Menu',         img: 'images/garage-cafe/menu.jpg' },
      { label: 'About',        img: 'images/garage-cafe/about.jpg' },
      { label: 'Gallery',      img: 'images/garage-cafe/blog.jpg' },
      { label: 'Contact',      img: 'images/garage-cafe/contact.jpg' },
    ],
    desc: 'A community-driven website for Garage Café — a real coffee shop in Mabalacat City, Pampanga. The site features an industrial-inspired aesthetic that reflects the cafe\'s brand identity, complete with a menu showcase, photo gallery, and contact sections. The live site is currently serving real visitors.',
    role: 'Group Leader & Frontend Developer',
    contributions: [
      'Led the project and delegated design and development tasks across the group',
      'Designed the overall visual direction, color palette, and industrial-inspired UI theme',
      'Developed the responsive multi-page layout using HTML5, CSS3, and JavaScript',
      'Built the interactive menu section and photo gallery with smooth transitions',
      'Collaborated with the client (Garage Café) to align design with their brand identity',
      'Deployed the final site and ensured cross-browser and mobile compatibility',
    ],
    features: [
      'Responsive multi-page layout',
      'Interactive menu showcase',
      'Photo gallery section',
      'Contact and location info',
      'Industrial-inspired visual theme',
      'Live production website',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'MongoDB', 'Express'],
    liveUrl: 'https://www.visitgaragecafe.com/',
    codeUrl: 'https://github.com/cassandraarcilla/Garage_Cafe_Code.git',
  },

  dailycup: {
    title:    'Daily Cup',
    subtitle: 'Frontend Website · Solo Project',
    label:    'Daily Cup Cafe',
    gradient: 'linear-gradient(135deg,#1a0d00,#3d2000)',
    roleTag:  'Solo — All Roles',
    roleColor: '#c42040',
    slides: [
      { label: 'Landing Page', img: 'images/daily-cup/landing-page.jpg' },
      { label: 'Log In',       img: 'images/daily-cup/log in.jpg' },
      { label: 'Sign Up',      img: 'images/daily-cup/sign-up.jpg' },
      { label: 'Features',     img: 'images/daily-cup/features.jpg' },
      { label: 'Products',     img: 'images/daily-cup/products.jpg' },
      { label: 'Cart',         img: 'images/daily-cup/cart.jpg' },
      { label: 'Contact',      img: 'images/daily-cup/contact-us.jpg' },
    ],
    desc: 'Daily Cup is a fully solo-built cafe website for a cozy local evening haven in EPZA, Pulung Cacutud, Angeles City. From wireframing to final deployment, every aspect — design, frontend code, backend logic, and database integration — was conceived and executed independently.',
    role: 'Solo Developer & Designer — Full Ownership',
    contributions: [
      'Designed the complete UI/UX from scratch — wireframes, color palette, typography, and layout',
      'Built all frontend pages: landing, log in, sign up, features, products, cart, and contact',
      'Implemented user authentication (login/signup) with session handling',
      'Built the product catalog and shopping cart with JavaScript',
      'Integrated a backend using Node.js/Express and connected a MongoDB database',
      'Handled all testing, debugging, and final deployment independently',
    ],
    features: [
      'Clean responsive multi-page layout',
      'User authentication — login & sign up',
      'Product catalog with categories',
      'Shopping cart functionality',
      'Contact and location section',
      'Live GitHub Pages deployment',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://cassandraarcilla.github.io/DAILY_CUP/',
    codeUrl: 'https://github.com/cassandraarcilla/DAILY_CUP',
  },

  cinema: {
    title:    'Cinema Ticket Management System',
    subtitle: 'Python CLI System · Solo Project',
    label:    'Cinema Ticket System',
    gradient: 'linear-gradient(135deg,#1a0a1e,#3d1050)',
    roleTag:  'Solo — All Roles',
    roleColor: '#a855f7',
    slides: [
      { label: 'Landing Page',          img: 'images/cinema-ticket-management-system/landing-page.jpg' },
      { label: 'Home / Menu',           img: 'images/cinema-ticket-management-system/menu.jpg' },
      { label: 'Book Seat',             img: 'images/cinema-ticket-management-system/book-seat.jpg' },
      { label: 'View Current Booking',  img: 'images/cinema-ticket-management-system/view-current-bookng.jpg' },
      { label: 'View Available Seats',  img: 'images/cinema-ticket-management-system/view-available-seats.jpg' },
      { label: 'Cancel Booking',        img: 'images/cinema-ticket-management-system/cancel-booking.jpg' },
    ],
    desc: 'A fully solo-built cinema ticket management system developed in Python. The application allows users to browse movies, view available seats, book tickets, manage current reservations, and cancel bookings — all through a structured, menu-driven interface.',
    role: 'Solo Developer — Full Ownership',
    contributions: [
      'Designed the entire system architecture and data flow independently',
      'Implemented all core features: booking, seat selection, viewing, and cancellation',
      'Built the seat availability tracking logic with real-time state updates',
      'Handled input validation, error handling, and edge cases throughout the system',
      'Designed the UI layout and navigation flow for a smooth user experience',
      'Wrote all documentation and conducted complete testing solo',
    ],
    features: [
      'Movie listing and showtimes display',
      'Interactive seat selection and booking',
      'View and manage current reservations',
      'Real-time seat availability tracking',
      'Booking cancellation system',
      'Input validation and error handling',
    ],
    tech: ['Python'],
    liveUrl: null,
    codeUrl: 'https://github.com/cassandraarcilla/Cinema-Ticket-Management-System.git',
  },

  engenehub: {
    title:    'Engene Hub',
    subtitle: 'WordPress Website · Solo Project',
    label:    'EngeneHub',
    gradient: 'linear-gradient(135deg,#0a0a1e,#1a1a4a)',
    roleTag:  'Solo — All Roles',
    roleColor: '#06b6d4',
    slides: [
      { label: 'Landing Page', img: 'images/engene-hub/landing-page.jpg' },
      { label: 'Home Page',    img: 'images/engene-hub/home.jpg' },
      { label: 'Blog',         img: 'images/engene-hub/blog.jpg' },
      { label: 'About',        img: 'images/engene-hub/about.jpg' },
      { label: 'Contact',      img: 'images/engene-hub/contact.jpg' },
    ],
    desc: 'A fully designed and published WordPress website for EngeneHub, built solo from the ground up. The site features a modern layout with a home page, blog, photo gallery, about section, and contact form — fully live and accessible on the web.',
    role: 'Solo Developer & Designer — Full Ownership',
    contributions: [
      'Selected, installed, and fully customized a WordPress theme to match the brand identity',
      'Designed all pages: home, blog, gallery, about, and contact from scratch',
      'Configured and customized WordPress plugins for functionality (forms, gallery, SEO)',
      'Created and structured all site content including blog posts and categories',
      'Optimized site performance, responsive layout, and cross-device compatibility',
      'Published and deployed the live site, managing domain and hosting settings',
    ],
    features: [
      'Custom WordPress theme and layout',
      'Blog with posts and categories',
      'Photo gallery section',
      'Contact and inquiry form',
      'SEO-optimized pages',
      'Fully published and live on the web',
    ],
    tech: ['WordPress'],
    liveUrl: 'https://engenehub.wordpress.com/home/',
    codeUrl: null,
  },

};

// ── Card thumbnail click → swap main image ───────────────────────
function initCardGalleries() {
  document.querySelectorAll('.project-card[data-project]').forEach(card => {
    const key    = card.dataset.project;
    const data   = window.projectsData[key];
    if (!data) return;
    const slides  = data.slides || [];
    const mainImg = card.querySelector('.card-main-img');
    const mainBg  = card.querySelector('.card-main-bg');
    const mainLbl = card.querySelector('.card-main-label');
    const thumbs  = card.querySelectorAll('.card-thumb');

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', e => {
        e.stopPropagation();
        const idx = parseInt(thumb.dataset.slide, 10);
        const s   = slides[idx];
        if (!s) return;

        if (mainImg) {
          mainImg.style.opacity = '0';
          setTimeout(() => {
            mainImg.src            = s.img || '';
            mainImg.style.display  = '';
            mainImg.style.opacity  = '1';
          }, 180);
        }
        if (mainBg)  mainBg.style.background = s.gradient || data.gradient || '';
        if (mainLbl) mainLbl.textContent      = s.label    || data.label;

        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  });
}

// ── Open project modal ────────────────────────────────────────────
function openProjectModal(data) {
  // Remove any existing modal
  const existing = document.getElementById('projectModal');
  if (existing) existing.remove();

  const isLight = document.body.classList.contains('light');

  // Build slides HTML
  const slidesHTML = (data.slides || []).map((s, i) => `
    <button class="modal-thumb ${i === 0 ? 'active' : ''}" data-idx="${i}" aria-label="${s.label}">
      <img src="${s.img}" alt="${s.label}" loading="lazy" onerror="this.parentElement.style.display='none'">
      <span class="modal-thumb-label">${s.label}</span>
    </button>
  `).join('');

  // Build tech tags
  const techHTML = (data.tech || []).map(t => `<span class="modal-tech-tag">${t}</span>`).join('');

  // Build features list
  const featuresHTML = (data.features || []).map(f => `<li>${f}</li>`).join('');

  // Build contributions list
  const contributionsHTML = (data.contributions || []).map(c => `<li>${c}</li>`).join('');

  // Role badge color
  const roleColor = data.roleColor || '#c42040';

  // Live / code buttons
  const liveBtn = data.liveUrl
    ? `<a href="${data.liveUrl}" target="_blank" rel="noopener" class="modal-action-btn modal-btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        View Live
      </a>` : '';

  const codeBtn = data.codeUrl
    ? `<a href="${data.codeUrl}" target="_blank" rel="noopener" class="modal-action-btn modal-btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        View Code
      </a>` : '';

  const firstSlide = (data.slides && data.slides[0]) ? data.slides[0] : {};

  const modal = document.createElement('div');
  modal.id = 'projectModal';
  modal.className = 'project-modal-overlay';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', data.title);

  modal.innerHTML = `
    <div class="project-modal-box">
      <button class="modal-close-btn" aria-label="Close modal">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      <!-- Header -->
      <div class="modal-header" style="background:${data.gradient};">
        <img class="modal-hero-img" src="${firstSlide.img || ''}" alt="${data.title}" onerror="this.style.display='none'">
        <div class="modal-header-overlay"></div>
        <div class="modal-header-content">
          <div class="modal-role-badge" style="background:${roleColor}22; border-color:${roleColor}55; color:${roleColor};">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            ${data.roleTag || data.role}
          </div>
          <h2 class="modal-title">${data.title}</h2>
          <p class="modal-subtitle">${data.subtitle}</p>
        </div>
      </div>

      <!-- Screenshot gallery strip -->
      ${data.slides && data.slides.length > 1 ? `
      <div class="modal-gallery-strip">
        <div class="modal-gallery-main-wrap">
          <img class="modal-gallery-main-img" src="${firstSlide.img || ''}" alt="${firstSlide.label || ''}">
          <span class="modal-gallery-main-label">${firstSlide.label || ''}</span>
        </div>
        <div class="modal-thumbs-row">${slidesHTML}</div>
      </div>` : ''}

      <!-- Body -->
      <div class="modal-body-content">

        <!-- Description -->
        <div class="modal-section">
          <div class="modal-section-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Description
          </div>
          <p class="modal-desc">${data.desc}</p>
        </div>

        <!-- Two-column: Role + Tech -->
        <div class="modal-two-col">
          <div class="modal-section">
            <div class="modal-section-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              My Role
            </div>
            <div class="modal-role-full" style="border-left-color:${roleColor};">${data.role}</div>
          </div>
          <div class="modal-section">
            <div class="modal-section-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              Technologies
            </div>
            <div class="modal-tech-wrap">${techHTML}</div>
          </div>
        </div>

        <!-- Contributions -->
        <div class="modal-section">
          <div class="modal-section-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            My Contributions
          </div>
          <ul class="modal-contributions-list">${contributionsHTML}</ul>
        </div>

        <!-- Features -->
        <div class="modal-section">
          <div class="modal-section-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Key Features
          </div>
          <ul class="modal-features-list">${featuresHTML}</ul>
        </div>

        <!-- Actions -->
        <div class="modal-actions-row">
          ${liveBtn}
          ${codeBtn}
        </div>

      </div><!-- /modal-body-content -->
    </div><!-- /modal-box -->
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Animate in
  requestAnimationFrame(() => modal.classList.add('modal-visible'));

  // Close handlers
  modal.querySelector('.modal-close-btn').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', onEscKey);

  // Gallery thumbnails in modal
  const modalMainImg = modal.querySelector('.modal-gallery-main-img');
  const modalMainLbl = modal.querySelector('.modal-gallery-main-label');
  modal.querySelectorAll('.modal-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.dataset.idx, 10);
      const s   = data.slides[idx];
      if (!s || !modalMainImg) return;
      modalMainImg.style.opacity = '0';
      setTimeout(() => {
        modalMainImg.src           = s.img;
        modalMainImg.style.opacity = '1';
        if (modalMainLbl) modalMainLbl.textContent = s.label;
      }, 150);
      modal.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.classList.remove('modal-visible');
  document.removeEventListener('keydown', onEscKey);
  setTimeout(() => {
    modal.remove();
    document.body.style.overflow = '';
  }, 300);
}

function onEscKey(e) {
  if (e.key === 'Escape') closeModal();
}

// ── Card click → open modal ──────────────────────────────────────
function initCardClicks() {
  document.querySelectorAll('.project-card[data-project]').forEach(card => {
    card.addEventListener('click', function (e) {
      if (e.target.closest('.card-thumb') || e.target.closest('.project-actions') || e.target.closest('a')) return;
      const key = this.dataset.project;
      if (window.projectsData[key]) openProjectModal(window.projectsData[key]);
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const key = this.dataset.project;
        if (window.projectsData[key]) openProjectModal(window.projectsData[key]);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCardGalleries();
  initCardClicks();
});