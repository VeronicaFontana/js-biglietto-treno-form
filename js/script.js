const nameLastName = document.getElementById("name-lastname").value;
const km = parseInt(document.getElementById("km"));
const age = document.getElementById("age");

const generaBtn = document.getElementById("genera");
const annullaBtn = document.getElementById("annulla");


const costoAlKm = km * 0.21;
const costoAlKmDecimale = costoAlKm.toFixed(2);

const costoBigliettoMinorenni = (costoAlKmDecimale - ((costoAlKmDecimale * 20) / 100)).toFixed(2);
const costoBigliettoOver = (costoAlKmDecimale - ((costoAlKmDecimale * 40) / 100)).toFixed(2);

let messaggio; 

generaBtn.addEventListener("click", function(){
  if (isNaN(km)){
    messaggio = `Inserire dei km validi`; 
  } else if (age.value = 1){
    messaggio = `Il tuo biglietto costava ${costoAlKmDecimale}€, ma con lo sconto sono ${costoBigliettoMinorenni}€`;
  } else if (age.value = 3) {
    messaggio = `Il tuo biglietto costava ${costoAlKmDecimale}€, ma con lo sconto sono ${costoBigliettoOver}€`;
  } else {
    messaggio = `Il tuo biglietto costa ${costoAlKmDecimale}€`
  }

  document.getElementById("Costo").innerHTML = messaggio;
})

