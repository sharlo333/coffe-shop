const bars = document.querySelector('.spn');
const bBras = document.querySelector('.fa-bars-staggered');
const xMark = document.querySelector('.fa-xmark');
const nav = document.querySelector('.nav');

bars.addEventListener('click', () => {
    bBras.classList.toggle('active');
    xMark.classList.toggle('active');
    nav.classList.toggle('active');
});