// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// Chiedo di inserire un nemero all' utente.
// IF il nemero è pari % 2 == 0
// ELSE il numero è dispari % 2 !== 0, aggiungi  +1 e stampa il numero

// Chiedo di inserire un nemero all' utente.
// console.log(userNumber);
const numberEl = document.getElementById("insert-number");
const buttonEl = document.getElementById("button-dom");
const resultEl = document.getElementById("result");
// console.log(resultEl);
// console.log(numberEl);
// console.log(userNumber);

buttonEl.addEventListener("click", function () {
  // Chiedo di inserire un nemero all' utente.
  let userNumber = parseInt(numberEl.value);

  if (userNumber % 2 == 0) {
    console.log(userNumber);
    resultEl.innerHTML = userNumber;
  } else {
    console.log(userNumber + 1);
    resultEl.innerHTML = userNumber + 1;
  }
});
