// === Smooth scroll for anchor links ===
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// === Navbar scroll effect ===
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// === Mobile nav toggle ===
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
}

// === Hero fade-in on load ===
window.addEventListener('load', () => {
  document.querySelector('.hero-content')?.classList.add('fade-in');
  document.querySelector('.page-hero')?.classList.add('fade-in');
});

// === Scroll reveal: cards, case studies, form groups ===
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .case-study, .form-group, .contact-info').forEach(el => {
  revealObserver.observe(el);
});

// === Navbar hide/show on scroll direction ===
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 120) {
    navbar.classList.add('nav-hidden');
  } else {
    navbar.classList.remove('nav-hidden');
  }
  lastScroll = current;
});


const resumeCard = document.getElementById('resume-card');
if (resumeCard) {
  const resumeObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        resumeObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });
 
  resumeObserver.observe(resumeCard);
}