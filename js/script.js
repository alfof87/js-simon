// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.

// Dopo 30 secondi l’utente deve inserire, un prompt alla volta,
// i numeri che ha visto precedentemente.

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati

$(document).ready(function(){
  var arrayNumRandom = [];
  for (var i = 0; i < 5; i++) {

  var numRandom = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  alert(numRandom);
  arrayNumRandom.push(numRandom);
  console.log(arrayNumRandom);
}

setTimeout(myFunction, 3000);

function myFunction(){
  var arrayNumUtente =[];
  var arrayNumIndovinati = [];

  for (var j = 0; j < 5; j++) {
  var numUtente = parseInt(prompt("Inserisci un numero da 1 a 10"));
  arrayNumUtente.push(numUtente);
  console.log(arrayNumUtente);

 }
 for (var x = 0; x < arrayNumRandom.length; x++) {

 if (arrayNumUtente[x] == arrayNumRandom[x] ) {
 arrayNumIndovinati.push(arrayNumUtente[x]);
 console.log(arrayNumIndovinati);
 }
}
}
 if(arrayNumIndovinati.includes(arrayNumUtente[x])){
   
 }
});





//function
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
// }
