var expect = require('chai').expect;
var greet = require("../greet.js").greet;

describe('greet', function() {
	it('should return hello + undefined or "name"', function () {
		expect(greet('Dylan')).to.eql("Hello Dylan" || undefined);
	});
});