const validNumbers = [];
let totale = 0;
// Chiedo il prompt finché la lunghezza dell'array non raggiunge  3
while (validNumbers.length < 3){
  const numero = parseInt(prompt('Inserisci un numero pari'));
// controllo se è un numero pari e se è un numero
  if (numero % 2 == 0 && !isNaN(numero)) {
// solo se la condizione è vera pusho il numero nell'array e lo sommo al totale
    validNumbers.push(numero);
    totale += numero; 
  }else{
    alert ('inserisci un numero corretto (dev\'essere un numero pari)');
  }
  console.log(validNumbers);
}
console.log(totale);
document.getElementById('totale').innerHTML =`La somma dei tuoi numeri pari è uguale a: ${totale} ` ;