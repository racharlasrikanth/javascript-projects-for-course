const btn = document.querySelector(".btn");
const quote = document.querySelector(".content");
const authorName = document.querySelector(".author span");

// API URL
const URL = "https://api.quotable.io/random";

// Event Listeners
btn.addEventListener("click", async () => {
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
});

function displayData(data) {
  const { content, author } = data;
  quote.textContent = content;
  authorName.textContent = author;
}
