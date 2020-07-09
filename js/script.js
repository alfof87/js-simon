// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.

// Dopo 30 secondi l’utente deve inserire, un prompt alla volta,
// i numeri che ha visto precedentemente.

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati

$(document).ready(function(){
for (var i = 0; i < 5; i++) {
  var arrayNumRandom = [];
  var numRandom = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  alert(numRandom);
  arrayNumRandom.push(numRandom);
  console.log(arrayNumRandom);
}

setTimeout(myFunction, 30000);

function myFunction(){
for (var j = 0; j < 5; j++) {
  var arrayNumUtente =[];
  var numUtente = parseInt().prompt("Inserisci un numero da 1 a 10");
  arrayNumUtente.push(numUtente);
 }
}


});





//function
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
// }
