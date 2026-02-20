// contact.js — contact form handler using EmailJS

document.addEventListener('DOMContentLoaded', () => {
  const form   = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (!form) return;

  // Initialize EmailJS — replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
  // Sign up at https://www.emailjs.com/ → get public key from Account > API Keys
  if (typeof emailjs !== 'undefined') {
    emailjs.init('YOUR_PUBLIC_KEY'); // <-- Replace this with your EmailJS public key
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
    if (status) { status.textContent = ''; status.className = 'form-status'; }
    btn.textContent = 'Sending…';
    btn.disabled    = true;

    // Get form values
    const nameInput    = form.querySelector('input[type=text]');
    const emailInput   = form.querySelector('input[type=email]');
    const subjectInput = form.querySelectorAll('input[type=text]')[1];
    const msgTextarea  = form.querySelector('textarea');

    const templateParams = {
      from_name:    nameInput    ? nameInput.value.trim()    : '',
      from_email:   emailInput   ? emailInput.value.trim()   : '',
      subject:      subjectInput ? subjectInput.value.trim() : '',
      message:      msgTextarea  ? msgTextarea.value.trim()  : '',
      to_email:     'arcillacassandra009@gmail.com',
    };

    // Send via EmailJS
    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your EmailJS IDs
    // Service ID: EmailJS Dashboard → Email Services
    // Template ID: EmailJS Dashboard → Email Templates
    if (typeof emailjs !== 'undefined') {
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(() => {
          btn.textContent = orig;
          btn.disabled    = false;
          form.reset();
          form.querySelectorAll('input, textarea').forEach(el => el.style.borderColor = '');
          if (typeof window.showToast === 'function') {
            window.showToast('Message sent! Cassandra will reply within 24–48 hours.', 'success');
          } else if (status) {
            status.textContent = '✓ Message sent! Cassandra will get back to you within 24–48 hours.';
            status.className   = 'form-status success';
          }
        })
        .catch((error) => {
          console.error('EmailJS error:', error);
          btn.textContent = orig;
          btn.disabled    = false;
          if (status) {
            status.textContent = 'Failed to send. Please email directly: arcillacassandra009@gmail.com';
            status.className   = 'form-status error';
          }
        });
    } else {
      // Fallback: open mailto link if EmailJS not configured
      const mailto = `mailto:arcillacassandra009@gmail.com?subject=${encodeURIComponent(templateParams.subject)}&body=${encodeURIComponent('From: ' + templateParams.from_name + ' (' + templateParams.from_email + ')\n\n' + templateParams.message)}`;
      window.location.href = mailto;
      btn.textContent = orig;
      btn.disabled    = false;
      if (status) {
        status.textContent = 'Opening your email client… If it did not open, email arcillacassandra009@gmail.com directly.';
        status.className   = 'form-status success';
      }
    }
  });

  // Clear field error highlight on input
  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => { el.style.borderColor = ''; });
  });

  // FAQ arrow sync with Bootstrap collapse
  document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(btn => {
    const target = document.querySelector(btn.getAttribute('data-bs-target'));
    if (!target) return;
    target.addEventListener('shown.bs.collapse',  () => btn.setAttribute('aria-expanded', 'true'));
    target.addEventListener('hidden.bs.collapse', () => btn.setAttribute('aria-expanded', 'false'));
  });
});
