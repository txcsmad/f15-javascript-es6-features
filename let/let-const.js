// `let` keeps variable's scope in block scope
// instead of `var` keeping it in function scope
// 
// Remember to 'use strict' (at least for now)

var foo = function() {
    var i;
    
    for (i = 0; i < 10; i += 1) {
        var a = `The current number is ${i}`;
    }

    // a is accessible here because of function scope of var a
    console.log(typeof a);
};

foo();


var bar = function() {
    'use strict';
    var i;
    
    for (i = 0; i < 10; i += 1) {
        let a = `The current number is ${i}`;
    }

    // a is not accessible here because of block scope (inside for's {}) of let a
    console.log(typeof a);
}

bar();

const tau = 6.28;
tau = 'something else';

console.log(tau); // stays 6.28, but without warning however
