// contact.js — contact form handler using EmailJS

// ==============================
// 🔐 EMAILJS CONFIGURATION
// ==============================
// Replace these with your real EmailJS credentials
const EMAILJS_SERVICE_ID  = 'service_5zfwkcw';   // ← your Service ID
const EMAILJS_TEMPLATE_ID = 'template_pxyj9ra';  // ← your Template ID
const EMAILJS_PUBLIC_KEY  = 'd292Kemmrjgq-WDVU';    // ← your Public Key
// ==============================

document.addEventListener('DOMContentLoaded', () => {
  const form   = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (!form) return;

  // Initialize EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  } else {
    console.warn('EmailJS SDK not loaded.');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation
    const inputs   = form.querySelectorAll('input[required], textarea[required]');
    let   allValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = 'rgba(200,60,60,0.5)';
        allValid = false;
      } else {
        input.style.borderColor = '';
      }
    });

    if (!allValid) {
      if (status) {
        status.textContent = 'Please fill in all required fields.';
        status.className   = 'form-status error';
      }
      return;
    }

    const btn  = form.querySelector('button[type=submit]');
    const orig = btn.textContent;

    if (status) {
      status.textContent = '';
      status.className   = 'form-status';
    }

    btn.textContent = 'Sending…';
    btn.disabled    = true;

    // Get form values (safer selection using name attributes)
    const templateParams = {
      from_name:  form.querySelector('[name="from_name"]')?.value.trim()  || '',
      from_email: form.querySelector('[name="from_email"]')?.value.trim() || '',
      subject:    form.querySelector('[name="subject"]')?.value.trim()    || '',
      message:    form.querySelector('[name="message"]')?.value.trim()    || '',
      to_email:   'arcillacassandra009@gmail.com',
    };

    // Send via EmailJS
    if (typeof emailjs !== 'undefined') {
      emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then(() => {
        btn.textContent = orig;
        btn.disabled    = false;
        form.reset();

        form.querySelectorAll('input, textarea')
            .forEach(el => el.style.borderColor = '');

        if (typeof window.showToast === 'function') {
          window.showToast(
            'Message sent! Cassandra will reply within 24–48 hours.',
            'success'
          );
        } else if (status) {
          status.textContent =
            '✓ Message sent! Cassandra will get back to you within 24–48 hours.';
          status.className = 'form-status success';
        }
      })
      .catch((error) => {
        console.error('EmailJS error:', error);

        btn.textContent = orig;
        btn.disabled    = false;

        if (status) {
          status.textContent =
            'Failed to send. Please email directly: arcillacassandra009@gmail.com';
          status.className = 'form-status error';
        }
      });
    } else {
      // Fallback: open mailto
      const mailto = `mailto:arcillacassandra009@gmail.com?subject=${encodeURIComponent(templateParams.subject)}&body=${encodeURIComponent(
        'From: ' +
        templateParams.from_name +
        ' (' +
        templateParams.from_email +
        ')\n\n' +
        templateParams.message
      )}`;

      window.location.href = mailto;

      btn.textContent = orig;
      btn.disabled    = false;

      if (status) {
        status.textContent =
          'Opening your email client… If it did not open, email arcillacassandra009@gmail.com directly.';
        status.className = 'form-status success';
      }
    }
  });

  // Clear field error highlight on input
  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => {
      el.style.borderColor = '';
    });
  });

  // FAQ arrow sync with Bootstrap collapse
  document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(btn => {
    const target = document.querySelector(
      btn.getAttribute('data-bs-target')
    );
    if (!target) return;

    target.addEventListener('shown.bs.collapse', () =>
      btn.setAttribute('aria-expanded', 'true')
    );

    target.addEventListener('hidden.bs.collapse', () =>
      btn.setAttribute('aria-expanded', 'false')
    );
  });
});