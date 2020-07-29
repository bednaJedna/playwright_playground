const Services = require("../pageobjects/services.page");
const expect = require("chai").expect;

Services.browsers.forEach(function (browser) {
  describe(`${browser}: Services page tests`, function () {
    before(async function () {
      await Services.openPage(Services.url, browser);
    });

    after(async function () {
      await Services.close();
    });

    it(`page title is ${Services.pageTitle}`, async function () {
      const title = await Services.page.title();
      expect(title).equals(Services.pageTitle);
    });

    it("CTA buttons are visible", async function () {
      let flags = [];
      const elementHandles = await Services.getCtaBttnsElements();
      elementHandles.forEach(async function (elemHandle) {
        flags.push(await Services.isVisible_(elemHandle));
      });
      expect(flags).not.contains(false);
    });
  });
});
