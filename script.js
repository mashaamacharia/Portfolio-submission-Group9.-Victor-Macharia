// Cache selectors once
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('myNavmenu');
const navLinks = document.querySelectorAll('.nav-link');
const toggleSwitch = document.getElementById('toggle-switch');
const body = document.body;
const backToTopBtn = document.getElementById('backToTop');
const sections = document.querySelectorAll('section');
const skillSection = document.querySelector('#about');
const skillBars = document.querySelectorAll('.skill-per');
const cursor = document.querySelector('.custom-cursor');
const clickables = document.querySelectorAll('a, button, .icon, .nav-menu-btn, .mode');

// Mobile Menu Toggle
function myMenuFunction() {
    navMenu.querySelector('.nav_menu_list').classList.toggle('show-menu');
    menuBtn.classList.toggle('uil-times');
}
menuBtn.addEventListener('click', myMenuFunction);

// Close menu on nav link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.querySelector('.nav_menu_list').classList.remove('show-menu');
        menuBtn.classList.remove('uil-times');
        menuBtn.classList.add('uil-bars');
    });
});

// Throttle helper
function throttle(fn, limit) {
    let inThrottle;
    return function () {
        if (!inThrottle) {
            fn.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Highlight active nav link + skill animation
function handleScroll() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active-link');
        }
    });

    // Animate skill bars
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    if (sectionPos < screenPos) {
        skillBars.forEach(bar => {
            const skill = bar.classList[1]?.toLowerCase();
            const widths = { html: '80%', css: '80%', php: '70%', js: '65%', sql: '75%' };
            bar.style.width = widths[skill] || '60%';
        });
    }

    // Back to top
    backToTopBtn.classList.toggle('visible', window.pageYOffset > 300);
}
window.addEventListener('scroll', throttle(handleScroll, 200));

// Back to Top click
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark Mode toggle and initialization
function setTheme(theme) {
    if (theme === 'dark') body.classList.add('dark-mode');
    else body.classList.remove('dark-mode');
    localStorage.setItem('theme', theme);
}

toggleSwitch.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    setTheme(isDark ? 'dark' : 'light');
});

const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

// Typed.js
new Typed('.typedText', {
    strings: ["Victor Macharia,", "ICT Support Specialist,","Fullstack Developer,","Freelancer."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

// ScrollReveal
ScrollReveal().reveal('.fade-up', { origin: 'top', distance: '60px', duration: 1000, delay: 400,reset:true });
ScrollReveal().reveal('.fade-right', { origin: 'left', distance: '60px', duration: 1000, delay: 400, reset:true });
ScrollReveal().reveal('.stagger-item', { interval: 200, origin: 'top', distance: '60px', duration: 1000, reset:true});

// Contact Form
document.getElementById('submit-form').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('.input-field[placeholder="Your Name"]');
    const email = document.querySelector('.input-field[placeholder="Your Email"]');
    const subject = document.querySelector('.input-subject');
    const message = document.querySelector('textarea');

    if (!name.value || !email.value || !message.value) {
        [name, email, message].forEach(input => {
            if (!input.value) input.classList.add('input-error');
        });
        return;
    }

    alert('Thank you for your message! I will get back to you soon.');
    [name, email, subject, message].forEach(input => input.value = '');
    [name, email, message].forEach(input => input.classList.remove('input-error'));
});

// Update current year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Custom Cursor
let lastX = 0, lastY = 0;
document.addEventListener('mousemove', (e) => {
    if (e.clientX !== lastX || e.clientY !== lastY) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        lastX = e.clientX;
        lastY = e.clientY;
    }
});

document.addEventListener('mousedown', () => cursor.style.transform = 'translate(-50%, -50%) scale(0.7)');
document.addEventListener('mouseup', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');

clickables.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.backgroundColor = 'rgba(117, 98, 224, 0.2)';
        cursor.style.border = '1px solid var(--primary-color)';
    });

    item.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'rgba(117, 98, 224, 0.3)';
        cursor.style.border = 'none';
    });
});
