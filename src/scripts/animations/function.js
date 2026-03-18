import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.set('[data-step-left="0"]', { autoAlpha: 1})
gsap.set('[data-step-right="0"]', { autoAlpha: 1})

