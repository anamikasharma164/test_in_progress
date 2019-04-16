import chai 		= require('chai');
import zip 			= require('../source/ZipCodeValidator');

var assert = chai.assert;
var expect = chai.expect;

describe('ZipCodeValidator#isAcceptable', function(){
	it('five-digit number counts as zip code', function() {
		var v = new zip.ZipCodeValidator();
		expect( v.isAcceptable( "11111" ) ).to.be.equals(true);
	});
	
	it('four-digit number is not acceptable', function() {
		var v = new zip.ZipCodeValidator();
		expect( v.isAcceptable( "2222" ) ).to.be.equals(false);
	});
	
	it.skip('letters are not acceptable', function() {
		var v = new zip.ZipCodeValidator();
		expect( v.isAcceptable( "abcde" ) ).to.be.equals(false);
	});
})