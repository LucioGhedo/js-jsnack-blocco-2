// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// WHILE VERSION
let i = 0;
// dichiaro var per la somma = 0
let sum = 0;
// ciclo di 5 volte col while
while(i < 5) {
    // chiedo all'utente un numero e lo trasformo con parseInt
    let userNumber = parseInt(prompt('Dammi un numero'));
    // faccio la somma del numero
    sum += userNumber;
    // aumento il valore di i di 1
    i++;
}
// output somma in console
console.log(sum);