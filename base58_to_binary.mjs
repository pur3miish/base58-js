// @ts-check

import base58_chars from "./base58_chars.mjs";

/**
 * Converts a base58 string to the corresponding binary representation.
 * @param { import("./base58_chars.mjs").base58_chars } base58String base58 encoded string.
 * @returns {Uint8Array} Binary representation for the base58 string.
 * @example
 * ```js
 * const bin = base58_to_binary("6MRy")
 * console.log(bin)
 * ```
 * Logged output will be Uint8Array(3) [15, 239, 64].
 */
function base58_to_binary(base58String) {
  if (!base58String || typeof base58String !== "string")
    throw new Error(`Expected base58 string but got “${base58String}”`);
  if (base58String.match(/[IOl0]/gmu))
    throw new Error(
      `Invalid base58 character “${base58String.match(/[IOl0]/gmu)}”`
    );
  const lz = base58String.match(/^1+/gmu);
  const psz = lz ? lz[0].length : 0;
  const size =
    ((base58String.length - psz) * (Math.log(58) / Math.log(256)) + 1) >>> 0;

  return new Uint8Array([
    ...new Uint8Array(psz),
    ...base58String
      .match(/.{1}/gmu)
      .map((i) => base58_chars.indexOf(i))
      .reduce((acc, i) => {
        acc = acc.map((j) => {
          const x = j * 58 + i;
          i = x >> 8;
          return x;
        });
        return acc;
      }, new Uint8Array(size))
      .reverse()
      .filter(
        (
          (lastValue) => (value) =>
            // @ts-ignore
            (lastValue = lastValue || value)
        )(false)
      ),
  ]);
}

export default base58_to_binary;
