import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const heroTitle = SplitText.create('[data-hero-title]', {type: 'lines', mask: "lines"});

const heroTl = gsap.timeline({
    delay: 0.3,
    defaults: {ease: 'power4.out', duration: 0.4, autoAlpha: 0},
});


heroTl
.from('[data-hero-tagline]', { y: -40})
.from(heroTitle.lines, {autoAlpha: 1, duration: 0.8, yPercent: 100, stagger: 0.09,})
.from('[data-hero-description]', { x: -40}, '-=0.2')
.from('[data-hero-cta]', { x: -40, ease: 'back.out(3)', duration: 0.5}, '-=0.3')
.from('[data-metric]', { y: 40, stagger: 0.15, clearProps: 'all'}, '-=0.1')