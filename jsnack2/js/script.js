// calcola somma e media dei primi 10 numeri

// creo variabile per somma e media che iniziano da 0
let sum = 0;
let media = 0;
// creo i primi 10 numeri partendo da 1
for(let i = 1; i <= 10; i++) {
    let numbersSplit = i;
    console.log('numeri da calcolare ', numbersSplit)
    // faccio la somma di tutti i numeri
    sum += numbersSplit;
}
// output somma
console.log('somma ',sum);
// faccio la media dei numeri (la somma dei numeri diviso la quantità di valori)
media = sum / 10;
// output media
console.log('media ',media);

// oppure creo 10 numeri da 1 a 100 random li sommo e faccio la media

// for(let i = 1; i <= 10; i++) {
//     let random = Math.floor((Math.random() * 100) + 1);
//     console.log('random numbers ', random);
//     sum += random;
// }
// media = sum / 10;
// console.log('somma ',sum);
// console.log('media ',media);
// Math.floor((Math.random() * 100) + 1);