![base58 logo](https://raw.githubusercontent.com/pur3miish/base58/main/static/base58.svg)

# base58-js

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

> Logged output will be 6MRy.

**Ways to require in Common JS**

> **Note**
>
> As base58 v2.0.0 is an [ESM](https://nodejs.org/docs/latest-v16.x/api/esm.html) module if you need to require it in a [Common JS](https://nodejs.org/docs/latest-v16.x/api/modules.html) package, then you can require like this:

```js
(async function () {
  const { base58_to_binary, binary_to_base58 } = await import("base58-js");
  console.log(
    binary_to_base58(base58_to_binary("Thequickbrownfoxjumpedoverthea1zydog"))
  );
})();
```

> The logged output was Thequickbrownfoxjumpedoverthea1zydog.

## Exports

Deep imports from the ECMAScript modules are exported via the [`package.json`](./package.json) field [`exports`](https://nodejs.org/api/packages.html#exports):

- [`index.mjs`](./index.mjs)
- [`create_base58_map.mjs.mjs`](./create_base58_map.mjs.mjs)
- [`binary_to_base58.mjs.mjs`](./binary_to_base58.mjs.mjs)
- [`base58_to_binary.mjs.mjs`](./base58_to_binary.mjs.mjs)
- [`base58_chars.mjs.mjs.mjs`](./base58_chars.mjs.mjs.mjs)

IntelliSense via [TypeScript JSDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html).
