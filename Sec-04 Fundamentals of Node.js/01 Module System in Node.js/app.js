var num = 45; // is it a global variable?
// in browser, it is a global variable
// in node, it is not a global variable

global.num = 45; // we can explicitly add it to global object, but it is not recommended.
console.log(num); 