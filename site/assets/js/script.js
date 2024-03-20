'use strict';


//** add event listener */

const addEventListener = function (elements, eventType, callback) { 
    for(let i = 0, len = elements.length; i<len;  i++) {
        elements[i].addEventListener(eventType, callback);
    }
}


//** nav toggle mobile */

const navbar = document.querySelector("[data-navbar]");
const navToggle = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}
addEventListener(navToggle, "click", toggleNav);


//** header active header on scroll */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
})


const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {

    const sliderContainer = currentSlider.querySelector("[data-slider-container]");
    const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
    const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

    let currentSlide = 0;

    const moveSlider = function (direction) {
        sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlide].offsetLeft}px)`;

    }


const slideNext = function () {
    const slideEnd = currentSlide >= sliderContainer.childElementCount - 1;

    if (slideEnd) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    moveSlider();
}
sliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
    if(currrentSlide <= 0) {
        currentSlide =sliderContainer.childElementCount - 1;
    }
    else {
        currentSlide--;
 
    }
    moveSlider();}
    
sliderPrevBtn.addEventListener("click", slidePrev);

const notExtraItem = sliderContainer.childElementCount <=1;
if(notExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
}
}
for(let i = 0, len = sliders.length; i<len;  i++) {
    initSlider(sliders[i]);
}
