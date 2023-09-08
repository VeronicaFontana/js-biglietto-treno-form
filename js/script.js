let nameLastName = document.querySelector(".name-lastname");
let km = document.querySelector(".km");
let age = document.querySelector("#age");

let generaBtn = document.getElementById("genera");
let annullaBtn = document.getElementById("annulla");

document.getElementById("ticket").style.display = "none";

let messaggio;
const minorenne = 1;
const maggiorenne = 2;
const over65 = 3;

let ticketVisibility = false;

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

  document.getElementById("ticket").style.display = "block";

  if (isNaN(kmValue)) {
    messaggio = `Inserire dei km validi`;
  } else if (age.value == minorenne) {
    messaggio = `${costoBigliettoMinorenni}€`;
  } else if (age.value == over65) {
    messaggio = `${costoBigliettoOver}€`;
  } else {
    messaggio = `${costoAlKmDecimale}€`;
  }

  document.querySelector(".ticket-name").innerHTML = nameLastName.value;
  document.querySelector(".Costo").innerHTML = messaggio;
});

annullaBtn.addEventListener("click", function () {
  document.getElementById("ticket").style.display = "none";
});
