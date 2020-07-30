# Playwright playground

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Examples and experiments to try with [Microsoft Playwright](https://github.com/microsoft/playwright) JavaScript based cross-browser automation library.

## What is currently implemented:

- tests are running on all browsers
- Page Object Pattern implemented
- mochajs test framework is used
- mochajs native spec console reporting is used
- config file can be used
- mochawesome reporter can be used (currently does not support native Mochajs parallel mode, but there is open issue on its github)
- allure reporter can be used (currently does not support native Mochajs parallel mode)

## How to install

    - git clone this repo
    - get into the root of cloned repo and type `npm install`

## How to run prepared tests

To run tests sequentially:

```
.\node_modules\.bin\mocha tests\spec\** -t 120000
```

To run tests in parallel:

```
.\node_modules\.bin\mocha tests\spec\** -t 120000 --parallel
```

You can specify mocha CLI parameters in config file and then run tests like this:

```
.\node_modules\.bin\mocha tests\spec\** --config .\mocharc.json
```
