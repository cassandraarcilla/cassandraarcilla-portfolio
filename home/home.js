// home.js – page-specific scripts

// ── Typewriter effect on hero ───────────────────────────────────
(function () {
  const el = document.getElementById('heroTypewriter');
  if (!el) return;

  const phrases = [
    'UI/UX Designer',
    'Frontend Developer',
    'Vue.js Builder',
    'Creative Thinker',
  ];
  let phraseIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const cur = phrases[phraseIdx];

    if (!deleting) {
      el.textContent = cur.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === cur.length) {
        deleting = true;
        setTimeout(tick, 1700);
        return;
      }
      setTimeout(tick, 78);
    } else {
      el.textContent = cur.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(tick, 380);
        return;
      }
      setTimeout(tick, 40);
    }
  }
  setTimeout(tick, 600);
})();

// ── Hero content fade-up ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(24px)';
    setTimeout(() => {
      heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 100);
  }
});

// ── Stat counter animation (fires when scrolled into view) ──────
(function () {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const easeOut = t => 1 - Math.pow(1 - t, 3);

  function animateCounter(el) {
    const target   = parseInt(el.dataset.count, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1300;
    let   start    = null;

    function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      el.textContent = Math.floor(easeOut(p) * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(c => obs.observe(c));
})();
