// Simple observer for reveal animations
const observerOptions = {
    threshold: 0.05
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation targets
    const targets = document.querySelectorAll('section, .grid-item, .product-card');
    targets.forEach(t => {
        t.style.opacity = '0';
        t.style.transform = 'translateY(30px)';
        t.style.transition = 'all 1s cubic-bezier(0.25, 1, 0.5, 1)';
        observer.observe(t);
    });
});

// Implementation of Intersection Observer classes in CSS logic via JS directly for simplicity in this demo
const style = document.createElement('style');
style.textContent = `
    section.active, .grid-item.active, .product-card.active {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Smooth scroll implementation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.getElementById('main-header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
