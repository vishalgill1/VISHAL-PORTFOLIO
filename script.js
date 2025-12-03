// Basic interactivity: mobile nav toggle, reveal-on-scroll, contact form local submit
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');

  menuBtn?.addEventListener('click', () => {
    if (!mobileNav) return;
    mobileNav.classList.toggle('hidden');
  });

  // Reveal on scroll for elements with .fade-up
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

  // Contact form local submit (preview)
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // simple validation already via required attributes
      const data = new FormData(form);
      // show a small preview message
      formMsg.classList.remove('hidden');
      formMsg.textContent = 'Message captured — preview only.';
      // Reset after a moment
      setTimeout(() => {
        form.reset();
        formMsg.classList.add('hidden');
      }, 2000);

      // If you want to integrate with an email provider:
      // - Replace with Formspree/Nelify Forms endpoint OR
      // - Use a serverless function to send email
    });
  }

  // Close mobile nav when clicking links
  document.querySelectorAll('#mobileNav a').forEach(a => {
    a.addEventListener('click', () => {
      if (mobileNav && !mobileNav.classList.contains('hidden')) mobileNav.classList.add('hidden');
    });
  });
});