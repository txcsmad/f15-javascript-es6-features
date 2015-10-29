// Goal: print each element and it's corresponding index in the array
var arr = ['a', 'b', 'c'];


// Old
console.log('using old function syntax:');
arr.forEach(function(item, index) {
    console.log(item, index);
});

// Using new arrow syntax
console.log('using new => syntax:')
arr.forEach((item, index) => {
    console.log(item, index);
});

// Even shorter since only single line inside braces, we can instead do:
console.log('even shorter way using new => syntax:')
arr.forEach((item, index) => console.log(item, index));
