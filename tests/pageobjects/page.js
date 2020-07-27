const Playwright = require("playwright");

/**
 * Generic Page class.
 * This class is not ever instantiated, but always extended by other page classes.
 * @class
 */
module.exports.default = class Page {
  browser;
  context;
  page;
  browsers = ["chromium", "firefox", "webkit"];

  async openPage(url, browser) {
    this.browser = await Playwright[browser].launch({ headless: true });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    await this.page.goto(url);
  }
  /**
   * Closes Playwright browser object instance
   * @method
   * @async
   */
  async close() {
    await this.browser.close();
  }
};
