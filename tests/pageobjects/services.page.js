const Page = require("./page").default;

/**
 * Class for Services page
 * @class
 */
class Services extends Page {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.url = "https://www.tesena.com/en/services";
    this.pageTitle = "Services — Tesena";
  }
}
module.exports = new Services();
