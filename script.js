/**
 * @fileoverview Soluzioni Esercizi JS Palindroma e Pari e Dispari.
 *
 * Nota: per eseguire un esercizio, chiama la funzione corrispondente
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
 * Gestisce l'esercizio Palindroma.
 *
 * @returns {void}
 */
function playPalindrome() {
  const input = prompt('Inserisci una parola e ti dirò se è palindroma o no');

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

// --- Pari e Dispari --------------------------------------------------------

const EVEN = 'pari';
const ODD = 'dispari';
const VALID_CHOICES = [EVEN, ODD];
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
 * Gestisce l'esercizio Pari e Dispari.
 *
 * @returns {void}
 */
function playEvenOdd() {
  const userChoice = String(prompt(`Scegli ${EVEN} o ${ODD}`))
    .trim()
    .toLowerCase();

  if (!VALID_CHOICES.includes(userChoice)) {
    alert(`Scelta non valida. Per favore, scegli "${EVEN}" o "${ODD}".`);
    return;
  }

  const userNumber = Number(
    prompt(`Inserisci un numero da ${MIN_NUMBER} a ${MAX_NUMBER}`),
  );

  if (
    !Number.isInteger(userNumber) ||
    userNumber < MIN_NUMBER ||
    userNumber > MAX_NUMBER
  ) {
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

  if (userChoice === sumType) {
    alert(`Hai vinto! ${message}`);
  } else {
    alert(`Hai perso! ${message}`);
  }
}

// --- AVVIO PROGRAMMI -------------------------------------------------------

playPalindrome(); // Palindroma
// playEvenOdd(); // Pari e Dispari
