const nav = document.querySelector('.nav');
const navButton = document.querySelector('.nav-button');

nav.classList.add('nav--with-js');
nav.classList.add('nav--closed');

navButton.addEventListener('click', function () {
  nav.classList.toggle('nav--closed');
});
//slider
const sliderList = document.querySelector('.slider-list__item');
const sliderBtnPrev = document.querySelector('.review__sliders--prev');
const sliderBtnNext = document.querySelector('.review__sliders--next');

sliderList.classList.add('slider-list__item--active');

sliderBtnPrev.addEventListener('click', function () {
  sliderBtnPrev.classList.toggle('slider-list__item--active');
});

