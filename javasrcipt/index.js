let burger = document.querySelector('.header_btn__burger');
let menu = document.querySelector('.header_nav');
let menuLinks = document.querySelectorAll('.header_nav__link');
let searchForm = document.querySelector('.header__form__search');
let searchBtn = document.querySelector('.header__btn-search');
let formBtnsearch = document.querySelector('.header__btn-search__form');
let formBtnExit = document.querySelector('.header__btn-search_exit');
let tabBtn = document.querySelectorAll('.main_description__control');
let tabSlide = document.querySelectorAll('.main_description_slide_blok');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header_nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header_nav--active');

    document.body.classList.remove('stop-scroll');

  })
})


searchBtn.addEventListener('click',

  function() {

    searchBtn.classList.toggle('header__btn-search--active');

    searchForm.classList.toggle('header__form__search--active');

    document.body.classList.toggle('stop-scroll');
})

formBtnExit.addEventListener('click',

  function() {

    searchBtn.classList.remove('header__btn-search--active');

    searchForm.classList.remove('header__form__search--active');

    document.body.classList.remove('stop-scroll');
  })

  formBtnsearch.addEventListener('click',

  function() {

    searchBtn.classList.remove('header__btn-search--active');

    searchForm.classList.remove('header__form__search--active');

    document.body.classList.remove('stop-scroll');
  })

tabBtn.forEach(function(element) {

  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabBtn.forEach(function(btn) { btn.classList.remove('tab_btn--active')});
    e.currentTarget.classList.add('tab_btn--active');

    tabSlide.forEach(function(element){element.classList.remove('main_description__tab--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('main_description__tab--active');

  })

});

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

new Accordion('.accordion-container');







