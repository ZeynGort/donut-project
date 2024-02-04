const refs = {
  toggleMenuBtn: document.querySelector('[data-toggle-menu]'),
  links: document.querySelectorAll('.header__link'),
  menu: document.querySelector('[data-menu]'),
  svgOpen: document.querySelector('[data-toggle-menu] [open]'),
  svgClose: document.querySelector('[data-toggle-menu] [close]'),
};

refs.toggleMenuBtn.addEventListener('click', toggleMenu);
refs.links.forEach(element => element.addEventListener('click', toggleMenu));

function toggleMenu() {
  if (window.innerWidth < 1280) {
    const isOpened = refs.svgOpen.getAttribute('open');
    if (isOpened === 'false') {
      refs.menu.classList.add('open');
      document.querySelector('body').classList.add('noscroll');
      refs.svgOpen.setAttribute('open', 'true');
      refs.svgClose.setAttribute('close', 'false');
    } else {
      refs.menu.classList.remove('open');
      document.querySelector('body').classList.remove('noscroll');
      refs.svgOpen.setAttribute('open', 'false');
      refs.svgClose.setAttribute('close', 'true');
    }
  }
}
