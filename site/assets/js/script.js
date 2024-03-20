'use strict';

// Add event listener function
const addEventListener = function (elements, eventType, callback) { 
    for(let i = 0, len = elements.length; i<len;  i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

// Navigation toggle for mobile
const navbar = document.querySelector("[data-navbar]");
const navToggle = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}
addEventListener(navToggle, "click", toggleNav);

// Header active state on scroll
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
})

// Initialize sliders
const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {
    const sliderContainer = currentSlider.querySelector("[data-slider-container]");
    const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
    const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

    let currentSlide = 0;

    const moveSlider = function () {
        sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    const slideNext = function () {
        currentSlide = (currentSlide + 1) % sliderContainer.children.length;
        moveSlider();
    }

    const slidePrev = function () {
        currentSlide = (currentSlide - 1 + sliderContainer.children.length) % sliderContainer.children.length;
        moveSlider();
    }

    sliderNextBtn.addEventListener("click", slideNext);
    sliderPrevBtn.addEventListener("click", slidePrev);

    if (sliderContainer.children.length <= 1) {
        sliderNextBtn.style.display = "none";
        sliderPrevBtn.style.display = "none";
    }
}

for (let i = 0; i < sliders.length; i++) {
    initSlider(sliders[i]);
}
