import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const heroTitle = SplitText.create('[data-hero-title]', {type: 'chars, words'});

const heroTl = gsap.timeline({
    delay: 0.3,
    defaults: {ease: 'power4.out', duration: 0.4,},
});


heroTl
.from('[data-hero-tagline]', { autoAlpha: 0, y: -40})
.from(heroTitle.chars, { autoAlpha: 0, x: -40, stagger: 0.06, mask: "lines:start"})
.from('[data-hero-description]', { autoAlpha: 0, x: -40}, '-=0.2')
.from('[data-hero-cta]', { autoAlpha: 0, x: -40, ease: 'back.out(3)', duration: 0.5}, '-=0.3')
.from('[data-metric]', { autoAlpha: 0, y: 40, stagger: 0.15, clearProps: 'all'}, '-=0.1')