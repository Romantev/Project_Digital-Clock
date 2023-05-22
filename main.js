let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

const actualTime = () => {
  let dateSeconds = new Date().getSeconds();
  let dateMinute = new Date().getMinutes();
  let dateHour = new Date().getHours();
  let dateDate = new Date().getDate();
  let dateMonth = monate[new Date().getMonth()];
  let dateYear = new Date().getFullYear();
  let dateDisplayDay = wochenTag[new Date().getDay()];

  const period = document.querySelector(".period");

  document.querySelector(".today").innerHTML = dateDisplayDay;
  document.querySelector(".day").innerHTML =
    dateDate < 10 ? "0" + dateDate : dateDate;
  document.querySelector(".month").innerHTML = dateMonth;
  document.querySelector(".year").innerHTML = dateYear;
  document.querySelector(".second").innerHTML =
    dateSeconds < 10 ? "0" + dateSeconds : dateSeconds;
  document.querySelector(".minute").innerHTML =
    dateMinute < 10 ? "0" + dateMinute : dateMinute;
  document.querySelector(".hour").innerHTML =
    dateHour < 10 ? "0" + dateHour : dateHour;
  setTimeout(actualTime, 1000);

  if (dateSeconds == 0) {
    dateMinute += 1;
  }
  if (dateMinute == 0) {
    dateHour += 1;
  }
  if (dateHour == 0) {
    dateDate += 1;
    dateDisplayDay = wochenTag[new Date().getDay() + 1];
  }

  if (dateDate == 1) {
    dateMonth += monate[new Date().getMonth() + 1];
  }

  if (dateMonth == "Dezember") {
    dateYear += 1;
  }

  if (dateHour < 12) {
    period.innerHTML = "AM";
  } else {
    period.innerHTML = "PM";
  }
};

actualTime();
