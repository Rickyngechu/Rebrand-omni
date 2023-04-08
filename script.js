'use strict';
//AT FIRST WE SELECT ALL THE HTML ELEMENTS THROUGHT CLASSES
const tabBtns = document.querySelector('.tab-buttons');
const btnT = document.querySelectorAll('.btn-tab');
const btn1 = document.querySelector('.btn-tab--1');
const btn2 = document.querySelector('.btn-tab--2');

const hero = document.querySelector('.section-hero');

const cardP = document.querySelector('.price');
const cardP1 = document.querySelector('.price-1');
const cardP2 = document.querySelector('.price-2');
const cardP3 = document.querySelector('.price-3');
const headN = document.querySelector('.header');
const navi = document.querySelector('.navigation');
const priceBtn = document.querySelector('.navigation__link-btn');
const heroDesc = document.querySelector('.hero__description');
const hamOpen = document.querySelector('.hambuger');
const mbClose = document.querySelector('.mb-close');
const mobile = document.querySelector('.mb');
const mobileCt = document.querySelector('.mobile');
const mobileNav = document.querySelector('.mobile-nav');
const mbLink = document.querySelector('.mobile__link');

//IMPLEMENTING THE BUTTON CLOSE AND OPEN ON THE NAVBAR
const close = function () {
  mobile.style.opacity = 0;
  mobile.style.zIndex = 0;
  mobileNav.style.width = 0;
  mobileNav.style.opacity = 0;
};
const navOpen = function () {
  mobile.style.opacity = 1;
  mobile.style.zIndex = 1000;
  mobileNav.style.width = '25%';
  mobileNav.style.opacity = 1;
};
mbClose.addEventListener('click', close);
hamOpen.addEventListener('click', navOpen);

//HERE WE ARE IMPLEMENTING THE STICKY MOBILE NAVIGATION
const callback1 = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) mobileNav.classList.add('sticky-mobile');
  if (entry.isIntersecting) mobileNav.classList.remove('sticky-mobile');
};
const mobileObs = new IntersectionObserver(callback1, {
  root: null,
  threshold: 0,
  rootMargin: '-90px',
});
mobileObs.observe(hero);

//IMPLEMENTING SMOOTH SCROLL ON MOBILE DEVICES AND RESET IT
//(lets refactor this code)
const smoothScroll = function (id) {
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
};
mobileCt.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('mobile__link')) {
    const id = e.target.getAttribute('href');
    smoothScroll(id);
    close();
  }
});

//HERE WE ARE IMPLEMENTING THE SMOOTH SCROLL ON NAVIGATION NAVBAR FUNTION
navi.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('navigation__link')) {
    const id = e.target.getAttribute('href');
    smoothScroll(id);
  }
});

priceBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  smoothScroll(id);
  close();
});

heroDesc.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('btn')) {
    const id = e.target.getAttribute('href');
    smoothScroll(id);
  }
});

//HERE WE ARE IMPLEMENTING THE STICKY NAVBAR FUNTION
const callback = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) headN.classList.add('sticky');
  if (entry.isIntersecting) headN.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(callback, {
  root: null,
  threshold: 0,
  rootMargin: '-90px',
});
headerObserver.observe(hero);

//TOGGLE THE BUTTON ELEMENTS
tabBtns.addEventListener('click', function (e) {
  const clicked = e.target;
  if (!clicked) return;
  btn1.classList.toggle('btn--active');
  btn2.classList.toggle('btn--active');

  let card1 = (cardP1.innerHTML = '$399');
  let card2 = (cardP2.innerHTML = '$699');
  let card3 = (cardP3.innerHTML = '$999');

  if (btn2.classList.contains('btn--active') && card1 && card2 && card3) {
    cardP1.innerHTML = '$3999';
    cardP2.innerHTML = '$6999';
    cardP3.innerHTML = '$9999';
  }
});
