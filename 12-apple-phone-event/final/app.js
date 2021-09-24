const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const appleNewPhone = document.querySelector(".appleNewPhone");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// do this last

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
let tempHours = tempDate.getHours();
let tempMinutes = tempDate.getMinutes();
let tempSeconds = tempDate.getSeconds();

// do this last

const futureDate = new Date(
  tempYear,
  tempMonth,
  tempDay + 8,
  tempHours,
  tempMinutes,
  tempSeconds
);

// let futureDate = new Date(2021, 9, 4, 11, 30, 59);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

appleNewPhone.textContent = `apple event starts on ${weekday}, ${date}th ${year} ${month} ${hours}:${minutes}am`;

// future time in milli seconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const diffrenceOfTwoTimes = futureTime - today;

  //   1s = 1000ms
  //   1m = 60s
  //   1hour = 60min
  //   1day = 24hrs

  //   values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //   calculate all values
  let days = diffrenceOfTwoTimes / oneDay;
  days = Math.trunc(days);
  let hours = Math.trunc((diffrenceOfTwoTimes % oneDay) / oneHour);
  let minutes = Math.trunc((diffrenceOfTwoTimes % oneHour) / oneMinute);
  let seconds = Math.trunc((diffrenceOfTwoTimes % oneMinute) / 1000);

  //   set values array;
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (diffrenceOfTwoTimes < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='eventStarted'>Apple Event Started</h4>`;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
