//* Decimal Number System
// Any decimal number has two values 1: face value and 2: place value

// Example: 123 
// 3 ( here the 'Face Value' of 3 is 3 and the 'Place Value' of 3 is 3 × 1 = 3 since it's at unit place )

// 2 ( here the 'Face Value' of 2 is 2 and the 'Place Value' of 2 is 2 × 10 = 20 since it's at tense place )

// 1 ( here the 'Face Value' of 1 is 1 and the 'Place Value' of 1 is 1 × 100 = 100 since it's at hundreds place )

// Note: The highest number that we can represent using single digit in decimal number system is 9 .

//? Make a decimal number by reversing it's order
// Method 1
const digitList1 = [5, 6, 4, 2]
const num1 = 2 * 1 + 4 * 10 + 6 * 100 + 5 * 1000
// console.log(num1) //Output: 5642


// Method 2
const digitList2 = [2, 3, 7]
const num2 = 7 * Math.pow(10, 0) + 3 * Math.pow(10, 1) + 2 * Math.pow(10, 2)
// console.log(num2) //Output: 237

// Method 3 ( Generalization Using forEach() Method )
function digitsToNumberUsingForEach(digits) {
  let num = 0;
  digits.forEach((digit, index) => {
    num += digit * Math.pow(10, digitList1.length - 1 - index);
  })
  return num;
}
console.log(digitsToNumberUsingForEach(digitList1)) //Output: 5642


// Method 4 ( Generalization Using reduce() Method)
function digitsToNumberUsingReduce(digits) {
  return digits.reduce((acc, curr, index) => acc + curr * Math.pow(10, digitList2.length - 1 - index),0)
}

console.log(digitsToNumberUsingReduce(digitList2)) //Output: 237
