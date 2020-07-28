const Playwright = require("playwright");

/**
 * Generic Page class.
 * This class is not ever instantiated, but always extended by other page classes.
 * @class
 */
module.exports.default = class Page {
  // eslint does not like this
  // however, these are valid class fields as specified
  // by here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields
  browser;
  context;
  page;
  browsers = ["chromium", "firefox", "webkit"];

  /**
   * Launches Playwrights for given browser, starts new Context,
   * opens new page and then loads website in that page
   * @method
   * @async
   * @param {string} url url to open in page
   * @param {object} browser browser instance
   */
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
