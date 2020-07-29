const Page = require("./page").default;

/**
 * Class for Homepage
 * @class
 */
class Homepage extends Page {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.url = "https://www.tesena.com/en";
    this.pageTitle = "Home — Tesena";
    this.locCookieConsentBar = '//div[@class="cookie-bar-wrapper"]';
    this.headerBigBackgroundBar = {
      loc: '//div[contains(@class, "section-background-cover")]',
      color: "167, 68, 68",
    };
  }

  /**
   * Checks, whether element specified style color is present in the element style attribute value
   * ATTENTION!: this method may be moved to Page.js, since will be probably of general used
   * accros the pages
   * @param {object} element elementHandle object returned from page
   * @param {string} color color code to check, if present in the element style attribute value
   * @returns {boolean} true, if color code is present, else false
   */
  async verifyElementStyleColor(element, color) {
    const attr = await element.getAttribute("style");
    return attr.includes(color) ? true : false;
  }
}
module.exports = new Homepage();
