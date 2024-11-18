const burger = document.querySelector('.burger');
const headerButtons = document.querySelector('.header_buttons');

burger.addEventListener('click', () => {
    headerButtons.classList.toggle('show');
});
