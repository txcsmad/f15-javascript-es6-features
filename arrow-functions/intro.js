// Goal: multiply each element * 2
var arr = [1,2,3,4,5];

// Old method using regular `function` syntax:
var twiceArr = arr.map(function(item) {
    return item * 2;
});

console.log(twiceArr);

// Using ES6 arrow functions
// Short, single-line, no need to write the `return statement`
var twiceArr = arr.map(item => item * 2);

console.log(twiceArr); // same result as doing it the old way using `function`
