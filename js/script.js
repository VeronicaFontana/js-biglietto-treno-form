let nameLastName = document.getElementById("name-lastname");
let km = document.getElementById("km");
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
  console.log(age.value);
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
    messaggio = `Il tuo biglietto costava ${costoAlKmDecimale}€, ma con lo sconto sono ${costoBigliettoMinorenni}€ perché sei minorenne`;
  } else if (age.value == over65) {
    messaggio = `Il tuo biglietto costava ${costoAlKmDecimale}€, ma con lo sconto sono ${costoBigliettoOver}€ perché sei Over65`;
  } else {
    messaggio = `Il tuo biglietto costa ${costoAlKmDecimale}€`;
  }

  document.getElementById("Costo").innerHTML = messaggio;
});

annullaBtn.addEventListener("click", function () {
  document.getElementById("ticket").style.display = "none";
});
