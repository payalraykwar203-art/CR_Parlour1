/**
 * Chanchal Beauty Parlour - JavaScript Functions
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Mobile Menu Toggle
    // ==========================================
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking ANY link or button inside navMenu
        const allNavLinks = navMenu.querySelectorAll('a');
        allNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // ==========================================
    // 2. Active Navigation Link on Scroll
    // ==========================================
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Map navigation links to their target section or container
    const linkTargets = [];
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const targetId = href.substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                linkTargets.push({ id: targetId, el: targetEl, link: link });
            }
        }
    });

    const updateActiveNav = () => {
        const scrollPosition = window.scrollY + 140; // offset header height
        const isNearBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60);

        let currentId = '';

        if (isNearBottom) {
            // Activate contact if near the bottom of the page
            const contactTarget = linkTargets.find(t => t.id === 'contact');
            currentId = contactTarget ? 'contact' : (linkTargets[linkTargets.length - 1]?.id || '');
        } else {
            linkTargets.forEach(target => {
                const rect = target.el.getBoundingClientRect();
                const targetTop = rect.top + window.scrollY;
                const targetHeight = target.el.offsetHeight;

                if (scrollPosition >= targetTop && scrollPosition < targetTop + targetHeight) {
                    currentId = target.id;
                }
            });
        }

        if (currentId) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    };

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav(); // initialize on load

    // ==========================================
    // 3. Interactive Gallery Filter
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    let filterTimeout;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            clearTimeout(filterTimeout);

            galleryItems.forEach(item => {
                const isMatch = filterValue === 'all' || item.classList.contains(filterValue);

                if (isMatch) {
                    item.style.display = 'block';
                    requestAnimationFrame(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    });
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.85)';
                }
            });

            filterTimeout = setTimeout(() => {
                galleryItems.forEach(item => {
                    const isMatch = filterValue === 'all' || item.classList.contains(filterValue);
                    if (!isMatch) {
                        item.style.display = 'none';
                    }
                });

                if (typeof AOS !== 'undefined' && AOS.refresh) {
                    AOS.refresh();
                }
            }, 300);
        });
    });

    // ==========================================
    // 4. Testimonials Slider (Carousel)
    // ==========================================
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    let currentSlide = 0;
    let slideInterval;

    if (slides.length > 0) {
        const showSlide = (n) => {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
        };

        const nextSlide = () => {
            showSlide(currentSlide + 1);
        };

        const prevSlide = () => {
            showSlide(currentSlide - 1);
        };

        // Event Listeners for Controls
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetInterval();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetInterval();
            });
        }

        // Event Listeners for Dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                resetInterval();
            });
        });

        // Automatic Slide Transitions
        const startInterval = () => {
            slideInterval = setInterval(nextSlide, 6000);
        };

        const resetInterval = () => {
            clearInterval(slideInterval);
            startInterval();
        };

        // Pause auto-sliding on hover
        if (sliderWrapper) {
            sliderWrapper.addEventListener('mouseenter', () => clearInterval(slideInterval));
            sliderWrapper.addEventListener('mouseleave', () => resetInterval());
        }

        // Initialize slider
        startInterval();
    }

    // ==========================================
    // 5. Booking Form Submission Handlers
    // ==========================================
    const bookingForm = document.getElementById('bookingForm');
    const successMessage = document.getElementById('successMessage');

    if (bookingForm && successMessage) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullName = document.getElementById('fullName')?.value || '';
            const phoneNum = document.getElementById('phoneNum')?.value || '';
            const emailAddr = document.getElementById('emailAddr')?.value || '';
            const serviceType = document.getElementById('serviceType')?.value || '';
            const appointmentDate = document.getElementById('appointmentDate')?.value || '';
            const appointmentTime = document.getElementById('appointmentTime')?.value || '';
            const specialNotes = document.getElementById('specialNotes')?.value || '';

            // Construct booking payload
            const bookingData = {
                name: fullName,
                phone: phoneNum,
                email: emailAddr,
                service: serviceType,
                date: appointmentDate,
                time: appointmentTime,
                notes: specialNotes,
                timestamp: new Date().toISOString()
            };

            // Save booking in local storage
            try {
                let currentBookings = JSON.parse(localStorage.getItem('appointments')) || [];
                currentBookings.push(bookingData);
                localStorage.setItem('appointments', JSON.stringify(currentBookings));
            } catch (err) {
                console.warn('LocalStorage unavailable:', err);
            }

            // Visual submission feedback state
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerText : 'Confirm Appointment Request';
            if (submitBtn) {
                submitBtn.innerText = 'Requesting...';
                submitBtn.disabled = true;
            }

            setTimeout(() => {
                // Show Success Transition
                bookingForm.style.opacity = '0';
                setTimeout(() => {
                    bookingForm.style.display = 'none';
                    successMessage.classList.add('active');
                }, 300);
            }, 1000);
        });

        // "Book Another Appointment" handler
        const bookAgainBtn = document.getElementById('bookAgainBtn');
        if (bookAgainBtn) {
            bookAgainBtn.addEventListener('click', () => {
                bookingForm.reset();
                const submitBtn = bookingForm.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.innerText = 'Confirm Appointment Request';
                    submitBtn.disabled = false;
                }
                successMessage.classList.remove('active');
                bookingForm.style.display = 'block';
                requestAnimationFrame(() => {
                    bookingForm.style.opacity = '1';
                });
            });
        }
    }

    // ==========================================
    // 6. Newsletter Subscription Handler
    // ==========================================
    const newsletterSubmitBtn = document.getElementById('newsletterSubmitBtn');
    const newsletterEmail = document.getElementById('newsletterEmail');

    if (newsletterSubmitBtn && newsletterEmail) {
        newsletterSubmitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = newsletterEmail.value.trim();

            if (email && email.includes('@') && email.includes('.')) {
                alert(`Thank you for subscribing to our newsletter! We will send updates and offers to ${email}.`);
                newsletterEmail.value = '';
            } else {
                alert('Please enter a valid email address.');
                newsletterEmail.focus();
            }
        });
    }

    // Set minimum date selector on form to today
    const dateInput = document.getElementById('appointmentDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});