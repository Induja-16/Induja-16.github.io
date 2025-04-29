    // Typing animation is already handled by typed.js in index.html

    // Scroll reveal for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item-horizontal');

    function revealOnScroll() {
    timelineItems.forEach(item => {
        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
        item.classList.add('show');
        }
    });
    }

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    // Navbar color change on scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    });

    // Navbar active link highlight
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
        }
    });
    });
    const timelineContainer = document.querySelector('.timeline-horizontal');

        function activateTimeline() {
        const windowHeight = window.innerHeight;
        const elementTop = timelineContainer.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            timelineContainer.classList.add('active');
        }
        }
        
    window.addEventListener('scroll', activateTimeline);
    window.addEventListener('load', activateTimeline);
    const logos = document.querySelectorAll('.timeline-marker');

    function revealLogos() {
    logos.forEach(logo => {
        const windowHeight = window.innerHeight;
        const elementTop = logo.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
        logo.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealLogos);
window.addEventListener('load', revealLogos);
