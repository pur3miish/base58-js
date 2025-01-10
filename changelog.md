# base58-js changelog

## 3.0.0

### Major

- TypeScript declaration files (.d.ts) have been added for all public modules.
- Support for node >=14.0.0 & npm >=7.0.0.
- Imports now favours dropping the file extension.
- Refined exports Field: Simplified the module exports by removing the .mjs and .js extensions from the paths. Now, users can import modules without needing to specify the file extension.

## 2.0.1

### Patch

- paydevs registry

## 2.0.0

### Major

- Upgraded to [ESM](https://nodejs.org/api/esm.html) as [CJS](https://nodejs.org/api/modules.html) is superseded.

### Minor

- IntelliSense via [JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)

## 1.0.5

### Patch

- Fixes [#3](https://github.com/pur3miish/base58-js/issues/3)

## 1.0.4

### Patch

- Changelog fixes.

### Patch

- Deprecation warning not actually fixed... again 😅.

### Patch

- Changelog updates.

## 1.0.2

### Patch

- Changelog updates.

## 1.0.1

- Fixes [#2](https://github.com/pur3miish/base58-js/issues/2).
- Dev dependency updates.

## 1.0.0

### Patch

- `package.json` files removed static from white list.
- Updated readme to reflects base58-js instead of base58.
- Updated description.
- [size-limit](https://github.com/ai/size-limit#readme) fix, using `@size-limit/preset-small-lib`.

## 1.0.0-rc

Initial Release.
