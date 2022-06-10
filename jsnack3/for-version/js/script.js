// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// VERSIONE FOR

// dichiaro variabile somma=0
let sum = 0;
// ciclo di 5 volte
for(let i = 0; i < 5; i++) {
    // ogni ciclo:
    // chiedo un numero col prompt e lo trasformo in numero da stringa
    let userNumber = parseInt(prompt('Dimmi un numero'));
    // faccio la somma del numero dell'utente
    sum += userNumber;
}
// stampo somma
console.log(sum);