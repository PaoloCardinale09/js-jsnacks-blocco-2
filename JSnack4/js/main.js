// JSnack4 (Bonus)
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

// ELEMENTS
const startArrayA = document.getElementById("array-a-start");
const startArrayB = document.getElementById("array-b-start");
const endArrayA = document.getElementById("array-a-end");
const endArrayB = document.getElementById("array-b-end");

// DICHIARO I 2 ARRAY
const aNumbers = [1, 2, 33];
const bNumbers = [1, 8, 9, 545, 44, 33, 566];
let numeroDiCicli = 0;
console.log(aNumbers);
startArrayA.innerHTML = `Contiene <span class="h4 text-primary"> ${aNumbers.length} </span> elementi <br> [${aNumbers}]`;
startArrayB.innerHTML = `Contiene <span class="h4 text-primary"> ${bNumbers.length} </span>elementi <br>[${bNumbers}]`;

// SE LA LUNGHEZZA DEI DUE ARRAY E' DIVERSA.
if (aNumbers.length !== bNumbers.length) {
  // SOTTRAI LA LUNGHEZZZA DELL' ARRAY PIù PICCOLA PER STABILIRE IL NUMERO DI CICLI.
  if (aNumbers.length > bNumbers.length) {
    numeroDiCicli = aNumbers.length - bNumbers.length;
    console.log(numeroDiCicli);
  } else if (aNumbers.length < bNumbers.length) {
    numeroDiCicli = bNumbers.length - aNumbers.length;
    console.log(numeroDiCicli);
  }

  //   INIZIO CICLO
  for (let i = 0; i < numeroDiCicli; i++) {
    // FORMULA PER AGGIUNGERE UN NUMERO CASUALE.
    const randomNumber = Math.floor(Math.random() * 1000 + 1);

    // SE ARRAY (A) è PIù PICCOLO DI ARRAY (B), AGGIUNGI UN NUMERO CASUALE  AD ARRAY (A).
    if (aNumbers.length < bNumbers.length) {
      aNumbers.push(randomNumber);
      //   ALTRIMENTI AGGIUNGI UN NUMERO CASUALE AD ARRAY(B).
    } else {
      bNumbers.push(randomNumber);
    }
  }
}

endArrayA.innerHTML = `Contiene <span class="h4 text-primary"> ${aNumbers.length} </span> elementi <br>[${aNumbers}]`;
endArrayB.innerHTML = `Contiene <span class="h4 text-primary"> ${bNumbers.length} </span>elementi <br>[${bNumbers}]`;
console.log(bNumbers.length, aNumbers.length);
