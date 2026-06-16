/**
 * Testimonials Carousel Controller
 * Handles infinite scrolling with pause on hover/touch functionality
 * Fully accessible and responsive
 */

class TestimonialsCarousel {
    constructor(carouselId = 'testimonials-carousel', pauseBtnId = 'carousel-pause-btn') {
        this.carousel = document.getElementById(carouselId);
        this.pauseBtn = document.getElementById(pauseBtnId);
        this.isPaused = false;
        this.isTouching = false;

        if (this.carousel && this.pauseBtn) {
            this.init();
            this.setupEventListeners();
        }
    }

    /**
     * Initialize carousel animation
     */
    init() {
        // Handle animation restart for seamless loop
        this.carousel.addEventListener('animationend', () => {
            if (!this.isPaused && !this.isTouching) {
                this.carousel.style.animation = 'none';
                // Trigger reflow to restart animation
                this.carousel.offsetHeight;
                this.carousel.style.animation = 'scroll-left 60s linear infinite';
            }
        });

        // Check for reduced motion preference
        this.checkReducedMotion();
    }

    /**
     * Setup all event listeners
     */
    setupEventListeners() {
        // Pause on hover (desktop)
        this.carousel.addEventListener('mouseenter', () => {
            if (!this.isPaused) {
                this.pauseCarousel();
            }
        });

        this.carousel.addEventListener('mouseleave', () => {
            if (!this.isPaused) {
                this.resumeCarousel();
            }
        });

        // Pause on touch (mobile/tablet)
        this.carousel.addEventListener('touchstart', () => {
            this.isTouching = true;
            this.pauseCarousel();
        }, { passive: true });

        this.carousel.addEventListener('touchend', () => {
            this.isTouching = false;
            if (!this.isPaused) {
                this.resumeCarousel();
            }
        }, { passive: true });

        // Manual pause button control
        if (this.pauseBtn) {
            this.pauseBtn.addEventListener('click', () => {
                this.isPaused ? this.resumeCarousel() : this.pauseCarousel();
            });

            // Keyboard accessibility (Space key)
            document.addEventListener('keydown', (e) => {
                if (e.key === ' ' && document.activeElement === this.pauseBtn) {
                    e.preventDefault();
                    this.isPaused ? this.resumeCarousel() : this.pauseCarousel();
                }
            });
        }

        // Listen for changes in reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        prefersReducedMotion.addEventListener('change', () => {
            this.checkReducedMotion();
        });
    }

    /**
     * Check and handle reduced motion preference
     */
    checkReducedMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            this.carousel.style.animation = 'none';
            if (this.pauseBtn) {
                this.pauseBtn.style.display = 'none';
            }
        } else {
            this.carousel.style.animation = 'scroll-left 60s linear infinite';
            if (this.pauseBtn) {
                this.pauseBtn.style.display = 'flex';
            }
        }
    }

    /**
     * Pause the carousel animation
     */
    pauseCarousel() {
        this.isPaused = true;
        
        if (this.carousel) {
            this.carousel.style.animationPlayState = 'paused';
            this.carousel.classList.add('touch-pause');
        }

        if (this.pauseBtn) {
            this.pauseBtn.setAttribute('aria-pressed', 'true');
            this.pauseBtn.innerHTML = '<i class="bi bi-play-fill"></i><span>Resume</span>';
        }
    }

    /**
     * Resume the carousel animation
     */
    resumeCarousel() {
        this.isPaused = false;
        
        if (this.carousel) {
            this.carousel.style.animationPlayState = 'running';
            this.carousel.classList.remove('touch-pause');
        }

        if (this.pauseBtn) {
            this.pauseBtn.setAttribute('aria-pressed', 'false');
            this.pauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i><span>Pause</span>';
        }
    }

    /**
     * Destroy instance and cleanup
     */
    destroy() {
        if (this.carousel) {
            this.carousel.style.animation = 'none';
        }
        this.carousel = null;
        this.pauseBtn = null;
    }
}

/**
 * Initialize carousel when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new TestimonialsCarousel();
    });
} else {
    new TestimonialsCarousel();
}

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TestimonialsCarousel;
}
