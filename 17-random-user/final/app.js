// imports
import getElement from "./utils/getElement.js";
import getUser from "./utils/getUser.js";
import displayUser from "./utils/displayUser.js";

// selected elemetns
const btn = getElement(".btn");

// FUNCTIONS
const showUser = async () => {
  // get user from api (fetch)
  const person = await getUser();

  //   display user
  displayUser(person);
};

// EVENT LISTENERS
window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
