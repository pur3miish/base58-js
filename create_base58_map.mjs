// @ts-check

import base58_chars from "./base58_chars.mjs";

/**
 * Generates a mapping between base58 and ascii.
 * @returns {Array<Number>} mapping between ascii and base58.
 */
const create_base58_map = () => {
  const base58M = Array(256).fill(-1);
  for (let i = 0; i < base58_chars.length; ++i)
    base58M[base58_chars.charCodeAt(i)] = i;

  return base58M;
};

export default create_base58_map;
