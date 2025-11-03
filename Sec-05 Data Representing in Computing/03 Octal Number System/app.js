// in javascript if we put zero before any decimal number then it becomes an octal number.
// Eg: 10 decimal number
//     010 octal number
// it works in node.js and browser without strict mode but this method is deprecated and in vs code it will give error.
// Eg: const octalNumber = 010

// the max/highest single digit number that we can write in octal is 7

/////////////////////////////
// new way of storing a octal number in a variable: here we put capital O and zero before any decimal number then it becomes an octal number.
const octalNumber = 0o10;
const octalNumber2 = 0o237
// console.log(octalNumber);
// console.log(octalNumber2)

// conversion from octal to decimal
const decimalNum = parseInt('237',8);
// console.log(decimalNum)

// conversion from decimal to octal
const num = 159;
const octalNum = num.toString(8); // it returns octal number in string and we keep it string only, if we parse it then it will become a decimal number.
// console.log(octalNum)

// Octal to decimal - Generalizing Using reduce() Method 
const digitList1 = [2 ,3 ,7 ]
function digitsToNumberUsingReduce(digits, radix = 10) {
  return digits.reduce((acc, curr, index) => acc + curr * Math.pow(radix, digitList1.length - 1 - index),0)
}
console.log(digitsToNumberUsingReduce(digitList1,8))