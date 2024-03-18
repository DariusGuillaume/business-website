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