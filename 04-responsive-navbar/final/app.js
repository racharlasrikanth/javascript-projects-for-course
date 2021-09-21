// select elements

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// event on navToggle button
navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
