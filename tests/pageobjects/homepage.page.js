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
  }
}
module.exports = new Homepage();
