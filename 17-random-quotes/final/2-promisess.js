const btn = document.querySelector(".btn");
const quote = document.querySelector(".content");
const authorName = document.querySelector(".author span");

// API URL
const URL = "https://api.quotable.io/random";

// Event Listeners
btn.addEventListener("click", () => {
  getData(URL)
    .then((response) => displayData(JSON.parse(response)))
    .catch((err) => console.log(err));
});

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText,
        });
      }
    };
  });
}

function displayData(data) {
  const { content, author } = data;
  quote.textContent = content;
  authorName.textContent = author;
}
