import chai 		= require('chai');
import nums			= require('../source/LiteralValidator');

var assert = chai.assert;
var expect = chai.expect;

describe('LiteralValidator#isAcceptable', function(){
	it('numbers are not acceptable', function() {
		var v = new nums.LiteralValidator();
		expect( v.isAcceptable( "123" ) ).to.be.equals(false);
	});
}) 