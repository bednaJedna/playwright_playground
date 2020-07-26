# Playwright playground

Examples and experiments to try with [Microsoft Playwright](https://github.com/microsoft/playwright) JavaScript based cross-browser automation library.

## What is currently implemented:

- tests are running on chromium
- Page Object Pattern implemented
- mochajs test framework is used
- mochajs native spec console reporting is used

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