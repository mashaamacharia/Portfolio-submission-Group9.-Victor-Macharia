
// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('myNavmenu');

function myMenuFunction() {
    navMenu.querySelector('.nav_menu_list').classList.toggle('show-menu');
    menuBtn.classList.toggle('uil-times');
}

menuBtn.addEventListener('click', myMenuFunction);

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.querySelector('.nav_menu_list').classList.remove('show-menu');
        menuBtn.classList.remove('uil-times');
        menuBtn.classList.add('uil-bars');
    });
});

// Active link highlighting based on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

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
});

// Dark Mode Toggle
const toggleSwitch = document.getElementById('toggle-switch');
const body = document.body;

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save theme preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Typed.js Animation
var typed = new Typed('.typedText', {
    strings: ["Victor Macharia", "Web Developer", "UI Designer", "Freelancer"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 400,
    reset: false
});

sr.reveal('.fade-up', {});
sr.reveal('.fade-right', { origin: 'left' });
sr.reveal('.stagger-item', { interval: 200 });

// Show skill bar animation when in viewport
function animateSkillBars() {
    const skillSection = document.querySelector('#about');
    const skillBars = document.querySelectorAll('.skill-per');

    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        skillBars.forEach(bar => {
            bar.style.width = bar.classList[1] ? bar.classList[1] === 'html' ? '80%' :
                bar.classList[1] === 'css' ? '80%' :
                    bar.classList[1] === 'php' ? '70%' :
                        bar.classList[1] === 'js' ? '65%' :
                            bar.classList[1] === 'SQL' ? '75%' : '60%' : '60%';
        });
    }
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }

    // Call skill bars animation
    animateSkillBars();
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission handler
const submitFormBtn = document.getElementById('submit-form');
submitFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('.input-field[placeholder="Your Name"]').value;
    const email = document.querySelector('.input-field[placeholder="Your Email"]').value;
    const subject = document.querySelector('.input-subject').value;
    const message = document.querySelector('textarea').value;

    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Here you would typically send the form data to a server
    // For now, just show a success message
    alert('Thank you for your message! I will get back to you soon.');

    // Clear form fields
    document.querySelector('.input-field[placeholder="Your Name"]').value = '';
    document.querySelector('.input-field[placeholder="Your Email"]').value = '';
    document.querySelector('.input-subject').value = '';
    document.querySelector('textarea').value = '';
});

// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Custom cursor
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Add hover effect to clickable elements for cursor
const clickables = document.querySelectorAll('a, button, .icon, .nav-menu-btn, .mode');

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