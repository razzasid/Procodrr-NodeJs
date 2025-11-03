// always start a hexadecimal number with zero 0 and x.
// storing a hexadecimal number in a variable:
const hexNum1 = 0x843;
const hexNum2 = 0x45a;

// decimal to hexadecimal
const decimalNum = 2115;
console.log(decimalNum.toString(16));

// hexadecimal to decimal
const hexNum3 = '843';
console.log(parseInt(hexNum3,16));

const hexNum4 = '0x45a';
console.log(parseInt(hexNum4,16))

// hexadecimal to decimal - Generalizing Using reduce() Method 
const digitList1 = [4, 1, 'a']
function digitsToNumberUsingReduce(digits, radix = 10) {
  const hexMap = {
    'a':10,
    'b':11,
    'c':12,
    'd':13,
    'e':14,
    'f':15,
  }
  return digits.reduce((acc, curr, index) => {
     const modifiedCurr = typeof(curr) === "string"? hexMap[curr.toLowerCase()]: curr;
     return acc +  modifiedCurr * Math.pow(radix, digitList1.length - 1 - index)
  },0)
}
console.log(digitsToNumberUsingReduce(digitList1,16))