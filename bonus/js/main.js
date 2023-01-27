// Dato un array contenente i risultati di una squadra (vittorie, pareggi e sconfitte) [W, W, L, X, X, W, L, X], stampare a video il numero di vittorie, il numero di pareggi ed il numero di sconfitte.

const results = ["W", "W", "L", "X", "X", "W", "L", "X"];

let win = 0;
let defeat = 0;
let draw = 0;

for (let i = 0; i < results.length; i++) {
  //   console.log(results.length);
  if (results[i] == "W") {
    win++;
  } else if (results[i] == "L") {
    defeat++;
  } else {
    draw++;
  }
}
console.log(`Vittorie: ${win} -- Sconfitte: ${defeat} -- Pareggi: ${draw}`);
