export function initContact() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm(form)) return;

    // Loading state
    submitBtn.classList.add('loading');
    submitBtn.querySelector('.btn-text').textContent = 'Sending...';

    try {
      const res = await fetch('https://formspree.io/f/mzdwbgpr', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form),
      });

      if (!res.ok) throw new Error('Network error');

      // Success
      submitBtn.classList.remove('loading');
      submitBtn.classList.add('success');
      submitBtn.querySelector('.btn-text').textContent = 'Message sent!';
      submitBtn.querySelector('svg').innerHTML = '<polyline points="20 6 9 17 4 12"/>';
      form.reset();

      setTimeout(() => {
        submitBtn.classList.remove('success');
        submitBtn.querySelector('.btn-text').textContent = 'Send message';
        submitBtn.querySelector('svg').innerHTML = '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>';
      }, 4000);

    } catch {
      submitBtn.classList.remove('loading');
      submitBtn.querySelector('.btn-text').textContent = 'Error — try again';
      setTimeout(() => {
        submitBtn.querySelector('.btn-text').textContent = 'Send message';
      }, 3000);
    }
  });

  // Real-time validation
  form.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.closest('.form-group').classList.contains('has-error')) {
        validateField(input);
      }
    });
  });
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    if (!validateField(field)) valid = false;
  });
  return valid;
}

function validateField(field) {
  const group = field.closest('.form-group');
  const existing = group.querySelector('.form-error');
  if (existing) existing.remove();

  let error = '';

  if (!field.value.trim()) {
    error = 'This field is required.';
  } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
    error = 'Please enter a valid email.';
  }

  if (error) {
    group.classList.add('has-error');
    const msg = document.createElement('p');
    msg.className = 'form-error';
    msg.textContent = error;
    group.appendChild(msg);
    return false;
  }

  group.classList.remove('has-error');
  return true;
}
