const Homepage = require("../pageobjects/homepage");
const expect = require("chai").expect;

describe("test to start browser", function () {
  before(async function () {
    await Homepage.openHomepage();
  });

  after(async function () {
    await Homepage.close();
  });

  it(`Homepage title is ${Homepage.pageTitle}`, async function () {
    const title = await Homepage.page.title();
    expect(title).equals(Homepage.pageTitle);
  });
});
