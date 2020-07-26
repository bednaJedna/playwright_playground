const Services = require("../pageobjects/homepage.page");
const expect = require("chai").expect;

describe("Services page tests", function () {
  before(async function () {
    await Services.openPage(Services.url);
  });

  after(async function () {
    await Services.close();
  });

  it(`Homepage title is ${Services.pageTitle}`, async function () {
    const title = await Services.page.title();
    expect(title).equals(Services.pageTitle);
  });
});
