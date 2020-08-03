const Page = require("./page").default;

class MobileHomepage extends Page {
  constructor() {
    super();
    this.url = "https://www.tesena.com/en";
    this.pageTitle = "Home — Tesena";
  }
}
module.exports = new MobileHomepage();
