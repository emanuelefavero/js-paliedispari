/**
 * @fileoverview Esercizio JS Palidroma e Pari e Dispari.
 *
 * Il file contiene due piccoli programmi:
 * - controllo di una parola palindroma;
 * - gioco pari e dispari contro il computer.
 */

// -------------------------------
// 01 - Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

/**
 * Verifica se una parola è palindroma.
 *
 * @param {string} word - La parola da controllare.
 * @returns {boolean} True se la parola è palindroma, false altrimenti.
 */
function isPalindrome(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

/**
 * Gestisce l'esercizio Palindroma.
 *
 * @returns {void}
 */
function playPalindrome() {
  const input = prompt('Inserisci una parola e ti dirò se è palindroma o no');

  // Validazione input
  if (input === null || input.trim() === '') {
    alert('Per favore, inserisci una parola valida');
    return;
  }

  const normalizedWord = input.trim().toLowerCase();

  if (isPalindrome(normalizedWord)) {
    alert('La parola è palindroma');
  } else {
    alert('La parola non è palindroma');
  }
}

// -------------------------------
// 02 - Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

/**
 * Genera un numero random tra min e max (inclusi).
 *
 * @param {number} min - Il numero minimo (incluso)
 * @param {number} max - Il numero massimo (incluso)
 * @returns {number} Un numero random tra min e max
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Verifica se un numero è pari.
 *
 * @param {number} num - Il numero da verificare
 * @return {boolean} True se il numero è pari, false altrimenti
 */
function isEven(num) {
  return num % 2 === 0;
}

/**
 * Gestisce l'esercizio Pari e Dispari.
 *
 * @returns {void}
 */
function playEvenOdd() {
  // Input da utente (pari o dispari)
  const userChoice = prompt('Scegli "pari" o "dispari"');

  // Input da utente (numero da 1 a 5)
  const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'), 10);

  // TODO Validazione inputs

  // Genera un numero random per il computer
  const randomNumber = getRandomNumber(1, 5);

  // Calcola la somma dei due numeri
  const sum = userNumber + randomNumber;

  // Stabilisce se la somma è pari o dispari
  const isSumEven = isEven(sum);

  // Prepara il messaggio da mostrare all'utente
  const sumType = isSumEven ? 'pari' : 'dispari';
  const message = `Tu: ${userNumber}, computer: ${randomNumber}. Somma: ${sum} (${sumType}).`;

  // Dichiara chi ha vinto
  if (userChoice === sumType) {
    alert(`Hai vinto! ${message}`);
  } else {
    alert(`Hai perso! ${message}`);
  }
}

// ===============================
// AVVIO DEI PROGRAMMI

// playPalindrome(); // 01 - Palindroma
playEvenOdd(); // 02 - Pari e Dispari
