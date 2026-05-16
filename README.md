# JS Palindroma e Pari e Dispari

Esercizio sulle funzioni in JavaScript dal mio corso Web Dev.

> Nota branch `functional`: questa versione usa ES Modules. Per eseguirla, aprire il progetto con Live Server o un server locale.

## Come eseguire gli esercizi

L'entry point della soluzione si trova in `js/script.js`.

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

- Ho separato i due esercizi in moduli JavaScript dedicati dentro la cartella `js/`.
- Ho usato `js/script.js` come entry point per importare e avviare gli esercizi.
- Ho isolato le funzioni pure dalla parte impura che usa `prompt`, `alert` e `Math.random`.
- Per `isPalindrome` ho usato l'approccio con due puntatori.
- Per Pari e Dispari ho usato funzioni dedicate per generare il numero casuale e verificare se un numero è pari.
- Ho aggiunto una validazione base degli input.

## Riferimenti

- [MDN - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
