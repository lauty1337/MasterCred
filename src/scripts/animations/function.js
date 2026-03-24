import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionFunction = document.getElementById('function');

const step0 = document.querySelector('[data-step="0"]');
const step0Left = document.querySelector('[data-step-left="0"]');
const step0RightTagline = document.querySelector('[data-step-right-tagline="0"]');
const step0RightTitle = document.querySelector('[data-step-right-title="0"]');

const step1 = document.querySelector('[data-step="1"]');
const step1Left = document.querySelector('[data-step-left="1"]');
const step1RightTagline = document.querySelector('[data-step-right-tagline="1"]');
const step1RightTitle = document.querySelector('[data-step-right-title="1"]');

const step2 = document.querySelector('[data-step="2"]');
const step2Left = document.querySelector('[data-step-left="2"]');
const step2RightTagline = document.querySelector('[data-step-right-tagline="2"]');
const step2RightTitle = document.querySelector('[data-step-right-title="2"]');

// Seteo inicial
gsap.set(step0, { autoAlpha: 1 });
gsap.set([step1Left, step2Left], { autoAlpha: 0, x: -60 });
gsap.set([step1RightTagline, step2RightTagline], { autoAlpha: 0, y: -60 });
gsap.set([step1RightTitle, step2RightTitle], { autoAlpha: 0, y: -60 });

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
.to(step0Left, { autoAlpha: 0, x: -60, duration: 0.3 })
.to(step0RightTagline, { autoAlpha: 0, y: 60, duration: 0.3 }, '<')
.to(step0RightTitle, { autoAlpha: 0, y: 60, duration: 0.3 }, '<')

// Step 2 entra
.to(step1, { autoAlpha: 1, duration: 0.01 })
.to(step1Left, { autoAlpha: 1, x: 0, duration: 0.4 })
.to(step1RightTagline, { autoAlpha: 1, y: 0, duration: 0.4 }, '<')
.to(step1RightTitle, { autoAlpha: 1, y: 0, duration: 0.4 }, '<')

// Step 2 sale
.to(step1Left, { autoAlpha: 0, x: -60, duration: 0.3 })
.to(step1RightTagline, { autoAlpha: 0, y: 60, duration: 0.3 }, '<')
.to(step1RightTitle, { autoAlpha: 0, y: 60, duration: 0.3 }, '<')

// Step 3 entra
.to(step2, { autoAlpha: 1, duration: 0.01 })
.to(step2Left, { autoAlpha: 1, x: 0, duration: 0.4 })
.to(step2RightTagline, { autoAlpha: 1, y: 0, duration: 0.4 }, '<')
.to(step2RightTitle, { autoAlpha: 1, y: 0, duration: 0.4 }, '<');
