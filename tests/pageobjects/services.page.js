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
    this.locCtaBttn = '//a[@class="btn btn-default"]';
  }

  /**
   * returns Array of element handles of CTA bttns
   * @method
   * @async
   * @returns {Array} element handles of CTA bttns
   */
  async getCtaBttnsElements() {
    return await this.page.$$(this.locCtaBttn);
  }
}
module.exports = new Services();
