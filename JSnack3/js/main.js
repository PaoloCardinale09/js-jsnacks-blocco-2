// JSnack3
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
const totalNumbersEl = document.getElementById("total-numbers");
const sumEvenNumbers = document.getElementById("sum-even-numbers");
const evenNumbers = document.getElementById('even-numbers');
let numbers = [1, 22, 3, 54, 77, 88, 17];
// console.log(numbers.length);

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  if (i % 2 !== 1) {
    sum += numbers[i];
evenNumbers.innerHTML += `${numbers[i]}   `;
  }
  totalNumbersEl.innerHTML += `${numbers[i]}  `;
  console.log(totalNumbersEl)
  sumEvenNumbers.innerHTML = `${sum} `;
  // console.log(sumEvenNumbers);
}
// console.log(sum);
// console.log(sumEvenNumbers);
