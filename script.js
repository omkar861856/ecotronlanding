// Custom Cursor Glow
const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Mobile Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    // Basic mobile menu toggle
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '80px';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.flexDirection = 'column';
    navLinks.style.background = 'var(--bg-nav)';
    navLinks.style.padding = '2rem';
    navLinks.style.textAlign = 'center';
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 0';
        header.style.background = 'rgba(10, 12, 16, 0.95)';
    } else {
        header.style.padding = '0';
        header.style.background = 'var(--bg-nav)';
    }
});

// Add staggered delay to service cards
const cards = document.querySelectorAll('.service-card');
cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});
