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
    this.url = "https://www.tesena.com";
    this.pageTitle = "Home";
  }
}
module.exports = new Homepage();
