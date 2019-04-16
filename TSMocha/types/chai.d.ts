export class Assertion {
	static addChainableMethod(name: any, fn: any, chainingBehavior: any): void;
	static addMethod(name: any, fn: any): void;
	static addProperty(name: any, fn: any): void;
	static includeStack: any;
	static overwriteChainableMethod(name: any, fn: any, chainingBehavior: any): void;
	static overwriteMethod(name: any, fn: any): void;
	static overwriteProperty(name: any, fn: any): void;
	static showDiff: any;
	constructor(obj: any, msg: any, ssfi: any, lockSsfi: any);
	Throw(): any;
	above(): any;
	approximately(): any;
	assert(expr: any, msg: any, negateMsg: any, expected: any, _actual: any, showDiff: any, ...args: any[]): void;
	below(): any;
	by(): any;
	change(): any;
	changes(): any;
	closeTo(): any;
	decrease(): any;
	decreases(): any;
	eq(): any;
	eql(): any;
	eqls(): any;
	equal(): any;
	equals(): any;
	greaterThan(): any;
	gt(): any;
	gte(): any;
	haveOwnProperty(): any;
	haveOwnPropertyDescriptor(): any;
	increase(): any;
	increases(): any;
	instanceOf(): any;
	key(): any;
	keys(): any;
	least(): any;
	lessThan(): any;
	lt(): any;
	lte(): any;
	match(): any;
	matches(): any;
	members(): any;
	most(): any;
	oneOf(): any;
	ownProperty(): any;
	ownPropertyDescriptor(): any;
	property(): any;
	respondTo(): any;
	respondsTo(): any;
	satisfies(): any;
	satisfy(): any;
	string(): any;
	throws(): any;
	within(): any;
}
export class AssertionError {
	constructor(message: any, _props: any, ssf: any);
	message: any;
	showDiff: any;
	stack: any;
	toJSON(stack: any): any;
}
export function Should(): any;
export function assert(express: any, errmsg: any): void;
export namespace assert {
	function Throw(fn: any, errorLike: any, errMsgMatcher: any, msg: any): any;
	function approximately(act: any, exp: any, delta: any, msg: any): void;
	function changes(fn: any, obj: any, prop: any, msg: any, ...args: any[]): void;
	function changesButNotBy(fn: any, obj: any, prop: any, delta: any, msg: any, ...args: any[]): void;
	function changesBy(fn: any, obj: any, prop: any, delta: any, msg: any, ...args: any[]): void;
	function closeTo(act: any, exp: any, delta: any, msg: any): void;
	function containsAllDeepKeys(obj: any, keys: any, msg: any): void;
	function containsAllKeys(obj: any, keys: any, msg: any): void;
	function decreases(fn: any, obj: any, prop: any, msg: any, ...args: any[]): any;
	function decreasesButNotBy(fn: any, obj: any, prop: any, delta: any, msg: any, ...args: any[]): void;
	function decreasesBy(fn: any, obj: any, prop: any, delta: any, msg: any, ...args: any[]): void;
	function deepEqual(act: any, exp: any, msg: any): void;
	function deepInclude(exp: any, inc: any, msg: any): void;
	function deepNestedInclude(exp: any, inc: any, msg: any): void;
	function deepNestedPropertyVal(obj: any, prop: any, val: any, msg: any): void;
	function deepOwnInclude(exp: any, inc: any, msg: any): void;
	function deepOwnPropertyVal(obj: any, prop: any, value: any, msg: any): void;
	function deepPropertyVal(obj: any, prop: any, val: any, msg: any): void;
	function deepStrictEqual(act: any, exp: any, msg: any): void;
	function doesNotChange(fn: any, obj: any, prop: any, msg: any, ...args: any[]): any;
	function doesNotDecrease(fn: any, obj: any, prop: any, msg: any, ...args: any[]): any;
	function doesNotDecreaseBy(fn: any, obj: any, prop: any, delta: any, msg: any, ...args: any[]): any;
	function doesNotHaveAllDeepKeys(obj: any, keys: any, msg: any): void;
	function doesNotHaveAllKeys(obj: any, keys: any, msg: any): void;
	function doesNotHaveAnyDeepKeys(obj: any, keys: any, msg: any): void;
	function doesNotHaveAnyKeys(obj: any, keys: any, msg: any): void;
	function doesNotIncrease(fn: any, obj: any, prop: any, msg: any, ...args: any[]): any;
	function doesNotThrow(fn: any, errorLike: any, errMsgMatcher: any, msg: any): void;
	function empty(val: any, msg: any): void;
	function equal(act: any, exp: any, msg: any): void;
	function exists(val: any, msg: any): void;
	function extensible(obj: any, msg: any): void;
	function fail(actual: any, expected: any, message: any, operator: any, ...args: any[]): void;
	function frozen(obj: any, msg: any): void;
	function hasAllDeepKeys(obj: any, keys: any, msg: any): void;
	function hasAllKeys(obj: any, keys: any, msg: any): void;
	function hasAnyDeepKeys(obj: any, keys: any, msg: any): void;
	function hasAnyKeys(obj: any, keys: any, msg: any): void;
	function ifError(val: any): void;
	function include(exp: any, inc: any, msg: any): void;
	function includeDeepMembers(superset: any, subset: any, msg: any): void;
	function includeDeepOrderedMembers(superset: any, subset: any, msg: any): void;
	function includeMembers(superset: any, subset: any, msg: any): void;
	function includeOrderedMembers(superset: any, subset: any, msg: any): void;
	function increases(fn: any, obj: any, prop: any, msg: any, ...args: any[]): any;
	function increasesButNotBy(fn: any, obj: any, prop: any, delta: any, msg: any, ...args: any[]): void;
	function increasesBy(fn: any, obj: any, prop: any, delta: any, msg: any, ...args: any[]): void;
	function instanceOf(val: any, type: any, msg: any): void;
	function isAbove(val: any, abv: any, msg: any): void;
	function isArray(val: any, msg: any): void;
	function isAtLeast(val: any, atlst: any, msg: any): void;
	function isAtMost(val: any, atmst: any, msg: any): void;
	function isBelow(val: any, blw: any, msg: any): void;
	function isBoolean(val: any, msg: any): void;
	function isDefined(val: any, msg: any): void;
	function isEmpty(val: any, msg: any): void;
	function isExtensible(obj: any, msg: any): void;
	function isFalse(val: any, msg: any): void;
	function isFinite(val: any, msg: any): void;
	function isFrozen(obj: any, msg: any): void;
	function isFunction(val: any, msg: any): void;
	function isNaN(val: any, msg: any): void;
	function isNotArray(val: any, msg: any): void;
	function isNotBoolean(val: any, msg: any): void;
	function isNotEmpty(val: any, msg: any): void;
	function isNotExtensible(obj: any, msg: any): void;
	function isNotFalse(val: any, msg: any): void;
	function isNotFrozen(obj: any, msg: any): void;
	function isNotFunction(val: any, msg: any): void;
	function isNotNaN(val: any, msg: any): void;
	function isNotNull(val: any, msg: any): void;
	function isNotNumber(val: any, msg: any): void;
	function isNotObject(val: any, msg: any): void;
	function isNotOk(val: any, msg: any): void;
	function isNotSealed(obj: any, msg: any): void;
	function isNotString(val: any, msg: any): void;
	function isNotTrue(val: any, msg: any): void;
	function isNull(val: any, msg: any): void;
	function isNumber(val: any, msg: any): void;
	function isObject(val: any, msg: any): void;
	function isOk(val: any, msg: any): void;
	function isSealed(obj: any, msg: any): void;
	function isString(val: any, msg: any): void;
	function isTrue(val: any, msg: any): void;
	function isUndefined(val: any, msg: any): void;
	function lengthOf(exp: any, len: any, msg: any): void;
	function match(exp: any, re: any, msg: any): void;
	function nestedInclude(exp: any, inc: any, msg: any): void;
	function nestedProperty(obj: any, prop: any, msg: any): void;
	function nestedPropertyVal(obj: any, prop: any, val: any, msg: any): void;
	function notDeepEqual(act: any, exp: any, msg: any): void;
	function notDeepInclude(exp: any, inc: any, msg: any): void;
	function notDeepNestedInclude(exp: any, inc: any, msg: any): void;
	function notDeepNestedPropertyVal(obj: any, prop: any, val: any, msg: any): void;
	function notDeepOwnInclude(exp: any, inc: any, msg: any): void;
	function notDeepOwnPropertyVal(obj: any, prop: any, value: any, msg: any): void;
	function notDeepPropertyVal(obj: any, prop: any, val: any, msg: any): void;
	function notEmpty(val: any, msg: any): void;
	function notEqual(act: any, exp: any, msg: any): void;
	function notExists(val: any, msg: any): void;
	function notExtensible(obj: any, msg: any): void;
	function notFrozen(obj: any, msg: any): void;
	function notInclude(exp: any, inc: any, msg: any): void;
	function notIncludeDeepMembers(superset: any, subset: any, msg: any): void;
	function notIncludeDeepOrderedMembers(superset: any, subset: any, msg: any): void;
	function notIncludeMembers(superset: any, subset: any, msg: any): void;
	function notIncludeOrderedMembers(superset: any, subset: any, msg: any): void;
	function notInstanceOf(val: any, type: any, msg: any): void;
	function notMatch(exp: any, re: any, msg: any): void;
	function notNestedInclude(exp: any, inc: any, msg: any): void;
	function notNestedProperty(obj: any, prop: any, msg: any): void;
	function notNestedPropertyVal(obj: any, prop: any, val: any, msg: any): void;
	function notOk(val: any, msg: any): void;
	function notOwnInclude(exp: any, inc: any, msg: any): void;
	function notOwnProperty(obj: any, prop: any, msg: any): void;
	function notOwnPropertyVal(obj: any, prop: any, value: any, msg: any): void;
	function notProperty(obj: any, prop: any, msg: any): void;
	function notPropertyVal(obj: any, prop: any, val: any, msg: any): void;
	function notSameDeepMembers(set1: any, set2: any, msg: any): void;
	function notSameDeepOrderedMembers(set1: any, set2: any, msg: any): void;
	function notSameMembers(set1: any, set2: any, msg: any): void;
	function notSameOrderedMembers(set1: any, set2: any, msg: any): void;
	function notSealed(obj: any, msg: any): void;
	function notStrictEqual(act: any, exp: any, msg: any): void;
	function notTypeOf(val: any, type: any, msg: any): void;
	function ok(val: any, msg: any): void;
	function oneOf(inList: any, list: any, msg: any): void;
	function operator(val: any, operator: any, val2: any, msg: any): void;
	function ownInclude(exp: any, inc: any, msg: any): void;
	function ownProperty(obj: any, prop: any, msg: any): void;
	function ownPropertyVal(obj: any, prop: any, value: any, msg: any): void;
	function property(obj: any, prop: any, msg: any): void;
	function propertyVal(obj: any, prop: any, val: any, msg: any): void;
	function sameDeepMembers(set1: any, set2: any, msg: any): void;
	function sameDeepOrderedMembers(set1: any, set2: any, msg: any): void;
	function sameMembers(set1: any, set2: any, msg: any): void;
	function sameOrderedMembers(set1: any, set2: any, msg: any): void;
	function sealed(obj: any, msg: any): void;
	function strictEqual(act: any, exp: any, msg: any): void;
	function throws(fn: any, errorLike: any, errMsgMatcher: any, msg: any): any;
	function typeOf(val: any, type: any, msg: any): void;
}
export const config: {
	includeStack: boolean;
	proxyExcludedKeys: string[];
	showDiff: boolean;
	truncateThreshold: number;
	useProxy: boolean;
};
export function expect(val: any, message: any): any;
export namespace expect {
	function fail(actual: any, expected: any, message: any, operator: any, ...args: any[]): void;
}
export function should(): any;
export function use(fn: any): any;
export namespace util {
	function addChainableMethod(ctx: any, name: any, method: any, chainingBehavior: any): void;
	function addLengthGuard(fn: any, assertionName: any, isChainable: any): any;
	function addMethod(ctx: any, name: any, method: any): void;
	function addProperty(ctx: any, name: any, getter: any): void;
	namespace checkError {
		function compatibleConstructor(thrown: any, errorLike: any): any;
		function compatibleInstance(thrown: any, errorLike: any): any;
		function compatibleMessage(thrown: any, errMatcher: any): any;
		function getConstructorName(errorLike: any): any;
		function getMessage(errorLike: any): any;
	}
	function compareByInspect(a: any, b: any): any;
	function eql(leftHandOperand: any, rightHandOperand: any, options: any): any;
	namespace eql {
		class MemoizeMap {
			get(p0: any): any;
			has(p0: any): any;
			set(p0: any, p1: any): any;
		}
	}
	function expectTypes(obj: any, types: any): void;
	function flag(obj: any, key: any, value: any, ...args: any[]): any;
	function getActual(obj: any, args: any): any;
	function getMessage(obj: any, args: any): any;
	function getName(aFunc: any): any;
	function getOwnEnumerableProperties(obj: any): any;
	function getOwnEnumerablePropertySymbols(obj: any): any;
	function getPathInfo(obj: any, path: any): any;
	function hasProperty(obj: any, name: any): any;
	function inspect(obj: any, showHidden: any, depth: any, colors: any): any;
	function isNaN(p0: any): any;
	function isProxyEnabled(): any;
	function objDisplay(obj: any): any;
	function overwriteChainableMethod(ctx: any, name: any, method: any, chainingBehavior: any): void;
	function overwriteMethod(ctx: any, name: any, method: any): void;
	function overwriteProperty(ctx: any, name: any, getter: any): void;
	function proxify(obj: any, nonChainableMethodName: any): any;
	function test(obj: any, args: any): any;
	function transferFlags(assertion: any, object: any, includeAll: any, ...args: any[]): void;
	function type(obj: any): any;
}
export const version: string;