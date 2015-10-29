// Native support for Maps
// Use to store key, value pairs

// Creating a new Map
var m = new Map();

// Adding stuff to a map
m.set('apple', 10);
m.set('pencils', 3);

// Checking if a map has something
m.has('apple');

// Getting the value for a key
m.get('apple'); // returns 10

// Removing stuff
m.delete('apple');

// Getting the contents in a Map
// entries is an Iterable of key,value pairs
m.entries(); 
m.keys();
m.values();

// Clearing the entire map
m.clear();
