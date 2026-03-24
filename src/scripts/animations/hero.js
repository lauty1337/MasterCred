import gsap from 'gsap';

const heroTagline = document.querySelector('[data-hero-tagline]');
const heroTitle = document.querySelector('[data-hero-title]');
const heroDescription = document.querySelector('[data-hero-description]');
const heroCta = document.querySelector('[data-hero-cta]');
const heroMetrics = document.querySelectorAll('[data-metric]');



const heroTl = gsap.timeline({
    delay: 0.3,
    defaults: {ease: 'power4.out', duration: 0.4,},
});


heroTl
.from(heroTagline, { autoAlpha: 0, y: -40})
.from(heroTitle, { autoAlpha: 0, x: -40, duration: 0.7})
.from(heroDescription, { autoAlpha: 0, x: -40}, '-=0.3')
.from(heroCta, { autoAlpha: 0, x: -40, ease: 'back.out(3)', duration: 0.5}, '-=0.3')
.from(heroMetrics, { autoAlpha: 0, y: 40, stagger: 0.15, clearProps: 'all'}, '-=0.1')