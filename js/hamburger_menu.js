const hamburger = document.getElementById('hamburger');
const displayedMenu = document.getElementById('displayed-menu');
const closeMenu = document.getElementById('close-hamburger');

const INACTIVE_CLASS = 'inactive';

const active = (Element, active) => {
    if(active) Element.classList.add(INACTIVE_CLASS);
    else Element.classList.remove(INACTIVE_CLASS);
}

hamburger.addEventListener('click', () => {
    displayedMenu.style.display = 'initial';
    active(hamburger, true);
    active(closeMenu, false);
})

closeMenu.addEventListener('click', () => {
    displayedMenu.style.display = 'none';
    active(hamburger, false);
    active(closeMenu, true);
})