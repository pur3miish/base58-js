// @ts-check

import base58_chars from "./base58_chars.mjs";
import create_base58_map from "./create_base58_map.mjs";

const base58Map = create_base58_map();

/** @typedef {import("./base58_chars.mjs").base58_chars} base58_chars */

/**
 * Converts a Uint8Array into a base58 string.
 * @param {Uint8Array} uint8array Unsigned integer array.
 * @returns { import("./base58_chars.mjs").base58_chars } base58 string representation of the binary array.
 * @example <caption>Usage.</caption>
 * ```js
 * const str = binary_to_base58([15, 239, 64])
 * console.log(str)
 * ```
 * Logged output will be 6MRy.
 */
function binary_to_base58(uint8array) {
  const result = [];

  for (const byte of uint8array) {
    let carry = byte;
    for (let j = 0; j < result.length; ++j) {
      // @ts-ignore
      const x = (base58Map[result[j]] << 8) + carry;
      result[j] = base58_chars.charCodeAt(x % 58);
      carry = (x / 58) | 0;
    }
    while (carry) {
      result.push(base58_chars.charCodeAt(carry % 58));
      carry = (carry / 58) | 0;
    }
  }

  for (const byte of uint8array)
    if (byte) break;
    else result.push("1".charCodeAt(0));

  result.reverse();

  return String.fromCharCode(...result);
}

export default binary_to_base58;
