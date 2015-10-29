// Native support for Sets

// Creating a new Set is easy!
var backpack = new Set();

// Adding stuff to a set
backpack.add('apple');
backpack.add('pencils');
backpack.add(3); // does not have to be same type as other items

// Checking if a set has something
backpack.has('apple');
backpack.has('paper');

// Removing stuff
backpack.delete('apple');

// Getting the elements in a set
// On Sets, keys and values are the same
// entries is an Iterable of key,value pairs
backpack.entries(); 
backpack.keys();
backpack.values();

