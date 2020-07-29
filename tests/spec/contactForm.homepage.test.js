const Homepage = require("../pageobjects/homepage.page");
const expect = require("chai").expect;

Homepage.browsers.forEach(function (browser) {
  describe(`${browser}: Contact Form tests`, function () {
    before(async function () {
      await Homepage.launchBrowser(browser);
    });

    after(async function () {
      await Homepage.closeBrowser();
    });

    beforeEach(async function () {
      await Homepage.startNewContext();
      await Homepage.openNewPage();
      await Homepage.page.goto(Homepage.url);
      await Homepage.page.waitForLoadState("networkidle");
    });

    afterEach(async function () {
      await Homepage.closeContext();
    });

    it("form is visible", async function () {
      const elementHandle = await Homepage.page.$(Homepage.locContactForm);
      const status = await Homepage.isVisible_(elementHandle);
      expect(status).not.to.be.false;
    });

    it("error messages displayed if email and consent not provided", async function () {
      const submitBttnHandle = await Homepage.page.$(
        Homepage.locContactFormSubmitButton
      );
      await submitBttnHandle.click();

      const elementHandles = await Homepage.page.$$(
        Homepage.locContactFormErrorMessage
      );
      expect(elementHandles.length).equals(2);

      let flags = [];
      elementHandles.forEach(async function (element) {
        flags.push(await Homepage.isVisible_(element));
      });
      expect(flags).not.contains(false);
    });
  });
});
