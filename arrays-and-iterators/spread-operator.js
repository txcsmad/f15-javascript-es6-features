var s = new Set().add('a').add('b').add('c');

// is an Iterable object
// does not have useful array methods such as `forEach`
console.log(s.keys());

// Two easy ways to make it an array
// 1. the spread operator
var arr = [...s.keys()];
console.log(arr);

// 2. use `Array.from`
var sameArr = Array.from(s.keys());
console.log(sameArr);
