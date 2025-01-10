![base58 logo](https://raw.githubusercontent.com/pur3miish/base58/main/static/base58.svg)

# base58-js

[![NPM Package](https://img.shields.io/npm/v/base58-js.svg)](https://www.npmjs.org/package/base58-js) [![CI status](https://github.com/pur3miish/base58-js/workflows/CI/badge.svg)](https://github.com/pur3miish/base58-js/actions) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/pur3miish/base58-js/blob/main/LICENSE)

A light weight (\~560 byte) [universal JavaScript](https://en.wikipedia.org/wiki/Isomorphic_JavaScript) base58 encoder and decoder.

## Installation

For [Node.js](https://nodejs.org), to install [`base58-js`](https://npm.im/base58-js) run:

```sh
npm install base58-js
```

## Requirements

Supported runtime environments:

- [Node.js](https://nodejs.org) versions `^16` || `>=17.0.0` .
- Browsers matching the [Browserslist](https://browsersl.ist) query [`> 0.5%, not OperaMini all, not dead`](https://browsersl.ist/?q=%3E+0.5%25%2C+not+OperaMini+all%2C+not+dead).

## Examples

**Convert base58 to binary**

```js
import { base58_to_binary } from "base58-js";

const bin = base58_to_binary("6MRy");
console.log(bin);
```

> Logged output will be Uint8Array(3) [15, 239, 64].

**Convert binary to base58**

```js
import { binary_to_base58 } from "base58-js";

const str = binary_to_base58([15, 239, 64]);
console.log(str);
```

> The logged output was Thequickbrownfoxjumpedoverthea1zydog.

## Exports

Deep imports from the ECMAScript modules are exported via the [`package.json`](./package.json) field [`exports`](https://nodejs.org/api/packages.html#exports):

- [`index.js`](./index.js)
- [`create_base58_map.js`](./create_base58_map.js)
- [`binary_to_base58.js`](./binary_to_base58.js)
- [`base58_to_binary.js`](./base58_to_binary.js)
- [`base58_chars.js`](./base58_chars.js)

IntelliSense via [TypeScript JSDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html).
