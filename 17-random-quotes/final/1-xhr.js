const btn = document.querySelector(".btn");
const quote = document.querySelector(".content");
const authorName = document.querySelector(".author span");

// API URL
const URL = "https://api.quotable.io/random";

// Event Listeners
btn.addEventListener("click", () => {
  getData(URL);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      const { content, author } = JSON.parse(xhr.responseText);
      //   add to dom
      quote.textContent = content;
      authorName.textContent = author;
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
}
