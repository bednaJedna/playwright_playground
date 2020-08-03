const devices = require("playwright").devices;

// Set devices we want to test
// we can choose from `devices` array provided by Playwright

const devicesToTest = {
  "Galaxy S5": devices["Galaxy S5"],
  "Galaxy S5 landscape": devices["Galaxy S5 landscape"],
  "iPhone X": devices["iPhone X"],
  "iPhone X landscape": devices["iPhone X landscape"],
};
module.exports = devicesToTest;
