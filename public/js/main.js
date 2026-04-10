// ============================================
// Lilian Villaret — main.js
// ============================================

// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Fade-in on scroll
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(
  '.manifesto, .series__item, .format, .dreams__inner, .about__inner, .contact__inner, .section__head'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
  observer.observe(el);
});

const style = document.createElement('style');
style.textContent = '.is-visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// Parallax hero
const heroContent = document.querySelector('.hero__content');
if (heroContent) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
      heroContent.style.opacity = Math.max(0, 1 - scrolled / 500);
    }
  }, { passive: true });
}
