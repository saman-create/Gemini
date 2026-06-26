document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect & Mobile Nav
    const header = document.getElementById('header');
    const topBarHeight = 34;
    
    window.addEventListener('scroll', () => {
        // Adjust top position smoothly
        if (window.scrollY > topBarHeight) {
            header.style.top = '0px';
        } else {
            header.style.top = Math.max(0, topBarHeight - window.scrollY) + 'px';
        }
        
        // Add glassmorphism class
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuToggle && menuClose && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        const closeMenu = () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        };

        menuClose.addEventListener('click', closeMenu);
        
        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Pricing Toggle
    const toggleBtn = document.getElementById('toggle-btn');
    const monthlyLabel = document.getElementById('monthly-label');
    const yearlyLabel = document.getElementById('yearly-label');
    const priceStarter = document.getElementById('price-starter');
    const pricePro = document.getElementById('price-pro');
    
    let isYearly = false;

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            isYearly = !isYearly;
            toggleBtn.classList.toggle('toggled', isYearly);
            
            if (isYearly) {
                monthlyLabel.classList.remove('active');
                yearlyLabel.classList.add('active');
                priceStarter.textContent = '15'; // 20% discount approx
                pricePro.textContent = '39';
            } else {
                monthlyLabel.classList.add('active');
                yearlyLabel.classList.remove('active');
                priceStarter.textContent = '19';
                pricePro.textContent = '49';
            }
        });
    }
});
