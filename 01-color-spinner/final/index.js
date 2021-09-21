const colors = [
  "red",
  "green",
  "blue",
  "rgba(133, 122, 200)",
  "#f15025",
  "yellow",
  "pink",
  "orange",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let previousNumber = 0;

btn.addEventListener("click", function () {
  let randomNumber = getRandomNumber();
  if (previousNumber === randomNumber) {
    randomNumber = getRandomNumber();
  }
  previousNumber = randomNumber;
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.trunc(Math.random() * colors.length);
}
