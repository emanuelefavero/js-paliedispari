# JS Palindroma e Pari e Dispari

Esercizio sulle funzioni in JavaScript dal mio corso Web Dev.

## Come eseguire gli esercizi

La soluzione si trova in `script.js`.

Alla fine del file si può scegliere quale esercizio avviare abilitando le chiamate:

```js
playPalindrome(); // Palindroma
// playEvenOdd(); // Pari e Dispari
```

## Obiettivo

### Palindroma

- Chiedere all'utente di inserire una parola.
- Creare una funzione per capire se la parola inserita è palindroma.

### Pari e Dispari

- L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Il computer genera un numero casuale da 1 a 5.
- Si sommano i due numeri.
- Si stabilisce se la somma è pari o dispari.
- Si dichiara chi ha vinto.

## Decisioni Tecniche

- Ho mantenuto entrambi gli esercizi in un unico `script.js`, semplificando e evitando di usare ES Modules, cosi' il progetto funziona anche senza un server locale.
- Ho diviso il file in sezioni e funzioni `play` per tenere separati i due esercizi.
- Per `isPalindrome` ho usato l'approccio con due puntatori.
- Per Pari e Dispari ho usato funzioni dedicate per generare il numero casuale e verificare se un numero è pari.
- Ho aggiunto una validazione base degli input.

## Riferimenti

- [MDN - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
