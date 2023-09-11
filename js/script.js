/* NOME, KM, ANNI, TIPOLOGIA TICKET */
let nameLastName = document.querySelector(".name-lastname");
let km = document.querySelector(".km");
let age = document.querySelector("#age");

let generaBtn = document.getElementById("genera");
let annullaBtn = document.getElementById("annulla");

let messaggio;
const minorenne = 1;
const maggiorenne = 2;
const over65 = 3;
let ticketType;
let passName = "Passenger Name: ";

document.querySelector(".ticket").style.display = "none";

/* DATI RANDOMICI */
const number = "NO: " + (Math.floor(Math.random() * (28394 - 2000 + 1) + 2000));
const seat = "Seat: " + (Math.floor(Math.random() * (20 - 1 + 1) + 1));
console.log(seat);
const platform ="Platform: " + (Math.floor(Math.random() * (10 - 1 + 1) + 1));

/* DATA E ORA */
const now = new Date();
const today = now.getDate();
const month = now.getMonth() + 1; 
let currentMonth;

  if (month == 1) {
    currentMonth = "Gennaio";
  } else if (month == 2) {
    currentMonth = "Febbraio";
  } else if (month == 3) {
    currentMonth = "Marzo";
  } else if (month == 4) {
    currentMonth = "Aprile";
  } else if (month == 5) {
    currentMonth = "Maggio";
  } else if (month == 6) {
    currentMonth = "Giugno";
  } else if (month == 7) {
    currentMonth = "Luglio";
  } else if (month == 8) {
    currentMonth = "Agosto";
  } else if (month == 9) {
    currentMonth = "Settembre";
  } else if (month == 10) {
    currentMonth = "Ottobre";
  } else if (month == 11) {
    currentMonth = "Novembre";
  } else {
    currentMonth = "Dicembre";
  }

const date = "Date: " + today + " " + currentMonth;
const hour = now.getHours();
const minute = now.getMinutes();
const depTime = "Departure Time " + hour + ":" + minute;
console.log(date);

/* CLICK BOTTONE GENERA */
generaBtn.addEventListener("click", function () {
  console.log(nameLastName.value);
  console.log(km.value);

  const kmValue = km.value;
  const costoAlKm = kmValue * 0.21;
  const costoAlKmDecimale = costoAlKm.toFixed(2);
  const costoBigliettoMinorenni = (
    costoAlKmDecimale -
    (costoAlKmDecimale * 20) / 100
  ).toFixed(2);
  const costoBigliettoOver = (
    costoAlKmDecimale -
    (costoAlKmDecimale * 40) / 100
  ).toFixed(2);

  document.querySelector(".ticket").style.display = "block";

  if (isNaN(kmValue)) {
    messaggio = `Inserire dei km validi`;
  } else if (age.value == minorenne) {
    messaggio = `${costoBigliettoMinorenni}€`;
    ticketType = "Under 18 Ticket - "
  } else if (age.value == over65) {
    messaggio = `${costoBigliettoOver}€`;
    ticketType = "Over 65 Ticket - "
  } else {
    messaggio = `${costoAlKmDecimale}€`;
    ticketType = "Adult Ticket - "
  }

  document.querySelector(".number").innerHTML = number;
  document.querySelector(".pass-name").innerHTML = passName + nameLastName.value;
  document.querySelector(".cost").innerHTML = messaggio;
  document.querySelector(".seat").innerHTML = seat;
  document.querySelector(".platform").innerHTML = platform;
  document.querySelector(".dep-time").innerHTML = depTime;
  document.querySelector(".date").innerHTML = date;
  document.querySelector(".ticket-type").innerHTML = ticketType;
});

/* CLICK BOTTONE ANNULLA */
annullaBtn.addEventListener("click", function () {
  document.querySelector(".ticket").style.display = "none";
  nameLastName.value = "";
  km.value = "";
});

