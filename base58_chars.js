// @ts-check

/**
 * A string containing all valid Base58 characters:
 * - Digits: 1–9 (excluding 0)
 * - Uppercase: A–Z (excluding I and O)
 * - Lowercase: a–z (excluding l)
 *
 * @typedef {string} base58_chars
 * @see https://en.wikipedia.org/wiki/Base58
 */

/** @type {base58_chars} */
const base58_chars =
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

export default base58_chars;
