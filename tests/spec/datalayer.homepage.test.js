const Homepage = require("../pageobjects/homepage.page");
const expect = require("chai").expect;

Homepage.browsers.forEach(function (browser) {
  describe(`${browser}: Datalayer tests`, function () {
    before(async function () {
      await Homepage.openPage(Homepage.url, browser);
    });

    after(async function () {
      await Homepage.closeBrowser();
    });

    it("datalayer is there and not empty", async function () {
      const datalayer = await Homepage.getDatalayer();
      expect(datalayer).to.be.an("array");
      expect(datalayer).not.to.be.empty;
    });
  });
});
