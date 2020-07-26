const Homepage = require("../pageobjects/homepage.page");
const expect = require("chai").expect;

describe("Homepage tests", function () {
  before(async function () {
    await Homepage.openPage(Homepage.url);
  });

  after(async function () {
    await Homepage.close();
  });

  it(`Homepage title is ${Homepage.pageTitle}`, async function () {
    const title = await Homepage.page.title();
    expect(title).equals(Homepage.pageTitle);
  });
});
