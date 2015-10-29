var m = new Map();

m.set('apple', 5);
m.set('banana', 10);

// is an Iterable object
// does not have useful array methods such as `forEach`
console.log(m.entries());

// iterate over values using `for of`
for (var entry of m.entries()) {
    console.log(entry);
}
