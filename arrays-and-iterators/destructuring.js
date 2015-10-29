// WARNING: does not work currently in node v4.2.1 even with --harmony flag

var a;
var b;

// from object
{a, b} = { a:1, b:2 };

// from array
[a, b] = [1, 2];

var others = [];

// remaining
[a, b, ...others] = [1,2,3,4,5];

console.log(a);
console.log(b);
console.log(others);
