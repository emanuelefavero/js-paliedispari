/**
 * Verifica se un testo è palindromo.
 *
 * @param {string} text - Il testo da controllare.
 * @returns {boolean} True se il testo è palindromo, false altrimenti.
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
 * @param {any} value - Il valore da verificare.
 * @returns {boolean} True se l'input è valido, false altrimenti.
 */
function isValidString(value) {
  return typeof value === 'string' && value.trim() !== '';
}

/**
 * Normalizza un testo rimuovendo spazi e convertendo in minuscolo.
 *
 * @param {string} text - Il testo da normalizzare.
 * @returns {string} Il testo normalizzato.
 */
function normalizeText(text) {
  return text.trim().toLowerCase().split(' ').join('');
}

/**
 * Crea il messaggio finale dell'esercizio Palindroma.
 *
 * @param {string} text - Il testo originale ripulito dagli spazi esterni.
 * @param {boolean} result - Il risultato del controllo palindromo.
 * @returns {string} Il messaggio da mostrare all'utente.
 */
function getPalindromeMessage(text, result) {
  return result ? `"${text}" è palindromo` : `"${text}" non è palindroma`;
}

/**
 * Gestisce l'esercizio Palindroma.
 *
 * @returns {void}
 */
export function playPalindrome() {
  const input = prompt(
    'Inserisci una parola o una frase e ti dirò se è palindroma o no',
  );

  if (!isValidString(input)) {
    alert('Per favore, inserisci una parola valida');
    return;
  }

  const trimmedInput = input.trim();
  const normalizedText = normalizeText(trimmedInput);
  const result = isPalindrome(normalizedText);
  const message = getPalindromeMessage(trimmedInput, result);

  alert(message);
}
