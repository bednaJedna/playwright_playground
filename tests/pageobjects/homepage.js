const Chromium = require("playwright").chromium;

/**
 * Class for Homepage
 * @class
 */
class Homepage {
  /**
   * @constructor
   */
  constructor() {
    this.chromium = null;
    this.context = null;
    this.page = null;
    this.url = "https://www.tesena.com";
    this.pageTitle = "Home";
  }

  /**
   * Closes Playwright browser object instance
   * @method
   * @async
   */
  async close() {
    await this.chromium.close();
  }

  /**
   * Launches Playwright.chromium, gets new Context, creates new page.
   * Then in this page opens web homepage.
   * @method
   * @async
   */
  async openHomepage() {
    this.chromium = await Chromium.launch();
    this.context = await this.chromium.newContext();
    this.page = await this.context.newPage();
    await this.page.goto(this.url);
  }
}
module.exports = new Homepage();
