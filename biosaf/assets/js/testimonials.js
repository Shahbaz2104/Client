/**
 * BIOSAF Enterprises — Testimonial carousel
 * Requires DOM: #testimonial-container, #testimonial-text, #testimonial-author,
 * #testimonial-role, #prev-testimonial-btn, #next-testimonial-btn
 */
(function () {
    'use strict';

    const container = document.getElementById('testimonial-container');
    const textEl = document.getElementById('testimonial-text');
    const authorEl = document.getElementById('testimonial-author');
    const roleEl = document.getElementById('testimonial-role');
    const prevBtn = document.getElementById('prev-testimonial-btn');
    const nextBtn = document.getElementById('next-testimonial-btn');

    if (!container || !textEl || !authorEl || !roleEl || !prevBtn || !nextBtn) {
        return;
    }

    const testimonials = window.BIOSAF_TESTIMONIALS || [];
    if (!testimonials.length) {
        return;
    }

    let index = 0;
    let autoplayId = null;

    function updateTestimonial(newIndex) {
        index = newIndex;
        container.style.opacity = '0';

        setTimeout(() => {
            textEl.textContent = testimonials[index].text;
            authorEl.textContent = testimonials[index].author;
            roleEl.textContent = testimonials[index].role;
            container.style.opacity = '1';
        }, 450);
    }

    nextBtn.addEventListener('click', () => {
        updateTestimonial((index + 1) % testimonials.length);
    });

    prevBtn.addEventListener('click', () => {
        updateTestimonial((index - 1 + testimonials.length) % testimonials.length);
    });

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        autoplayId = setInterval(() => {
            updateTestimonial((index + 1) % testimonials.length);
        }, 8000);
    }

    container.addEventListener('mouseenter', () => {
        if (autoplayId) {
            clearInterval(autoplayId);
        }
    });
})();
