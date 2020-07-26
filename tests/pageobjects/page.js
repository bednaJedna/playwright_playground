const Chromium = require("playwright").chromium;

/**
 * Generic Page class.
 * This class is not ever instantiated, but always extended by other page classes.
 * @class
 */
module.exports.default = class Page {
  chromium;
  context;
  page;

  async openPage(url) {
    this.chromium = await Chromium.launch();
    this.context = await this.chromium.newContext();
    this.page = await this.context.newPage();
    await this.page.goto(url);
  }
  /**
   * Closes Playwright browser object instance
   * @method
   * @async
   */
  async close() {
    await this.chromium.close();
  }
};
