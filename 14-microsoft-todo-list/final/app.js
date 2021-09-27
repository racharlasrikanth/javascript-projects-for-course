// SELECT ITEMS
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// EVENT LISTENERS

// submit form
form.addEventListener("submit", addItem);

// clear items
clearBtn.addEventListener("click", clearItems);

// load items
window.addEventListener("DOMContentLoaded", setupItems);

// FUNCTIONS
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    //   creating & adding item/todo
    createListItem(id, value);

    // display alert
    displayAlert("item added to the list", "alert-success");

    // show container
    container.classList.add("show-container");

    // add to local storage
    addToLocalStorage(id, value);

    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "alert-success");

    // edit local storage
    editLocalStorage(editID, value);

    setBackToDefault();
  } else {
    displayAlert("please enter a value", "alert-danger");
  }
}

// display alert
function displayAlert(text, className) {
  alert.textContent = text;
  alert.classList.add(className);

  //   remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(className);
  }, 2000);
}

// clear items func
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "alert-danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

// delete function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "alert-danger");
  setBackToDefault();

  //   remove from local storage
  removeFromLocalStorage(id);
}
// edit function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;

  //   set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;

  //   set form value
  grocery.value = editElement.textContent;
  editFlag = true;
  editID = element.dataset.id;

  //   set form edit button
  submitBtn.textContent = "edit";
}

// set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// LOCAL STORAGE
function addToLocalStorage(id, value) {
  const todo = { id, value };
  let items = getLocalStorage();
  //   let items = localStorage.getItem("list")
  //     ? JSON.parse(localStorage.getItem("list"))
  //     : [];
  items.push(todo);

  // add items to lcoalstorage
  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) return item;
  });

  // update items in lcoalstorage
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      return { ...item, value: value };
    }
    return item;
  });

  // update items in lcoalstorage
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// SETUP ITEMS
function setupItems() {
  const items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");

  // add class
  element.classList.add("grocery-item");

  // add id
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);

  // set html
  element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
        </div>
    `;

  // edit and delete we have access only when we added those items.
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  // append child
  list.appendChild(element);
}
