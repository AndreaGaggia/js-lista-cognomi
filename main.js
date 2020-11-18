/* 
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
*/

// creo un array con 5 stringhe/cognomi
var cognomi = [
  "Bianchi",
  "Rossi",
  "Duzioni",
  "Balsano",
  "Verdi"
];

// chiedo all'utente di scrivere il suo cognome e attribuisco il dato ad una variabile
var cognomeUtente = prompt("Scrivi il tuo cognome");
cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1); // in questo modo il cognome avrà la prima lettera maiuscola e le altre minuscole, come gli altri elementi nell'array

// aggiungo il cognome dell'utente all'array cognomi
cognomi.push(cognomeUtente);

// nuova variabile che conserva la lista ordinata alfabeticamente / applico metodo .sort() allo scopo
var cognomiOrdinati = cognomi.sort();

// stampo la lista ordinata nella console con un for loop
for (let i = 0; i < cognomi.length; i++) {
  console.log(cognomiOrdinati[i]);
}

// posizione "umana" del cognome dell'utente nella lista
var posizioneUmana = cognomi.indexOf(cognomeUtente) + 1;
// stampo posizione umana con un messaggio
console.log("Il cognome \"" + cognomeUtente + "\" si collca in " + posizioneUmana + "ª posizione.");