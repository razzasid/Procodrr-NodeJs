// const path = require('path');

console.log('=========== module of childOfChild ============')

module.exports = {
  greet: function () {
    console.log('Hello from childOfChild.js !');
  },

  // myDate: new Date().toString()
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


