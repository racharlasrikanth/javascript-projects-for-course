// imports
import getElement from "./getElement.js";
import removeActiveBtn from "./removeActive.js";

// Select Elements
const image = getElement(".photo");
const title = getElement(".user-title");
const value = getElement(".user-value");
const btns = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
  image.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  removeActiveBtn(btns);
  btns[0].classList.add("active");

  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      removeActiveBtn(btns);
      btn.classList.add("active");
    });
  });
};

export default displayUser;
