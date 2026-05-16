/**
 * @fileoverview Soluzioni Esercizi JS Palindroma e Pari e Dispari.
 *
 * Nota: per eseguire un esercizio, abilita la chiamata corrispondente
 * alla fine del file: `playPalindrome()` o `playEvenOdd()`.
 */

// --- Palindroma ------------------------------------------------------------

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
 * Verifica se l'input è una stringa non vuota.
 *
 * @param {any} input - L'input da verificare.
 * @returns {boolean} True se l'input è valido, false altrimenti.
 */
function isValidInput(input) {
  return typeof input === 'string' && input.trim() !== '';
}

/**
 * Normalizza una parola rimuovendo spazi e convertendo in minuscolo.
 *
 * @param {string} word - La parola da normalizzare.
 * @returns {string} La parola normalizzata.
 */
function normalizeWord(word) {
  return word.trim().toLowerCase();
}

/**
 * Gestisce l'esercizio Palindroma.
 *
 * @returns {void}
 */
function playPalindrome() {
  const input = prompt('Inserisci una parola e ti dirò se è palindroma o no');

  if (!isValidInput(input)) {
    alert('Per favore, inserisci una parola valida');
    return;
  }

  const normalizedWord = normalizeWord(input);

  if (isPalindrome(normalizedWord)) {
    alert('La parola è palindroma');
  } else {
    alert('La parola non è palindroma');
  }
}

// --- Pari e Dispari --------------------------------------------------------

const EVEN = 'pari';
const ODD = 'dispari';
const MIN_NUMBER = 1;
const MAX_NUMBER = 5;

/**
 * Genera un numero intero casuale tra min e max (inclusi).
 *
 * @param {number} min - Valore minimo incluso.
 * @param {number} max - Valore massimo incluso.
 * @returns {number} Un numero intero casuale tra min e max.
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Verifica se un numero è pari.
 *
 * @param {number} num - Il numero da verificare.
 * @returns {boolean} True se il numero è pari, false altrimenti.
 */
function isEven(num) {
  return num % 2 === 0;
}

/**
 * Verifica se la scelta dell'utente è valida.
 *
 * @param {string} choice - La scelta dell'utente.
 * @returns {boolean} True se la scelta è valida, false altrimenti.
 */
function isValidChoice(choice) {
  const validChoices = [EVEN, ODD];

  return validChoices.includes(choice);
}

/**
 * Verifica se il numero dell'utente è valido.
 *
 * @param {number} num - Il numero da verificare.
 * @returns {boolean} True se il numero è valido, false altrimenti.
 */
function isValidUserNumber(num) {
  return Number.isInteger(num) && num >= MIN_NUMBER && num <= MAX_NUMBER;
}

/**
 * Verifica se la scelta dell'utente corrisponde al risultato della somma.
 *
 * @param {string} userChoice - La scelta dell'utente.
 * @param {string} sumType - Il tipo della somma: pari o dispari.
 * @returns {boolean} True se l'utente ha vinto, false altrimenti.
 */
function isUserWinner(userChoice, sumType) {
  return userChoice === sumType;
}

/**
 * Gestisce l'esercizio Pari e Dispari.
 *
 * @returns {void}
 */
function playEvenOdd() {
  const userChoice = String(prompt(`Scegli ${EVEN} o ${ODD}`))
    .trim()
    .toLowerCase();

  if (!isValidChoice(userChoice)) {
    alert(`Scelta non valida. Per favore, scegli "${EVEN}" o "${ODD}".`);
    return;
  }

  const userNumber = Number(
    prompt(`Inserisci un numero da ${MIN_NUMBER} a ${MAX_NUMBER}`),
  );

  if (!isValidUserNumber(userNumber)) {
    alert(
      `Numero non valido. Per favore, inserisci un numero intero da ${MIN_NUMBER} a ${MAX_NUMBER}.`,
    );
    return;
  }

  const computerNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const sum = userNumber + computerNumber;
  const isSumEven = isEven(sum);
  const sumType = isSumEven ? EVEN : ODD;

  const message = `Tu: ${userNumber}, computer: ${computerNumber}. Somma: ${sum} (${sumType}).`;

  if (isUserWinner(userChoice, sumType)) {
    alert(`Hai vinto! ${message}`);
  } else {
    alert(`Hai perso! ${message}`);
  }
}

// --- AVVIO PROGRAMMI -------------------------------------------------------

playPalindrome(); // Palindroma
// playEvenOdd(); // Pari e Dispari
