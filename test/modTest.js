var expect = require('chai').expect;
var greet = require("../modules.js");

describe('greet', function() {
	it('should return hello + "name"', function () {
		expect(greet('Dylan')).to.eql("Hello Dylan");
	});
});