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
    strings: ["Victor Macharia", "Fullstack Developer", "Cloud Nerd", "Freelancer"],
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
document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.getElementById('socialIcons');
    const icons = Array.from(socialIcons.querySelectorAll('.icon'));
    
    // Create ring elements
    const ring1 = document.createElement('div');
    ring1.className = 'ring ring1';
    
    const ring2 = document.createElement('div');
    ring2.className = 'ring ring2';
    
    // Add rings to the social icons container
    socialIcons.appendChild(ring1);
    socialIcons.appendChild(ring2);
    
    // Set initial positions
    let currentIcon1Index = 0;
    let currentIcon2Index = 1; // Start ring2 at the second icon
    
    // Function to move rings to a specific icon
    function moveRingToIcon(ring, iconIndex) {
        const icon = icons[iconIndex];
        const left = icon.offsetLeft;
        
        // Apply transform to position the ring over the icon
        ring.style.transform = `translateX(${left}px)`;
        
        // Add pulse animation
        ring.classList.add('pulse');
        setTimeout(() => {
            ring.classList.remove('pulse');
        }, 500);
    }
    
    // Initial positioning
    moveRingToIcon(ring1, currentIcon1Index);
    moveRingToIcon(ring2, currentIcon2Index);
    
    // Animation loop
    setInterval(() => {
        // Move to next icon (with loop around)
        currentIcon1Index = (currentIcon1Index + 1) % icons.length;
        currentIcon2Index = (currentIcon2Index + 1) % icons.length;
        
        moveRingToIcon(ring1, currentIcon1Index);
        moveRingToIcon(ring2, currentIcon2Index);
    }, 2000); // Move every 2 seconds
    
    // Keep consistent colors
    ring1.style.borderColor = '#4CAF50';
    ring1.style.boxShadow = '0 0 15px #4CAF50';
    
    ring2.style.borderColor = '#FF5252';
    ring2.style.boxShadow = '0 0 15px #FF5252';
});
window.onload = function() {
    var messageBox = document.getElementById('message');
    if (messageBox) {
        setTimeout(function() {
            messageBox.style.display = 'none'; // Hide the message after 4 seconds
        }, 4000);
    }
};
