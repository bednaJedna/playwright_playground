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
    this.locContactForm = '//form[@id="form_1"]';
    this.locContactFormInputName =
      '//form[@id="form_1"]//input[contains(@name,"name")]';
    this.locContactFormInputEmail =
      '//form[@id="form_1"]//input[contains(@name,"email")]';
    this.locContactFormInputPhone =
      '//form[@id="form_1"]//input[contains(@name,"phone")]';
    this.locContactFormConsentCheckbox =
      '//form[@id="form_1"]//input[contains(@type,"checkbox")]';
    this.locContactFormSubmitButton =
      '//form[@id="form_1"]//button[contains(@type,"submit")]';
    this.locContactFormErrorMessage =
      '//form[@id="form_1"]//div[contains(@class,"error")]';
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
