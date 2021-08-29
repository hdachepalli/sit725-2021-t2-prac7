var expect  = require("chai").expect;
//var request = require("request");
 describe("Add new locations", function() {
    var url = "http://localhost:4000/api/locations";
    it("should returns status 200", function(done) {
        request(url, function(_error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    
    it("returns the result as array", function(done) {
        request(url, function(_error, _response, body) {
            body = JSON.parse(body)
            console.log(body)
            expect(body.result).to.be.a('array');
            done()
          });
    });
  });