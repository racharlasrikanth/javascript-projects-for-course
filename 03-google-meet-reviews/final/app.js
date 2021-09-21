// local reviews data
const reviews = [
  {
    id: 1,
    name: "Christoper Emma",
    job: "web developer",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatibus perferendis saepe consequatur atque nostrum nam. Animi autem neque incidunt?",
  },
  {
    id: 2,
    name: "Mathilde Langevin",
    job: "UI Engineer",
    img: "https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ipsa eligendi necessitatibus doloremque excepturi veritatis quo est ad corrupti animi!",
  },
  {
    id: 3,
    name: "Ransford quaye",
    job: "Backend developer",
    img: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, porro.",
  },
  {
    id: 4,
    name: "Michael dam",
    job: "Front end developer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi, corporis sapiente quae iusto aperiam inventore  quos. Sed, consectetur tenetur!",
  },
  {
    id: 5,
    name: "Jake nackos",
    job: "front end developer",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptatibus voluptas quia laboriosam officia dolor natus corrupti sunt aperiam rem.",
  },
  {
    id: 6,
    name: "nishanth avva",
    job: "web developer",
    img: "https://images.unsplash.com/photo-1598411072028-c4642d98352c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, dolorem. Earum, deserunt. Recusandae ab minima animi corporis commodi rerum, perspiciatis nam blanditiis voluptates numquam quam.",
  },
  {
    id: 7,
    name: "clayton cardinalli",
    job: "developer",
    img: "https://images.unsplash.com/photo-1589696485114-9e2f81d83484?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, dolorem. orporis commodi rerum, perspiciatis nam blanditiis voluptates numquam quam.",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const impressBtn = document.querySelector(".impress-btn");

// set starting item
let currentItem = getRandomNumber();

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// show random person using impress button
impressBtn.addEventListener("click", function () {
  let randomNumber = getRandomNumber();
  if (randomNumber === currentItem) {
    randomNumber = getRandomNumber();
  }
  currentItem = randomNumber;
  showPerson(currentItem);
});

// get random number
function getRandomNumber() {
  return Math.trunc(Math.random() * reviews.length);
}
