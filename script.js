/**
 * @fileoverview Soluzioni Esercizi JS Palindroma e Pari e Dispari.
 *
 * Nota: per eseguire un esercizio, abilita la chiamata corrispondente
 * alla fine del file: `playPalindrome()` o `playEvenOdd()`.
 */

// --- Palindroma ------------------------------------------------------------

/**
 * Verifica se un testo è palindromo.
 *
 * @param {string} text
 * @returns {boolean}
 */
function isPalindrome(text) {
  const length = text.length;

  for (let i = 0; i < length / 2; i++) {
    if (text[i] !== text[length - 1 - i]) return false;
  }
  return true;
}

/**
 * Verifica se l'input è una stringa non vuota.
 *
 * @param {any} value
 * @returns {boolean}
 */
function isValidString(value) {
  return typeof value === 'string' && value.trim() !== '';
}

/**
 * Normalizza un testo.
 *
 * @param {string} text
 * @returns {string}
 */
function normalizeText(text) {
  return text.trim().toLowerCase().split(' ').join('');
}

/**
 * Gestisce l'esercizio Palindroma.
 *
 * @returns {void}
 */
function playPalindrome() {
  const input = prompt(
    'Inserisci una parola o una frase e ti dirò se è palindroma o no',
  );

  if (!isValidString(input)) {
    alert('Per favore, inserisci una parola valida');
    return;
  }

  const trimmedInput = input.trim();
  const normalizedText = normalizeText(trimmedInput);

  if (isPalindrome(normalizedText)) {
    alert(`"${trimmedInput}" è palindroma`);
  } else {
    alert(`"${trimmedInput}" non è palindroma`);
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
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Verifica se un numero è pari.
 *
 * @param {number} num
 * @returns {boolean}
 */
function isEven(num) {
  return num % 2 === 0;
}

/**
 * Verifica se la scelta dell'utente è valida.
 *
 * @param {string} choice
 * @returns {boolean}
 */
function isValidChoice(choice) {
  const validChoices = [EVEN, ODD];

  return validChoices.includes(choice);
}

/**
 * Verifica se il numero dell'utente è valido.
 *
 * @param {number} num
 * @returns {boolean}
 */
function isValidUserNumber(num) {
  return Number.isInteger(num) && num >= MIN_NUMBER && num <= MAX_NUMBER;
}

/**
 * Verifica se la scelta dell'utente corrisponde al risultato della somma.
 *
 * @param {string} userChoice
 * @param {string} sumType
 * @returns {boolean}
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
