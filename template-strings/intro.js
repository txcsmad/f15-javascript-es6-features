// Previously, would have to use + operator on strings
// New: use backticks and interpolate variables
// Example:

var introduction = function(name, location) {
    // - use backticks
    // - put variables in between using ${variable_name}
    // - can be broken across multiple lines
    var template = `Hi, 
I'm ${name} 
from ${location}.`;

    return template;
};


console.log(introduction('Zaphod', 'a galaxy far away'));
