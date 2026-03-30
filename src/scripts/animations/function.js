import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionFunction = document.getElementById('function');

// Seteo inicial
gsap.set('[data-step="0"]', { autoAlpha: 1 });
gsap.set('[data-step-left="1"], [data-step-left="2"]', { autoAlpha: 0, x: -60 });
gsap.set('[data-step-right-tagline="1"], [data-step-right-tagline="2"]', { autoAlpha: 0, y: -60 });
gsap.set('[data-step-right-title="1"], [data-step-right-title="2"]', { autoAlpha: 0, y: -60 });

const functionTl = gsap.timeline({
    scrollTrigger: {
        trigger: sectionFunction,
        start: 'top 10%',
        end: '+=300%',
        pin: true,
        scrub: 1,
    }
});

// Step 1 sale
functionTl
.to('[data-step-left="0"]', { autoAlpha: 0, x: -60, duration: 0.3 })
.to('[data-step-right-tagline="0"]', { autoAlpha: 0, y: 60, duration: 0.3 }, '<')
.to('[data-step-right-title="0"]', { autoAlpha: 0, y: 60, duration: 0.3 }, '<')

// Step 2 entra
.to('[data-step="1"]', { autoAlpha: 1, duration: 0.01 })
.to('[data-step-left="1"]', { autoAlpha: 1, x: 0, duration: 0.4 })
.to('[data-step-right-tagline="1"]', { autoAlpha: 1, y: 0, duration: 0.4 }, '<')
.to('[data-step-right-title="1"]', { autoAlpha: 1, y: 0, duration: 0.4 }, '<')

// Step 2 sale
.to('[data-step-left="1"]', { autoAlpha: 0, x: -60, duration: 0.3 })
.to('[data-step-right-tagline="1"]', { autoAlpha: 0, y: 60, duration: 0.3 }, '<')
.to('[data-step-right-title="1"]', { autoAlpha: 0, y: 60, duration: 0.3 }, '<')

// Step 3 entra
.to('[data-step="2"]', { autoAlpha: 1, duration: 0.01 })
.to('[data-step-left="2"]', { autoAlpha: 1, x: 0, duration: 0.4 })
.to('[data-step-right-tagline="2"]', { autoAlpha: 1, y: 0, duration: 0.4 }, '<')
.to('[data-step-right-title="2"]', { autoAlpha: 1, y: 0, duration: 0.4 }, '<')

if (prefersReducedMotion.matches) {
    functionTl.disable();
}