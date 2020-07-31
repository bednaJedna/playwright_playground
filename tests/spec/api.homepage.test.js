// just to try API testing in node/javascript env and tools
// not related to Playwright per se
const Homepage = require("../pageobjects/homepage.page");
const expect = require("chai").expect;
const chai = require("chai");
const chaiHttp = require("chai-http");

const domain = "https://www.tesena.com";
chai.use(chaiHttp);

describe("API tests", function () {
  it(`GET ${Homepage.url} returns 200`, function (done) {
    chai
      .request(domain)
      .get("/en")
      .end(function (err, res) {
        if (err) done(err);
        expect(res).to.have.status(200);
        done();
      });
  });
});
