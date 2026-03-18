import gsap from 'gsap';

const header = document.getElementById('header');
const itemLogo = document.querySelector('[data-header-logo]');
const itemsNav = document.querySelectorAll('[data-header-item]');
const itemCta = document.querySelector('[data-header-cta]');



const headerTl = gsap.timeline();
gsap.set(header, {autoAlpha: 0, y: -10});
gsap.set(itemLogo, {autoAlpha: 0, x: -100});
gsap.set(itemsNav, {autoAlpha: 0, y: -10});
gsap.set(itemCta, {autoAlpha: 0, x: 100});

headerTl.
to(header,{y: 0, autoAlpha: 1, duration: 0.45, ease: 'power4.out',})
.to(itemLogo,{x: 0, autoAlpha: 1, duration: 0.3, ease: "back.out(3)", clearProps: "transform",})
.to(itemsNav,{y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.2, ease: 'back.out(3)',})
.to(itemCta, {x: 0, autoAlpha: 1, duration: 0.45, ease: "back.out(3)",})