// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// Creare un array con diversi numeri all'interno.
//  fare ciclo FOR
// IF il numero è dispari
// stampa del div rosso
// ELSE il numero è pari
// stampa il numero nel div verde
const pariEl = document.getElementById("pari");
const dispariEl = document.getElementById("dispari");
const numbers = [1, 2, 3, 34, 55, 66, 778, 54, 3543, 99];

for (let i = 0; i < numbers.length; i++) {
  const pari = numbers[i] % 2 == 0;
  if (pari) {
    pariEl.innerHTML += ` ${numbers[i]}  `;
  } else {
    dispariEl.innerHTML += ` ${numbers[i]}  `;
  }
}
