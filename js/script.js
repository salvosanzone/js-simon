/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/*
1. creo un timer di 30 secondi in cui al suo interno devo:
-- creo un array vuoto
-- creo la funzione getRandomNumer
-- pusho 5 numeri random nell'array vuoto
2. alla fine dei 30 secondi compare un prompt per 5 volte in cui dico di inserire i numeri visti in precendenza
3.  pusho in un altro array i numeri inseriti
*/



//creo un array inizialmente vuoto 
const numToRemember = [];
console.log('numeri da ricordare',numToRemember);

//tramite un ciclo e usando la funzione getRandomNumber, genero 5 numeri random e li pusho all'interno dell'array vuoto
for(let i = 0; i < 5; i++){
 numToRemember.push(getRandomNumber(1, 99))
}
//genero la funzione getrandomNumber,che mi serve per generare numeri random
function getRandomNumber(min, max) {
  return  Math.floor(Math.random() * (max - min) ) + min;
}
//aggancio e inizializzo il container in cui inserirò l'array
const container = document.querySelector('.container');
console.log('ho agganciato:',container);
//scrivo sull'html l'array con i 5 numeri random
container.innerHTML = numToRemember;





// document.querySelector('.container').innerHTML = 'welcome'

// setTimeout(function(){
  
//   prompt('come ti chiami')
// },3000);