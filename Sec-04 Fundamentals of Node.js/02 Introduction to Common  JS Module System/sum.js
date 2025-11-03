// sum.js
function sum(...numbers) {
  return numbers.reduce((curr, acc) => curr + acc, 0);
}

//* Methods to export a module:

//? Method 1:
// exports.sum = sum;
// in the import file, we will have to destructure it to import the module like this:
// const{ sum } = require('./sum.js');


//? Method 2:
// module.exports = sum;
// in the import file, we will have to destructure it to import the module like this:
// const sum = require('./sum.js');

//? Method 3 wrong way to export a module:
// module.exports { sum }; // this will throw an error. because the module.exports object is not an object. it is a function. so we can't assign an object to a function. we can only assign a function to a function.

//? Method 3 Right way to export a module:
module.exports = { sum }; // this will work. because we are assigning an object to the module.exports object. so it will work.

// in the import file, we will have to destructure it to import the module like this:
// const{ sum } = require('./sum.js');

//? Method 4:
// we can also export it using Array Destructuring. ( not recommended)
// module.exports = [sum];
// in the import file, we will have to destructure it to import the module like this:
// const [sum] = require('./sum.js');
