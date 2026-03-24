import gsap from 'gsap';

const header = document.getElementById('header');
const itemLogo = document.querySelector('[data-header-logo]');
const itemsNav = document.querySelectorAll('[data-header-item]');
const itemCta = document.querySelector('[data-header-cta]');



const headerTl = gsap.timeline({
    defaults: {
        ease: 'back.out(3)'
    }
});


headerTl.
from(header,{y: -40, autoAlpha: 0, duration: 0.45,})
.from(itemLogo,{y: -10, autoAlpha: 0, duration: 0.30,})
.from(itemsNav,{y: -10, autoAlpha: 0, duration: 0.35, stagger: 0.2, clearProps: "transform",})
.from(itemCta, {y: -10, autoAlpha: 0, duration: 0.40,})