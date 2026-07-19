/**
 * BIOSAF Enterprises — Shared frontend core
 * Preloader, cursor, scroll reveal, mobile menu
 */
(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* Preloader */
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        const preloaderBar = document.getElementById('preloader-bar');

        if (!preloader) {
            return;
        }

        if (preloaderBar) {
            preloaderBar.style.width = '100%';
        }

        const delay = prefersReducedMotion ? 0 : 600;

        setTimeout(() => {
            preloader.classList.add('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, prefersReducedMotion ? 0 : 750);
        }, delay);
    });

    /* Custom cursor — desktop only, respects reduced motion */
    const dot = document.getElementById('cursor-dot');
    const outline = document.getElementById('cursor-outline');

    if (dot && outline && !prefersReducedMotion && window.matchMedia('(min-width: 768px)').matches) {
        let outlineX = 0;
        let outlineY = 0;
        let targetX = 0;
        let targetY = 0;

        window.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
            dot.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%, -50%)`;
        });

        function updateOutlinePosition() {
            outlineX += (targetX - outlineX) * 0.15;
            outlineY += (targetY - outlineY) * 0.15;
            outline.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;
            requestAnimationFrame(updateOutlinePosition);
        }

        updateOutlinePosition();

        document.querySelectorAll('a, button, select, input, textarea, option').forEach((el) => {
            el.addEventListener('mouseenter', () => {
                outline.style.width = '55px';
                outline.style.height = '55px';
                outline.style.borderColor = '#D3F340';
                outline.style.backgroundColor = 'rgba(211, 243, 64, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                outline.style.width = '40px';
                outline.style.height = '40px';
                outline.style.borderColor = 'rgba(211, 243, 64, 0.4)';
                outline.style.backgroundColor = 'transparent';
            });
        });
    }

    /* Scroll reveal */
    if (!prefersReducedMotion) {
        const revealElements = document.querySelectorAll('.reveal');
        if (revealElements.length) {
            const revealObserver = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { root: null, threshold: 0.1, rootMargin: '0px' }
            );

            revealElements.forEach((el) => revealObserver.observe(el));
        }
    } else {
        document.querySelectorAll('.reveal').forEach((el) => el.classList.add('active'));
    }

    /* Mobile drawer */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileDrawer.classList.toggle('hidden');
            const expanded = !mobileDrawer.classList.contains('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        });

        mobileDrawer.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }
})();
