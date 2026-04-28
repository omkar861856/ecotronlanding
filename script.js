// Simple header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Adblocker detection
async function checkAdBlocker() {
    let isBlocked = false;
    try {
        const response = await fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
            method: 'HEAD',
            mode: 'no-cors'
        });
        isBlocked = false;
    } catch (error) {
        isBlocked = true;
    }

    if (isBlocked) {
        const adblockBanner = document.getElementById('adblock-banner');
        if (adblockBanner) {
            adblockBanner.style.display = 'block';
        }
    }
}

// Check after a slight delay to ensure scripts had time to load/be blocked
setTimeout(checkAdBlocker, 1500);
