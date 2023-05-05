const nav = document.querySelector('.nav');
const navButton = document.querySelector('.nav-button');

nav.classList.add('nav--with-js');
nav.classList.add('nav--closed');

navButton.addEventListener('click', function() {
    nav.classList.toggle('nav--closed');
});