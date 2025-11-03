// product.js
function product(...numbers) {
  return numbers.reduce((curr, acc) => curr * acc, 1);
}

//* Methods to export a module:


//? Method 1:
exports.product = product;
// in the import file, we will have to destructure it to import the module like this:
// const{ product } = require('./product.js');

//? Method 2:
// module.exports = product;
// in the import file, we will have to destructure it to import the module like this:
// const product = require('./product.js');

//? Method 3 wrong way to export a module:
// module.exports { product }; // this will throw an error. because the module.exports object is not an object. it is a function. so we can't assign an object to a function. we can only assign a function to a function.

//? Method 3 Right way to export a module:
module.exports = { product }; // this will work. because we are assigning an object to the module.exports object. so it will work.
// in the import file, we will have to destructure it to import the module like this:
// const{ product } = require('./product.js');

//? Method 4:
// we can also export it using Array Destructuring. ( not recommended)
// module.exports = [product];
// in the import file, we will have to destructure it to import the module like this:
// const [product] = require('./product.js');
