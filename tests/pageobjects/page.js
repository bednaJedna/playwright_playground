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
   * Launches browser of given type as Playwright instance.
   * @method
   * @async
   * @param {string} browser supported browser type, e.g. "chromium", "firefox", "webkit"
   */
  async launchBrowser(browser) {
    this.browser = await Playwright[browser].launch({ headless: true });
  }

  /**
   * Starts new context in already running browser instance.
   * @method
   * @async
   */
  async startNewContext() {
    this.context = await this.browser.newContext();
  }

  /**
   * Opens new page in already existing browser context.
   * @method
   * @async
   */
  async openNewPage() {
    this.page = await this.context.newPage();
  }

  /**
   * Launches Playwrights for given browser, starts new Context,
   * opens new page and then loads website in that page
   * @method
   * @async
   * @param {string} url url to open in page
   * @param {string} browser supported browser type, e.g. "chromium", "firefox", "webkit"
   */
  async openPage(url, browser) {
    await this.launchBrowser(browser);
    await this.startNewContext();
    await this.openNewPage();
    await this.page.goto(url);
    await this.page.waitForLoadState("networkidle");
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
