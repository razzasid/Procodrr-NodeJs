# Node.js Module System Notes:

# `app.js file`

## `require()` Function

### Example:

```javascript
typeof require; // function
```

- The `require()` function is used to import modules in Node.js.

- It takes a `path` (as a string) as an argument and returns the `module.exports` object of the module.

- so we can say that the return value of require() is the module.exports object of the module.

- If there is no `exports` object in the module, it returns an empty object.

---

## Requiring Individual Modules

- You can require individual modules like `sum.js` and `product.js`.

### Example:

```javascript
const sum = require("./sum.js");
const product = require("./product.js");
```

- the `require()` function here will find the `sum.js` file and start executing it.

- it will execute all the code inside `sum.js` and finally it will return every thing that is inside the `module.exports` object of the module.

- if there is no exports object in the module, it will return an `empty object` {}.

---

## Requiring from a Module with Multiple Exports (`math.js`)

- If a module exports multiple functions (e.g., `sum` and `product`), you can require it in different ways.

### Method 1: Require the Entire Module

```javascript
const math = require("./math.js");
console.log(math); // { sum: [Function: sum], product: [Function: product] }
console.log(math.sum(1, 2, 3, 4)); // 10
console.log(math.product(1, 2, 3, 4)); // 24
```

### Method 2: Destructure the Exports

```javascript
const { sum, product } = require("./math.js");
console.log(sum(1, 2, 3, 4)); // 10
console.log(product(1, 2, 3, 4)); // 24
```

### Method 3: Array Destructuring (Not Recommended)

```javascript
const [sum, product] = require("./math.js");
console.log(sum(1, 2, 3, 4)); // 10
```

### Experiment

```js
const [sum, product] = require("./math.js");
console.log(sum, product);
console.log(sum, product); //  H e
```

---

# `sum.js file`

```js
function sum(...numbers) {
  return numbers.reduce((curr, acc) => curr + acc, 0);
}
```

## Methods to export a module:

### Method 1 Attach to `exports` Object

```js
exports.sum = sum;
//in the import file, we will have to destructure it to import the module like this:

// in app.js file
const { sum } = require("./sum.js");
```

### Method 2: Export as a Single Function

```js
module.exports = sum;
// in the import file, we will have to destructure it to import the module like this:

// in app.js file
const sum = require("./sum.js");
```

### Method 3: Export as an Object ( wrong way to export a module )

```js
module.exports { sum };
// this will throw an error. because the module.exports object is not an object. it is a function. so we can't assign an object to a function. we can only assign a function to a function.
```

### Method 3: Export as an Object ( Right way to export a module )

```js
module.exports = { sum }; // this will work. because we are assigning an object to the module.exports object. so it will work.

// in the import file, we will have to destructure it to import the module like this:

// in app.js file
const { sum } = require("./sum.js");
```

### Method 4:

```js
// we can also export it using Array Destructuring. ( not recommended)
module.exports = [sum];
// in the import file, we will have to destructure it to import the module like this:

// in app.js file
const [sum] = require("./sum.js");
```

---

# `product.js file`

```js
function product(...numbers) {
  return numbers.reduce((curr, acc) => curr * acc, 1);
}
```

- All the thing that we did in **`sum.js`** file is applicable for **`product.js`** file.

# `math.js file`

```js
function sum(...numbers) {
  return numbers.reduce((curr, acc) => curr + acc, 0);
}

function product(...numbers) {
  return numbers.reduce((curr, acc) => curr * acc, 1);
}
```

## Methods to export a module:

### Method 1: Export as an Object

```js
module.exports = {
  sum,
  product,
};
// in the import file, we will have to destructure it to import the module like this:

// in app.js file
const { sum, product } = require("./math.js");
```

### Method 2: Attach to `exports` Object

```js
module.exports.sum = sum;
module.exports.product = product;
// in the import file, we will have to destructure it to import the module like this:

// in app.js file
const { sum, product } = require("./math.js");
```

### Method 3: Export as a Single Function

```js
exports.sum = sum;
exports.product = sum;
// in the import file, we will have to destructure it to import the module like this:

// in app.js file
const { sum, product } = require("./math.js");
```

### Method 4: Export Using Array Destructuring (Not Recommended)

```js
// we can also export them using Array Destructuring. ( not recommended)
module.exports = [sum, product];
// in the import file, we will have to destructure it to import the module like this:

// in app.js file
const [sum, product] = require("./math.js");
```

### Experiment

```js
module.exports = 'Hello'

// in app.js file
import [ sum, product ] from './math.js';
console.log(sum, product); // H e
```

---

## Common Mistakes in Exporting Modules

- **Wrong Way**: Trying to assign an object directly to `module.exports` without proper syntax.

```javascript
module.exports { sum }; // This will throw an error.
```

- **Correct Way**: Assign an object to `module.exports`.

```javascript
module.exports = { sum }; // This works.
```

---

## Example Functions in Modules

### `sum.js`

```javascript
function sum(...numbers) {
  return numbers.reduce((curr, acc) => curr + acc, 0);
}

module.exports = { sum };
```

### `product.js`

```javascript
function product(...numbers) {
  return numbers.reduce((curr, acc) => curr * acc, 1);
}

module.exports = { product };
```

---

## Key Points

1. The `require()` function returns the `module.exports` object of the module.
2. You can export modules using `module.exports` or `exports`.
3. Destructuring is commonly used to import specific functions from a module.
4. Avoid using array destructuring for exports as it is not recommended.
5. Ensure proper syntax when exporting modules to avoid errors.

---

## Experiment: Exporting a String

```javascript
module.exports = "Hello";
```

- In the import file:

```javascript
const [sum, product] = require("./math.js");
console.log(sum, product); // 'H' 'e'
```

- This happens because the string is treated as an array of characters.

```

```
