## CodeSignal ![](https://img.shields.io/static/v1.svg?label=ESLint&message=100%&color=brightgreen) ![](https://img.shields.io/static/v1.svg?label=JSDoc&message=full&color=brightgreen) ![](https://img.shields.io/static/v1.svg?label=coding%20style&message=prettier&color=brightgreen) ![](https://img.shields.io/static/v1.svg?label=coverage&message=100%&color=brightgreen)

[CodeSignal](https://codesignal.com) challenges solved with different
programming languages.

### Algorithmic and Company Challenges
```
./src/challenges/arcade/algorithmic
./src/challenges/company-challenges
```

##### JavaScript
* programming language: [ES6](https://www.ecma-international.org/ecma-262/6.0/index.html)
* unit testing framework: [Jest](https://jestjs.io)

##### TypeScript
* programming language: [TS](https://www.typescriptlang.org)
* unit testing framework: [Jest](https://jestjs.io)


#
### NPM scripts
* Lint both JS and TS source code and test files with ESLint: `npm run lint`

* Generate JSDoc documentation
    * from JS source code files: `npm run jsdoc:js`
    * from TS source code files: `npm run jsdoc:ts`

    (starting point for the documentation will be `./docs/index.html`)

* Check code style of both JS and TS source code and test files with Prettier:
`npm run prettier`

* Run Jest tests for both JS and TS source files, with coverage: `npm run test`

  (starting point for the coverage data in HTML format will be
  `./coverage/lcov-report/index.html`)

<br />
This repository has same functionality on Linux, Windows and macOS platforms.

<br />
<br />
<br />

[CodeSignal profile](https://app.codesignal.com/profile/rexindan)
