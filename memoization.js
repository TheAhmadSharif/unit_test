/* 
	Date: 19 April 2022, Thursday
*/

function memoize(callback) {
	let cache  = {}
	return function(a, b) {
		var n = a + b
		if(n in cache) {
			return cache[n];
		}
		let result = callback(a, b);
		cache[n] = result;
		return result;
	}
}

function addition(a, b) {
	return a + b;
}

var start = new Date();
const sum = memoize(addition);
sum(2, 3);
console.log(new Date() -  start);