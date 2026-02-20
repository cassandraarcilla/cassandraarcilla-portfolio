// projects.js — project data and card interactions

window.projectsData = {
  barangay: {
    title:    'Barangay Information System',
    subtitle: 'Full-stack web application · Group Project',
    label:    'Barangay System',
    gradient: 'linear-gradient(135deg,#0d1a2e,#1a3a5c)',
    slides: [
      { label: 'Dashboard View',      gradient: 'linear-gradient(135deg,#0d1a2e,#1a3a5c)', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&q=80' },
      { label: 'Resident Portal',     gradient: 'linear-gradient(135deg,#0a1520,#152d48)', img: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=450&fit=crop&q=80' },
      { label: 'Admin Panel',         gradient: 'linear-gradient(135deg,#081018,#10243a)', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&q=80' },
      { label: 'Service Request Form',gradient: 'linear-gradient(135deg,#0d1a2e,#1a3a5c)', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=450&fit=crop&q=80' },
      { label: 'Records Management',  gradient: 'linear-gradient(135deg,#0a1520,#152d48)', img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=450&fit=crop&q=80' },
    ],
    desc: 'A web application for managing barangay services and resident information. Residents can register, log in, and access barangay services online, while barangay officials manage records through a secure admin dashboard.',
    features: [
      'Resident registration and login system',
      'Online service request and tracking',
      'Admin dashboard for records management',
      'Role-based access control',
      'Responsive design for all devices',
    ],
    tech: ['Vue 3', 'Vite', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: null,
    codeUrl: 'https://github.com/cassandra-arcilla',
  },
  garage: {
    title:    'Garage Cafe Mockup',
    subtitle: 'UI/UX Design · Figma Prototype · Group Project',
    label:    'Garage Cafe',
    gradient: 'linear-gradient(135deg,#2d1a0a,#5c3010)',
    slides: [
      { label: 'Landing Page', gradient: 'linear-gradient(135deg,#2d1a0a,#5c3010)', img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=450&fit=crop&q=80' },
      { label: 'Menu Screen',  gradient: 'linear-gradient(135deg,#241507,#4a2508)', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=450&fit=crop&q=80' },
      { label: 'About Section',gradient: 'linear-gradient(135deg,#1c1005,#3a1c06)', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=450&fit=crop&q=80' },
      { label: 'Order Flow',   gradient: 'linear-gradient(135deg,#2d1a0a,#5c3010)', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=450&fit=crop&q=80' },
      { label: 'Mobile View',  gradient: 'linear-gradient(135deg,#241507,#4a2508)', img: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=800&h=450&fit=crop&q=80' },
    ],
    desc: 'A high-fidelity Figma mockup for Garage Café — a community-driven coffee shop in Mabalacat City, Pampanga. The design captures an industrial-inspired aesthetic while keeping the experience warm and inviting.',
    features: [
      'High-fidelity Figma prototype',
      'Industrial-inspired visual theme',
      'Complete menu and ordering flow',
      'Mobile-first responsive layouts',
      'Interactive component library',
    ],
    tech: ['Figma', 'UI/UX Design', 'Prototyping'],
    liveUrl: 'https://www.figma.com/proto/placeholder',
    codeUrl: null,
  },
  dailycup: {
    title:    'Daily Cup',
    subtitle: 'Frontend website · Static HTML/CSS',
    label:    'Daily Cup Cafe',
    gradient: 'linear-gradient(135deg,#1a0d00,#3d2000)',
    slides: [
      { label: 'Home Page',    gradient: 'linear-gradient(135deg,#1a0d00,#3d2000)', img: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&h=450&fit=crop&q=80' },
      { label: 'Menu Page',    gradient: 'linear-gradient(135deg,#130a00,#301900)', img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&h=450&fit=crop&q=80' },
      { label: 'About Section',gradient: 'linear-gradient(135deg,#1a0d00,#3d2000)', img: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&h=450&fit=crop&q=80' },
      { label: 'Contact Page', gradient: 'linear-gradient(135deg,#130a00,#301900)', img: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=450&fit=crop&q=80' },
      { label: 'Mobile View',  gradient: 'linear-gradient(135deg,#1a0d00,#3d2000)', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop&q=80' },
    ],
    desc: 'A cozy cafe website for Daily Cup — a local evening haven in EPZA, Pulung Cacutud, Angeles City. The site showcases the menu, ambiance, and contact information with a warm, welcoming visual style.',
    features: [
      'Clean responsive layout',
      'Menu showcase with categories',
      'Contact and location section',
      'Warm color palette and typography',
    ],
    tech: ['HTML5', 'CSS3'],
    liveUrl: null,
    codeUrl: 'https://github.com/cassandra-arcilla',
  },
};

// Make entire card clickable (excluding button/link clicks)
document.querySelectorAll('.project-card[data-project]').forEach(card => {
  card.addEventListener('click', function (e) {
    if (e.target.closest('button') || e.target.closest('a')) return;
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
