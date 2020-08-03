const MobileHomepage = require("../pageobjects/mobile.homepage.page");
const devicesToTest = require("../helpers/devices");
const expect = require("chai").expect;

const devicesNames = Object.keys(devicesToTest);

// this feature is currently supported only on chromium, it seems
// on other browsers it fails
["chromium"].forEach(function (browser) {
  devicesNames.forEach(function (device) {
    describe(`${browser}: mobile homepage tests`, function () {
      before(async function () {
        await MobileHomepage.launchBrowser(browser);
        MobileHomepage.context = await MobileHomepage.browser.newContext({
          ...devicesToTest[device],
        });
        await MobileHomepage.openNewPage();
        await MobileHomepage.page.goto(MobileHomepage.url);
        await MobileHomepage.page.waitForLoadState("networkidle");
      });
      after(async function () {
        await MobileHomepage.closeBrowser();
      });

      it(`${device}: page title is ${MobileHomepage.pageTitle}`, async function () {
        const title = await MobileHomepage.page.title();
        expect(title).equals(MobileHomepage.pageTitle);
      });
    });
  });
});
