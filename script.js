// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(255, 215, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// File upload handler
const fileInput = document.getElementById('cv');
if (fileInput) {
    fileInput.addEventListener('change', (e) => {
        const fileName = e.target.files[0]?.name || 'No file chosen';
        const fileNameDisplay = document.querySelector('.file-name');
        if (fileNameDisplay) {
            fileNameDisplay.textContent = fileName;
        }
    });
}

// Form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form type
        const formType = form.classList.contains('booking-form') ? 'Booking' :
                        form.classList.contains('application-form') ? 'Application' :
                        form.classList.contains('contact-form') ? 'Contact' : 'Form';
        
        // Show success message
        alert(`${formType} submitted successfully! We'll get back to you soon.`);
        
        // Reset form
        form.reset();
        
        // Reset file name display if it exists
        const fileNameDisplay = form.querySelector('.file-name');
        if (fileNameDisplay) {
            fileNameDisplay.textContent = 'No file chosen';
        }
    });
});

// Order item function for menu
function orderItem(itemName) {
    alert(`Order for "${itemName}" placed successfully! We'll prepare it for you.`);
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.feature-card, .promo-card, .menu-item, .value-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Dynamic greeting based on time
const updateGreeting = () => {
    const hour = new Date().getHours();
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroSubtitle) {
        if (hour >= 17 && hour < 20) {
            heroSubtitle.textContent = 'Happy Hour Special - Join Us Now!';
        } else if (hour >= 20 && hour < 24) {
            heroSubtitle.textContent = 'The Night is Young - Experience Premium Nightlife';
        } else if (hour >= 0 && hour < 2) {
            heroSubtitle.textContent = 'Late Night Vibes - Keep the Party Going';
        } else {
            heroSubtitle.textContent = 'Experience Premium Nightlife in Benin City';
        }
    }
};

updateGreeting();
setInterval(updateGreeting, 60000); // Update every minute

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Console Easter Egg
console.log('%c🍾 Welcome to WVML - Where Vibe Meets Luxury! 🍾', 
    'background: linear-gradient(45deg, #FFD700, #8B00FF); color: white; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c📍 Visit us at 201 Siloko Road, Benin City', 
    'color: #FFD700; font-size: 14px;');
console.log('%c📞 Call: 07062228026', 
    'color: #FFD700; font-size: 14px;');
console.log('%c🔗 Secret Staff Page: /staff-application.html', 
    'color: #8B00FF; font-size: 12px;');
