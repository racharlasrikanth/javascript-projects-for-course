const btn = document.querySelector(".btn");
const quote = document.querySelector(".content");
const authorName = document.querySelector(".author span");
const tagsDom = document.querySelector(".tags");

// API URL
const URL = "https://api.quotable.io/random";

// API DOCS
// https://github.com/lukePeavey/quotable

// FUNCTIONS
function displayData(data) {
  const { content, author, tags } = data;
  quote.textContent = content;
  authorName.textContent = author;
  const allTags = tags
    .map((tag) => {
      return `<button class='eachTag'>${tag}</button>`;
    })
    .join("");
  tagsDom.innerHTML = allTags;
}

const getApiCall = async () => {
  quote.textContent = "Loading...";
  authorName.textContent = "...";
  tagsDom.innerHTML = `<p>Loading...</p>`;
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
};

// Event Listeners
btn.addEventListener("click", getApiCall);

// DOM loading
getApiCall();
