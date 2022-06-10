// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.


// CREO ARRAY VUOTO
let emptyArray = [];
// CREO VARIABILE PER TENERE CONTO DELLA SOMMA
let sum = 0;

// CHIEDO UN PROMPT ALL UTENTE FINCHE' LA SOMMA NON E' < 50
do {
    // chiedo numero utente
    let userNumber = prompt('Numero');
    // trasformo stringa in numero
    let realNum = parseInt(userNumber);
    // pusho nell'array vuoto
    emptyArray.push(userNumber);
    // faccio la somma
    sum += realNum;
    // specifico quando la funzione deve finire
    console.log(sum)
} while (sum < 50);
