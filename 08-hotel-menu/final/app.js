const menu = [
  {
    id: 1,
    title: "Egg Omlet Hot",
    category: "breakfast",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    title: "Egg Puff",
    category: "breakfast",
    price: 19.99,
    img: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 3,
    title: "Egg Puff",
    category: "lunch",
    price: 9.99,
    img: "https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 4,
    title: "Egg fired rice with spicy",
    category: "dinner",
    price: 29.99,
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 5,
    title: "Lemon Juice with full of Salt",
    category: "drink",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 6,
    title: "Watermelon Juice with full of Sweet",
    category: "drink",
    price: 35.99,
    img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 7,
    title: "Lemon Juice with Alcoohol",
    category: "drink",
    price: 55.99,
    img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1592&q=80",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 8,
    title: "Thulasi Milk with ice",
    category: "drink",
    price: 25.89,
    img: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 9,
    title: "Nature plants",
    category: "dinner",
    price: 15.65,
    img: "https://images.unsplash.com/photo-1572862905000-c5b6244027a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 10,
    title: "Spicy Chicken",
    category: "dinner",
    price: 15.65,
    img: "https://images.unsplash.com/photo-1539735257177-0d3949225f96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 11,
    title: "Spicy Mutton",
    category: "lunch",
    price: 27.65,
    img: "https://images.unsplash.com/photo-1600336247312-ba19bc8e60fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 12,
    title: "Egg Manchuria",
    category: "lunch",
    price: 17.65,
    img: "https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 12,
    title: "KFC Nuts Biscuits",
    category: "lunch",
    price: 37.65,
    img: "https://images.unsplash.com/photo-1564844536325-08c9e7f70617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 13,
    title: "Barbique love",
    category: "lunch",
    price: 77.65,
    img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

// this function display menuitem in UI
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (eachItem) {
    return `
    <article class="menu-item">
        <img
        src="${eachItem.img}"
        alt="${eachItem.title}"
        class="photo"
        />
        <div class="item-info">
        <header>
            <h4>${eachItem.title}</h4>
            <h4 class="price">$${eachItem.price}</h4>
        </header>
        <p class="item-text">
            ${eachItem.desc}
        </p>
        </div>
    </article>
    `;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

// this function get the all the categories buttons and data will display based on clicked category
function displayMenuButtons() {
  // get all categories with unique values
  const categories = menu.reduce(
    (list, eachItem) => {
      if (!list.includes(eachItem.category)) {
        list.push(eachItem.category);
      }
      return list;
    },
    ["all"]
  );

  //   preapring category buttons with html
  const categoryButtons = categories
    .map(function (category) {
      return `
    <button type="button"               class="filter-btn" data-id="${category}">${category}</button>
    `;
    })
    .join("");

  btnContainer.innerHTML = categoryButtons;

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  //   console.log(filterBtns);

  //   on click filter button data will display
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      //   console.log(e.target.dataset);
      const category = e.target.dataset.id;
      const afterFilterMenu = menu.filter(function (eachItem) {
        return eachItem.category === category;
      });

      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(afterFilterMenu);
      }
    });
  });
}
