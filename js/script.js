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
const number = "NO: " + randomizer(28394, 2000);
const seat = "Seat: " + randomizer(20, 1);
console.log(seat);
const platform ="Platform: " +  randomizer(10, 1);

/* DATA E ORA */
const now = new Date();
const today = now.getDate();
const month = now.getMonth() + 1; 
let currentMonth;

switch (month){
  case 1:
    currentMonth = "Gennaio";
    break;
  case 2:
    currentMonth = "Febbraio";
    break;
  case 3:
    currentMonth = "Marzo";
    break;
  case 4:
    currentMonth = "Aprile";
    break;
  case 5:
    currentMonth = "Maggio";
    break;
  case 6:
    currentMonth = "Giugno";
    break;
  case 7:
    currentMonth = "Luglio";
    break;
  case 8:
    currentMonth = "Agosto";
    break;
  case 9:
    currentMonth = "Settembre";
    break;
  case 10:
    currentMonth = "Ottobre";
    break;
  case 11:
    currentMonth = "Novembre";
    break;
  case 12:
    currentMonth = "Dicembre";
    break;
}

const date = "Date: " + today + " " + currentMonth;
const hour = now.getHours();
const minute = now.getMinutes();
const depTime = "Departure Time " + hour + ":" + minute;

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


function randomizer(min, max){
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}


