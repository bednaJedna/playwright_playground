const Chromium = require("playwright").chromium;

class Homepage {
  constructor() {
    this.chromium = null;
    this.context = null;
    this.page = null;
    this.url = "https://www.tesena.com";
    this.pageTitle = "Home";
  }

  async close() {
    await this.chromium.close();
  }

  async openHomepage() {
    this.chromium = await Chromium.launch();
    this.context = await this.chromium.newContext();
    this.page = await this.context.newPage();
    await this.page.goto(this.url);
  }
}
module.exports = new Homepage();
