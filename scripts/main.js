document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that need to be animated on scroll
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // Add initial reveal classes to hero components so they pop in on load
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');
    const nav = document.querySelector('.nav');
    
    if(heroLeft) heroLeft.classList.add('active');
    if(heroRight) heroRight.classList.add('active');
    if(nav) nav.classList.add('active');

    // VanillaTilt initialization for portfolio cards
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".portofolio"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.15,
            scale: 1.02
        });
    }
});
