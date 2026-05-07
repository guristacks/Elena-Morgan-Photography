// DOM Elements
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const progressBar = document.getElementById('progressBar');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const contactForm = document.getElementById('contactForm');

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimations();
  initScrollAnimations();
  initCounters();
});

// Hero Animations
function initHeroAnimations() {
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroWords = document.querySelectorAll('.hero-title .reveal-word');
  const heroDescription = document.querySelector('.hero-description');
  const heroBtn = document.querySelector('.hero .btn');

  // Staggered animation timeline
  setTimeout(() => {
    heroSubtitle.style.transition = 'opacity 1s ease, transform 1s ease';
    heroSubtitle.style.opacity = '1';
    heroSubtitle.style.transform = 'translateY(0)';
  }, 300);

  heroWords.forEach((word, index) => {
    setTimeout(() => {
      word.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      word.style.opacity = '1';
      word.style.transform = 'translateY(0)';
    }, 600 + (index * 200));
  });

  setTimeout(() => {
    heroDescription.style.transition = 'opacity 1s ease, transform 1s ease';
    heroDescription.style.opacity = '1';
    heroDescription.style.transform = 'translateY(0)';
  }, 1400);

  setTimeout(() => {
    heroBtn.style.transition = 'opacity 1s ease, transform 1s ease';
    heroBtn.style.opacity = '1';
    heroBtn.style.transform = 'translateY(0)';
  }, 1600);
}

// Scroll Animations using Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay for elements in same section
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('.fade-in, .reveal-text').forEach((el, index) => {
    // Add staggered delay based on sibling index within parent
    const siblings = el.parentElement.querySelectorAll('.fade-in, .reveal-text');
    const siblingIndex = Array.from(siblings).indexOf(el);
    el.dataset.delay = siblingIndex * 100;
    observer.observe(el);
  });
}

// Number Counter Animation
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');

  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.count);
        animateCounter(counter, target);
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(element, target) {
  const duration = 2000;
  const startTime = performance.now();
  const startValue = 0;

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(startValue + (target - startValue) * easeOut);

    element.textContent = currentValue;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  // Navbar background
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Progress bar
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = (window.scrollY / scrollHeight) * 100;
  progressBar.style.width = `${scrollProgress}%`;
});

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileToggle.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileToggle.classList.remove('active');
  });
});

// Portfolio filter
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Update active button
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    portfolioItems.forEach((item) => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.classList.remove('hidden');
        item.style.animation = 'fadeIn 0.5s ease forwards';
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// Add fadeIn keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
document.head.appendChild(style);

// Contact form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Simulate form submission
  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
    btn.textContent = originalText;
    btn.disabled = false;
  }, 1500);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}!`);
    newsletterForm.reset();
  });
}
