const btn = document.querySelector(".btn");
const quote = document.querySelector(".content");
const authorName = document.querySelector(".author span");

// API URL
const URL = "https://api.quotable.io/random";

// Event Listeners
btn.addEventListener("click", () => {
  fetch(URL)
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
});

function displayData(data) {
  const { content, author } = data;
  quote.textContent = content;
  authorName.textContent = author;
}
