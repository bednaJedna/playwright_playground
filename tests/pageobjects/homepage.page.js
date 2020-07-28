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
  }
}
module.exports = new Homepage();
