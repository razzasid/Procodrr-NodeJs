const child = require('./child'); // Import the child module
// const childOfChild = require('./childOfChild'); // why this is not working

delete require.cache[require.resolve('./childOfChild')];
const childOfChild = require('./childOfChild'); // Now it will execute again

//console.log(childOfChild)
//console.log(childOfChild2)
console.log('============ module of parent ============')
child.greet(); // Output: Hello from myModule!
childOfChild.greet(); // Output: Hello from childOfChild!

const num = 10;
exports.num = num;

console.log(module)
console.log(module)


