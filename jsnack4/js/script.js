// CREO DUE ARRAY UNO LUNGO E UNO CORTO
const longArray = [12, 23, 34, 45, 56, 78 ,89 ,90, 98, 87, 65]
const shortArray = [21, 32]
// console log array prima
console.log('Array inizio corto ',shortArray)
console.log('Array inizio lungo',longArray)

// MISURO LA LUNGHEZZA DI ENTRAMBI E LA SALVO IN UNA VARIABILE
let biggerArray = longArray.length
let shorterArray = shortArray.length
// VARIABILE PER I NUMERI GENERATI RANDOM
let randomNum = 0
// FACCIO UN CICLO PER TANTE VOLTE QUANTO E' LA LUNGHEZZA DI LONGARRAY - SHORTARRAY
for(let i = 0; i < biggerArray - shorterArray; i++) {
    // ogni ciclo
    // genero numero random
    randomNum += Math.floor((Math.random() * 100) + 1);
    // pusho numero random nell array più corto
    shortArray.push(randomNum)
}
// output in console dei due array
console.log('Array fine corto ',shortArray)
console.log('Array fine lungo',longArray)
