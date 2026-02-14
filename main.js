// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Contact form submission (only on contact page)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            
            // Show success message
            alert(`Thank you ${name}! I'll get back to you at ${email} as soon as possible.`);
            
            // Reset form
            contactForm.reset();
        });
    }

    // Animate skill bars on skills page
    const skillBars = document.querySelectorAll('.skill-level');
    
    if (skillBars.length > 0) {
        const animateSkillBars = () => {
            skillBars.forEach(bar => {
                const level = bar.getAttribute('data-level');
                if (level) {
                    bar.style.width = `${level}%`;
                }
            });
        };

        // Check if we're on the skills page
        if (document.querySelector('.skills-page')) {
            // Small delay to ensure DOM is ready
            setTimeout(animateSkillBars, 300);
        }
    }
});