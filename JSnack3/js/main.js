// JSnack3
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

let numbers = [
    1, 22, 3, 54, 77, 88, 17];
// console.log(numbers.length);

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    if (i % 2 !== 1) {
        sum += numbers[i];
    }
}
console.log(sum);