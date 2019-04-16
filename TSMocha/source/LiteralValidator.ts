import validation = require('./Validation');

var literalsRegex = /^[A-Za-z]+$/;
export class LiteralValidator implements validation.StringValidator {
	isAcceptable(s:string){
		return literalsRegex.test(s);
	}
}