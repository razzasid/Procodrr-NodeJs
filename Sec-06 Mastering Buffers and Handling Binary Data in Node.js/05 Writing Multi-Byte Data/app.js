const a = new ArrayBuffer(4);
const view = new DataView(a);
// view.setInt16(0, 260); // by default it sets values using 'Big Indian' 
// view.setInt16(2, 260, true); // here we are enabling 'Little Indian'

// console.log(view.getInt16(0))
// console.log(view.getInt16(2)) // if we don't enable 'Little Indian' we get different value
// console.log(view.getInt16(2, true)) // here we are enabling 'Little Indian'


// view.setInt32(0, 0x7823e324)
// console.log(view.getInt8(0)) // this will read only first byte that store 78 in hex
// console.log(view.getInt16(0)) // this will read only first two byte that store 7823 in hex
//  console.log(view.getInt16(0, true)) // this will read only first two byte with 'Little Endianness true' that store 2378 in hex
//  console.log(view.getInt32(0)) // this will read all byte at once that store 7823e324 in hex


//?Note:
// The functionality of endianness like 'Little Indian' and 'Big Indian' is  only available on multibyte hex numbers.
//?Eg:
// view.setInt8(0, 0x78) // it's a single byte hex number because setInt8() can set only those hex number which takes only one byte of space, here the 78 takes only one byte or 8 bits.
// view.setInt16(0, 0x7823) // it's a multibyte byte number because setInt16() can set those hex number which takes two byte of space, here the 7823 takes two byte or 16 bits.
// view.setInt32(0, 0x7823e324) // it's a multibyte byte number because setInt32() can set those hex number which takes four byte of space, here the 7823e324 takes four byte or 32 bits.


//? Note:
// 'Little Indian' and 'Big Indian' are nothing but just the change of order of byte.
//?Eg:
// view.setInt16(0, 0x7823)
// console.log(view.getInt16(0)) // default 'Big Indian', Byte order 7823 (hex number) and it's converted decimal value will be: 30,755

// console.log(view.getInt16(0, true)) // now 'true' here will enable 'Little Indian', and that will flip the 'Byte order' so the new byte order will be 2378 (hex number) and it's converted decimal value will be: 9080

// console.log(a) // Output: ArrayBuffer { [Uint8Contents]: <78 23 00 00>, byteLength: 4 }

// Similarly we can set the the value using by enabling 'Little Indian'
// view.setInt16(0, 0x7823, true);

// console.log(view.getInt16(0)) // Remember here we do not need to pass the true flag of 'Little Indian' because we have already enabled it while setting the value.

console.log(a) // Output: ArrayBuffer { [Uint8Contents]: <23 78 00 00>, byteLength: 4 }



view.setBigInt64(0, 0x7823e324)
console.log(view.getBigInt64(0))
console.log(a) // Output: ArrayBuffer { [Uint8Contents]: <23 78 00 00>, byteLength: 4 }
