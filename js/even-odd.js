const EVEN = 'pari';
const ODD = 'dispari';
const MIN_NUMBER = 1;
const MAX_NUMBER = 5;

/**
 * Genera un numero intero casuale tra min e max (inclusi).
 *
 * @param {number} min - Valore minimo incluso.
 * @param {number} max - Valore massimo incluso.
 * @param {Function} random - Funzione che restituisce un numero tra 0 e 1.
 * @returns {number} Un numero intero casuale tra min e max.
 */
function getRandomNumber(min, max, random = Math.random) {
  return Math.floor(random() * (max - min + 1)) + min;
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
 * Determina se un numero è pari o dispari.
 *
 * @param {number} num - Il numero da verificare.
 * @returns {string} "pari" se il numero è pari, "dispari" altrimenti.
 */
function getSumType(num) {
  return isEven(num) ? EVEN : ODD;
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
 * Calcola il risultato dell'esercizio Pari e Dispari.
 *
 * @param {string} userChoice - La scelta dell'utente.
 * @param {number} userNumber - Il numero scelto dall'utente.
 * @param {number} computerNumber - Il numero generato per il computer.
 * @returns {object} Il risultato completo dell'esercizio.
 */
function getEvenOddResult(userChoice, userNumber, computerNumber) {
  const sum = userNumber + computerNumber;
  const sumType = getSumType(sum);
  const userWon = isUserWinner(userChoice, sumType);

  return {
    userWon,
    userNumber,
    computerNumber,
    sum,
    sumType,
  };
}

/**
 * Crea il messaggio finale dell'esercizio Pari e Dispari.
 *
 * @param {object} result - Il risultato completo dell'esercizio.
 * @returns {string} Il messaggio da mostrare all'utente.
 */
function getEvenOddMessage(result) {
  const resultMessage = result.userWon ? 'Hai vinto!' : 'Hai perso!';

  return `${resultMessage} Tu: ${result.userNumber}, computer: ${result.computerNumber}. Somma: ${result.sum} (${result.sumType}).`;
}

/**
 * Gestisce l'esercizio Pari e Dispari.
 *
 * @returns {void}
 */
export function playEvenOdd() {
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
  const result = getEvenOddResult(userChoice, userNumber, computerNumber);
  const message = getEvenOddMessage(result);

  alert(message);
}
