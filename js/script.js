"use strict";
const navItem = document.querySelector(
  ".navigation__nav > .navigation__list > .navigation__item"
);
const navBtn = document.querySelector(".navigation__button");
const navIcon = document.querySelector(".navigation__icon");
// Smooth scrolling

document
  .querySelector(".navigation__list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    navItem.addEventListener("onclick", navBtn.click());
    if (e.target.classList.contains("navigation__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
