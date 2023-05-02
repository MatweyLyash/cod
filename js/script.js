const menuIcon = document.querySelector('.menu__icon');
if (menuIcon) {
    const menuBody = document.querySelector('.header-menu');
    menuIcon.addEventListener('click', () => {
        menuBody.classList.toggle('open');
        menuIcon.classList.toggle('open');
    });
}