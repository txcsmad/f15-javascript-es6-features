// Arrow functions maintain the lexical scope
// Example from: https://github.com/utcsmad/f15-web-beginner/blob/master/Lesson6_OOP/this-keyword/pitfalls-3.js

var obj = {
    a: 5,
    arr: [1,2,3,4,5],
    bar: function() {
        this.arr.forEach(function() {
            console.log('the value of a is: ' + this.a);
        });
    }
};

obj.bar(); // prints undefined 5 times

// Instead, maintain scope using arrow functions
// Also illustrates how to 
// - call a function that takes no args
// - using a {} block for a function

obj = {
    a: 5,
    arr: [1,2,3,4,5],
    bar: function() {
        this.arr.forEach(() => {
            console.log('the value of a is: ' + this.a);
        });
    }
};

obj.bar(); // print what you expect (the value of obj.a `5`) 5 times
