const Homepage = require("../pageobjects/homepage.page");
const expect = require("chai").expect;

let requests = [];

Homepage.browsers.forEach(function (browser) {
  describe(`${browser}: network tests`, function () {
    before(async function () {
      await Homepage.launchBrowser(browser);
      await Homepage.startNewContext();
      await Homepage.openNewPage();

      Homepage.page.on("response", async (response) => {
        let request = await response.request();
        if (
          response.status() === 200 &&
          request.url().includes(Homepage.gtmUrl)
        ) {
          requests.push(request.url());
        }
      });

      await Homepage.page.goto(Homepage.url);
      await Homepage.page.waitForLoadState("networkidle");
    });

    after(async function () {
      await Homepage.closeBrowser();
    });

    it("GTM script was loaded", async function () {
      expect(requests).contains(Homepage.gtmUrl);
    });
  });
});
