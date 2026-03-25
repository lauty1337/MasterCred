import gsap from 'gsap';

const header = document.getElementById('header');
const itemLogo = document.querySelector('[data-header-logo]');
const itemsNav = document.querySelectorAll('[data-header-item]');
const itemCta = document.querySelector('[data-header-cta]');

const headerTl = gsap.timeline({
	defaults: {
		ease: 'back.out(3)',
	},
});

headerTl
	.from(header, { y: -40, autoAlpha: 0, duration: 0.45 })
	.from(itemLogo, { y: -10, autoAlpha: 0, duration: 0.3 })
	.from(itemsNav, { y: -10, autoAlpha: 0, duration: 0.35, stagger: 0.2, clearProps: 'transform' })
	.from(itemCta, { y: -10, autoAlpha: 0, duration: 0.4 });

/* ——— Menú móvil (hamburguesa) ——— */

const menuToggle = document.querySelector('[data-menu-toggle]');
const menuRoot = document.querySelector('[data-mobile-menu]');
const menuBackdrop = document.querySelector('[data-menu-backdrop]');
const menuLinks = document.querySelectorAll('[data-menu-link]');
const menuToggleLabel = document.querySelector('[data-menu-toggle-label]');

function setMenuOpen(open) {
	if (!menuToggle || !menuRoot) return;

	menuToggle.setAttribute('aria-expanded', String(open));
	menuRoot.classList.toggle('is-open', open);
	menuRoot.setAttribute('aria-hidden', String(!open));
	document.body.style.overflow = open ? 'hidden' : '';

	if (menuToggleLabel) {
		menuToggleLabel.textContent = open ? 'Cerrar menú' : 'Abrir menú';
	}
}

function toggleMenu() {
	const abierto = menuToggle.getAttribute('aria-expanded') === 'true';
	setMenuOpen(!abierto);
}

menuToggle?.addEventListener('click', (e) => {
	e.stopPropagation();
	toggleMenu();
});

menuBackdrop?.addEventListener('click', () => setMenuOpen(false));

menuLinks.forEach((link) => {
	link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
		setMenuOpen(false);
	}
});
