// =============================================
// shared.js — site-wide interactions
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Ambient blob ───────────────────────────────────────────
  const blob = document.createElement('div');
  blob.className = 'ambient-blob';
  document.body.prepend(blob);

  // ── Scroll progress bar ────────────────────────────────────
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  document.body.prepend(progress);

  // ── Back-to-top ────────────────────────────────────────────
  const btt = document.createElement('button');
  btt.className = 'back-to-top';
  btt.setAttribute('aria-label', 'Back to top');
  btt.textContent = '↑';
  document.body.appendChild(btt);
  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ── Mobile slide drawer ────────────────────────────────────
  const backdrop = document.createElement('div');
  backdrop.className = 'mobile-backdrop';
  backdrop.id = 'mobileBackdrop';

  const drawer = document.createElement('nav');
  drawer.className = 'mobile-drawer';
  drawer.id = 'mobileDrawer';
  const page = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
  const links = [
    { page: 'home',     label: 'Home',     href: '../home/home.html' },
    { page: 'about',    label: 'About',    href: '../about/about.html' },
    { page: 'projects', label: 'Projects', href: '../projects/projects.html' },
    { page: 'resume',   label: 'Resume',   href: '../resume/resume.html' },
    { page: 'contact',  label: 'Contact',  href: '../contact/contact.html' },
  ];
  drawer.innerHTML = `
    <button class="mobile-drawer-close" id="mobileDrawerClose" aria-label="Close menu">✕</button>
    ${links.map(l => `<a href="${l.href}" data-page="${l.page}" class="drawer-link${l.page === page ? ' active' : ''}">${l.label}</a>`).join('')}
    <div class="drawer-theme-row">
      <span>Theme</span>
      <button class="theme-toggle-pill" id="themeToggleDrawer" aria-label="Toggle theme">
        <span class="toggle-track">
          <span class="toggle-icon toggle-icon-moon"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg></span>
          <span class="toggle-icon toggle-icon-sun"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/></svg></span>
          <span class="toggle-thumb"></span>
        </span>
      </button>
    </div>
  `;

  document.body.appendChild(backdrop);
  document.body.appendChild(drawer);

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Hook Bootstrap toggler to open drawer instead of collapse
  const toggler = document.querySelector('.navbar-toggler');
  if (toggler) {
    toggler.addEventListener('click', e => {
      e.preventDefault();
      e.stopImmediatePropagation();
      openDrawer();
    }, true);
  }

  document.getElementById('mobileDrawerClose').addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('.drawer-link').forEach(a => a.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

  // Drawer theme toggle (syncs with navbar toggle)
  const drawerThemeBtn = document.getElementById('themeToggleDrawer');
  if (drawerThemeBtn) {
    drawerThemeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light');
      const isLight = document.body.classList.contains('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }

});

// ── Scroll events ───────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total    = document.documentElement.scrollHeight - window.innerHeight;

  const bar = document.querySelector('.scroll-progress');
  if (bar) bar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';

  const btt = document.querySelector('.back-to-top');
  if (btt) btt.classList.toggle('visible', scrolled > 400);

  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', scrolled > 40);

}, { passive: true });

// ── Active nav link ─────────────────────────────────────────────
(function () {
  const p = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === p) link.classList.add('active');
  });
})();

// ── Theme toggle ────────────────────────────────────────────────
const themeBtn   = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light');
}
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// ── Toast helper ─────────────────────────────────────────────────
window.showToast = function (message, type) {
  let t = document.querySelector('.toast-notification');
  if (t) t.remove();
  t = document.createElement('div');
  t.className = 'toast-notification' + (type === 'success' ? ' toast-success' : '');
  t.innerHTML = `<span class="toast-icon">${type === 'success' ? '✓' : 'ℹ'}</span>${message}`;
  document.body.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 350);
  }, 3200);
};


// ── Project modal ─────────────────────────────────────────────────
window.openProjectModal = function (data) {
  const existing = document.getElementById('projectModalOverlay');
  if (existing) existing.remove();

  const slides  = data.slides || [];
  const first   = slides[0] || {};
  const bgStart = first.gradient || (data.gradient || 'linear-gradient(135deg,var(--black-3),var(--maroon-deep))');

  // Build side thumbnail strip (all slides)
  const thumbsHTML = slides.map((s, i) => `
    <button class="modal-side-thumb${i===0?' active':''}" data-idx="${i}" aria-label="${s.label||'Slide '+(i+1)}" title="${s.label||''}">
      ${s.img ? `<img src="${s.img}" alt="${s.label||''}" loading="lazy">` : `<div style="width:100%;height:100%;background:${s.gradient||bgStart};"></div>`}
      <span class="modal-side-thumb-label">${s.label||''}</span>
    </button>`).join('');

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'projectModalOverlay';
  overlay.innerHTML = `
    <div class="modal-box" role="dialog" aria-modal="true">
      <button class="modal-close-btn" id="modalCloseBtn" aria-label="Close">&#x2715;</button>
      <div class="modal-gallery">
        <div class="modal-gallery-inner">
          <div class="modal-gallery-main" style="position:relative;overflow:hidden;flex:1;min-width:0;">
            <div class="modal-gallery-bg" id="mgBg" style="position:absolute;inset:0;background:${bgStart};transition:background 0.35s;z-index:0;"></div>
            ${first.img ? `<img id="mgImg" src="${first.img}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.88;transition:opacity 0.3s;z-index:1;" onerror="this.style.display='none'">` : '<div id="mgImg" style="display:none"></div>'}
            <span class="modal-gallery-label" id="mgLabel" style="position:absolute;bottom:12px;left:12px;z-index:2;">${first.label||data.label||''}</span>
          </div>
          ${slides.length > 1 ? `<div class="modal-side-thumbs">${thumbsHTML}</div>` : ''}
        </div>
      </div>
      <div class="modal-body">
        <div class="modal-main">
          <h2 class="modal-title">${data.title}</h2>
          <p class="modal-subtitle">${data.subtitle||''}</p>
          <p class="modal-desc">${data.desc}</p>
          ${(data.features||[]).length ? `
            <div class="modal-features">
              <h4>Key Features</h4>
              <ul class="modal-feature-list">
                ${data.features.map(f=>`<li>${f}</li>`).join('')}
              </ul>
            </div>` : ''}
        </div>
        <div class="modal-sidebar-panel">
          <div>
            <div class="modal-sidebar-heading">Stack</div>
            <div class="modal-tech-tags">${(data.tech||[]).map(t=>`<span class="modal-tech-tag">${t}</span>`).join('')}</div>
          </div>
          ${(data.liveUrl||data.codeUrl)?`<div>
            <div class="modal-sidebar-heading">Links</div>
            <div style="display:flex;flex-direction:column;gap:.5rem">
              ${data.liveUrl?`<a href="${data.liveUrl}" target="_blank" rel="noopener" class="modal-link-btn primary">&#x2197; View Live</a>`:''}
              ${data.codeUrl?`<a href="${data.codeUrl}" target="_blank" rel="noopener" class="modal-link-btn ghost"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="margin-right:5px;vertical-align:-1px"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>View Code</a>`:''}
            </div>
          </div>`:''} 
        </div>
      </div>
    </div>`;

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('open')));

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => overlay.remove(), 380);
  }
  document.getElementById('modalCloseBtn').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function esc(e) {
    if (e.key==='Escape') { close(); document.removeEventListener('keydown', esc); }
  });

  // Side-thumb navigation
  if (slides.length > 1) {
    overlay.querySelectorAll('.modal-side-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const s     = slides[+thumb.dataset.idx];
        const bgEl  = document.getElementById('mgBg');
        const imgEl = document.getElementById('mgImg');
        const lblEl = document.getElementById('mgLabel');
        if (bgEl)  bgEl.style.background = s.gradient || bgStart;
        if (lblEl) lblEl.textContent = s.label || data.label;
        if (imgEl) {
          if (s.img) {
            imgEl.style.opacity = '0';
            setTimeout(() => { imgEl.src = s.img; imgEl.style.display=''; imgEl.style.opacity='0.88'; }, 180);
          } else { imgEl.style.display = 'none'; }
        }
        overlay.querySelectorAll('.modal-side-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }
};

// ── Scroll reveal ──────────────────────────────────────────────
(function () {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();