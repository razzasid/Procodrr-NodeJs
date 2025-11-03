//const path = require('path');
const childOfChild = require('./childOfChild');

console.log('============ module of child ============')

module.exports = {
  greet: function () {
    console.log('Hello from child.js !');
  },
  // getPath: function () {
  //   return path.dirname(module.filename);
  // }
};

// console.log('Module ID:', module.id);
// console.log('Module Filename:', module.filename);
// console.log('Module Loaded:', module.loaded);
// console.log('Module Parent:', module.parent);
// console.log('Module Children:', module.children);
// console.log('Module Paths:', module.paths);
// console.log('Module isPreloading:', module.isPreloading);

// console.log(module)



