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
function detectAdBlocker() {
    const adTest = document.createElement('div');
    adTest.innerHTML = '&nbsp;';
    adTest.className = 'adsbox ad-placement doubleclick ad-placeholder ad-badge';
    adTest.style.position = 'absolute';
    adTest.style.top = '-1000px';
    document.body.appendChild(adTest);

    setTimeout(() => {
        const isBlocked = adTest.offsetHeight === 0 || window.getComputedStyle(adTest).display === 'none';
        adTest.remove();

        if (isBlocked) {
            const adblockBanner = document.getElementById('adblock-banner');
            if (adblockBanner) {
                adblockBanner.style.display = 'block';
            }
            // Prompt the user as requested
            alert("We noticed you are using an AdBlocker. Please consider disabling it to support Ecotron. Our tools are free to use and ads help us cover server costs!");
        }
    }, 500);
}

window.addEventListener('load', detectAdBlocker);
