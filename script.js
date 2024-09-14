// Mobile menu functionality
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        animateNavLinks(navLinks);

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Function to animate nav links
const animateNavLinks = (navLinks) => {
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
}

// Function to reset nav link animations
const resetNavLinkAnimations = (navLinks) => {
    navLinks.forEach((link) => {
        link.style.animation = '';
    });
}

// Smooth scrolling for navigation links
const smoothScroll = () => {
    const navLinks = document.querySelectorAll('.nav-links a, .cta-button');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links li');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                resetNavLinkAnimations(navLinkItems);
            }
        });
    });
}

// Active link highlighting
const highlightActiveLink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Call functions
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    smoothScroll();
    highlightActiveLink();
});


