// projects.js — project data, card gallery, and modal

window.projectsData = {

  barangay: {
    title:    'Barangay Information System',
    subtitle: 'Full-stack Web Application · Group Project',
    label:    'Barangay System',
    gradient: 'linear-gradient(135deg,#0d1a2e,#1a3a5c)',
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
    desc: 'A web application for managing barangay services and resident information. Residents can register, log in, and access barangay services online, while barangay officials manage records through a secure admin dashboard.',
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
    slides: [
      { label: 'Home Page',    img: 'images/garage-cafe/home.jpg' },
      { label: 'Menu',         img: 'images/garage-cafe/menu.jpg' },
      { label: 'About',        img: 'images/garage-cafe/about.jpg' },
      { label: 'Gallery',      img: 'images/garage-cafe/blog.jpg' },
      { label: 'Contact',      img: 'images/garage-cafe/contact.jpg' },
    ],
    desc: 'A community-driven coffee shop website for Garage Café in Mabalacat City, Pampanga. Features an industrial-inspired aesthetic with full menu showcase, photo gallery, and contact sections.',
    features: [
      'Responsive multi-page layout',
      'Interactive menu showcase',
      'Photo gallery section',
      'Contact and location info',
      'Industrial-inspired visual theme',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: null,
    codeUrl: 'https://github.com/cassandraarcilla/Garage_Cafe_Code.git',
  },

  dailycup: {
    title:    'Daily Cup',
    subtitle: 'Frontend Website · Static HTML/CSS',
    label:    'Daily Cup Cafe',
    gradient: 'linear-gradient(135deg,#1a0d00,#3d2000)',
    slides: [
      { label: 'Landing Page', img: 'images/daily-cup/landing-page.jpg' },
      { label: 'Menu',      img: 'images/daily-cup/log in.jpg' },
      { label: 'About',     img: 'images/daily-cup/sign-up.jpg' },
      { label: 'Gallery',   img: 'images/daily-cup/features.jpg' },
      { label: 'Specials',  img: 'images/daily-cup/products.jpg' },
      { label: 'Events',    img: 'images/daily-cup/cart.jpg' },
      { label: 'Contact',   img: 'images/daily-cup/contact-us.jpg' },
    ],
    desc: 'A cozy cafe website for Daily Cup — a local evening haven in EPZA, Pulung Cacutud, Angeles City. The site showcases the menu, ambiance, gallery, and contact information with a warm, welcoming visual style.',
    features: [
      'Clean responsive multi-page layout',
      'Menu showcase with categories',
      'Photo gallery section',
      'Events and specials pages',
      'Contact and location section',
    ],
    tech: ['HTML5', 'CSS3'],
    liveUrl: null,
    codeUrl: 'https://github.com/cassandraarcilla/DAILY_CUP',
  },

  cinema: {
    title:    'Cinema Ticket Management System',
    subtitle: 'Web Application · PHP · Solo Project',
    label:    'Cinema Ticket System',
    gradient: 'linear-gradient(135deg,#1a0a1e,#3d1050)',
    slides: [
      { label: 'Home Page',      img: 'images/cinema-ticket/home.jpg' },
      { label: 'Movies',         img: 'images/cinema-ticket/movies.jpg' },
      { label: 'Seat Selection', img: 'images/cinema-ticket/seat-selection.jpg' },
      { label: 'Booking',        img: 'images/cinema-ticket/booking.jpg' },
    ],
    desc: 'A web-based cinema ticket management system built with PHP. Users can browse currently showing movies, select available seats, and complete ticket bookings through an intuitive and responsive interface.',
    features: [
      'Movie listing and showtimes management',
      'Interactive seat selection map',
      'Online booking and reservation system',
      'Admin panel for managing movies and bookings',
      'Responsive layout for all devices',
    ],
    tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    liveUrl: null,
    codeUrl: 'https://github.com/cassandra-arcilla',
  },

  studentrecord: {
    title:    'Basic Student Record Management',
    subtitle: 'Desktop Application · Java · Solo Project',
    label:    'Student Record System',
    gradient: 'linear-gradient(135deg,#0a1a0a,#1a4020)',
    slides: [
      { label: 'Dashboard',    img: 'images/student-record/dashboard.jpg' },
      { label: 'Student List', img: 'images/student-record/student-list.jpg' },
      { label: 'Add Student',  img: 'images/student-record/add-student.jpg' },
      { label: 'Records',      img: 'images/student-record/records.jpg' },
      { label: 'Search',       img: 'images/student-record/search.jpg' },
    ],
    desc: 'A Java-based desktop application for managing student records. Allows administrators to add, update, delete, and search student information with a functional GUI connected to a MySQL database via JDBC.',
    features: [
      'Add, edit, and delete student records',
      'Search and filter by name or ID',
      'MySQL database integration via JDBC',
      'Clean and functional Swing GUI',
      'Data validation and error handling',
    ],
    tech: ['Java', 'MySQL', 'JDBC', 'Swing'],
    liveUrl: null,
    codeUrl: 'https://github.com/cassandraarcilla/Basic-Student-Record-Management.git',
  },

  engenehub: {
    title:    'EngeneHub WordPress Site',
    subtitle: 'WordPress Website · Solo Project',
    label:    'EngeneHub',
    gradient: 'linear-gradient(135deg,#0a0a1e,#1a1a4a)',
    slides: [
      { label: 'Home Page', img: 'images/engenehub/home.jpg' },
      { label: 'About',     img: 'images/engenehub/about.jpg' },
      { label: 'Blog',      img: 'images/engenehub/blog.jpg' },
      { label: 'Gallery',   img: 'images/engenehub/gallery.jpg' },
      { label: 'Contact',   img: 'images/engenehub/contact.jpg' },
    ],
    desc: 'A fully designed and published WordPress website for EngeneHub. Built with a modern layout including a home page, blog, gallery, and contact sections — customized using WordPress tools and themes.',
    features: [
      'Custom WordPress theme and layout',
      'Blog with posts and categories',
      'Photo gallery section',
      'Contact and inquiry form',
      'Fully published and live on the web',
    ],
    tech: ['WordPress', 'CSS3', 'Elementor'],
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
            mainImg.src     = s.img || '';
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