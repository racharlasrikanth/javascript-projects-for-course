import fetchFollowers from "./fetchFollowers.js";
import displayUsers from "./displayFollowers.js";

const sectionTitle = document.querySelector(".section-title h1");
const container = document.querySelector(".container");

const init = async () => {
    const data = await fetchFollowers();
    sectionTitle.textContent = "pagination";
    displayUsers(data, container);
}

window.addEventListener("load", init)