import { Buffer, constants } from 'buffer';
import fs from 'fs/promises'

//@ Buffer Methods
//* BufferObject.toString() and Buffer.from() methods
//?Note:
// we can not reading a buffer data using 'utf-16le' encoding if it is written using 'utf-8' encoding but we can read a buffer data using 'utf-8' encoding if it is written using utf-16le encoding.

const nodeBuffer = Buffer.from("Hello World!"); // By default it creates buffer and write values using utf-8 encoding.

// console.log(nodeBuffer.toString()) // by default toString() will read data using utf-8 encoding.

/// console.log(nodeBuffer.toString('utf-16le')) // it will give unexpected value because the data is written using using utf-8 and are reading it using utf-16le which is not right. 

//* Changing encoding:
const nodeBuffer2 = Buffer.from("Hello World!", 'utf-16le'); 
// console.log(nodeBuffer2.toString('utf-16le')); // now it will give expected value.

// console.log(nodeBuffer2.toString('utf-8')) // it will only read non-zero values.

fs.writeFile('file2.txt', nodeBuffer2)


const nodeBuffer3 = Buffer.alloc(8);
nodeBuffer3[0] = 98;
nodeBuffer3[1] = 0;
nodeBuffer3[7] = 104
// console.log(nodeBuffer3.toString('utf-8')) // it will only read non-zero values.

const decoder = new TextDecoder('utf-8');
// console.log(decoder.decode(nodeBuffer3)) // it will also read only non-zero values.

// console.log(nodeBuffer3)
// fs.writeFile('file.txt', nodeBuffer3) // here when we are writing the buffer data in a file the non-zero values are stored as null and we can see it in the file. while if we are reading it using toString() with utf-8 encoding or using TextDecoder() the non-zero values are ignored.


const nodeBuffer4 = Buffer.from("abc"); 
// console.log(nodeBuffer4.toString('hex')) // hex encoding

const nodeBuffer5 = Buffer.from("abc"); 
// console.log(nodeBuffer5.toString('binary')) // binary encoding, it's an alias for 'latin1' encoding

//* BufferObject.write() method
const nodeBuffer6 = Buffer.alloc(8);
nodeBuffer6.write("abc") // by default it writes using utf-8 but we can specify the encoding the 2nd argument.
// console.log(nodeBuffer6.toString());

// nodeBuffer6.write("abc", 'utf-16le');
// console.log(nodeBuffer6.toString('utf-16le'));

// nodeBuffer6.write("abc", 'hex');
// console.log(nodeBuffer6.toString('hex')); //? not giving expected output

// nodeBuffer6.write("abc", 'binary');
// console.log(nodeBuffer6.toString('binary'));

//* BufferObject.toJSON() method
// console.log(nodeBuffer6.toJSON())

//* BufferObject.slice() method
const nodeBuffer7 = Buffer.from("Hello World!");
// console.log(nodeBuffer7.slice(5).toString()) // it's deprecated, so we should use 'subarray' instead.
// console.log(nodeBuffer7.slice(5,8).toString())

//* Buffer.subarray() method
// console.log(nodeBuffer7.subarray(5).toString()) 
// console.log(nodeBuffer7.subarray(5, 8).toString()) 

//* BufferObject.copy() method
nodeBuffer7.copy(nodeBuffer6, 3, 0, 5) // nodeBuffer7 from index 0 to 5  will be copied to nodeBuffer6 from index 3.
// console.log(nodeBuffer6.toString());

//* BufferObject.includes() method
// console.log(nodeBuffer7.includes('Hello')); // Output : true
// console.log(nodeBuffer7.includes('what')); // Output : false

// console.log(nodeBuffer7.includes('He', 5)); // Output : false -> because it will check after index 5
// console.log(nodeBuffer7.includes('He', 5, 'utf-16le')); // we can also pass encoding here

//* BufferObject.fill() method
// console.log(nodeBuffer7.fill(98));

//* BufferObject.readInt8(), BufferObject.readInt16LE() and BufferObject.readInt16BE() method
// console.log(nodeBuffer6.readInt8()) // by default it will return decimal value of first byte.
// console.log(nodeBuffer6.readInt8(2)) // we can also read decimal value of a particular byte at random position.
// console.log(nodeBuffer6.readInt16LE(2))
// console.log(nodeBuffer6.readInt16BE(2))

//* BufferObject.writeInt8(), BufferObject.writeInt16LE() and BufferObject.writeInt16BE() method
const nodeBuffer8 = Buffer.alloc(8);
//console.log(nodeBuffer8)
//console.log(nodeBuffer8.writeInt8(0x65)); // will write a byte index 0 

// console.log(nodeBuffer8.writeInt16LE(0x65, 0)); // will write a byte index 0
// console.log(nodeBuffer8.writeInt16LE(0x67, 2)); // will write a byte index 2
// console.log(nodeBuffer8)

// console.log(nodeBuffer8.writeInt16BE(0x65, 0)); // will write a byte index 0
// console.log(nodeBuffer8.writeInt16BE(0x67, 2)); // will write a byte index 2
// console.log(nodeBuffer8)

//* BufferObject.at() method
console.log(nodeBuffer7.at(2));

//@ Buffer Properties
//* BufferObject.buffer property
console.log(nodeBuffer7.buffer);
console.log(nodeBuffer7.byteLength);
console.log(nodeBuffer7.byteOffset);
console.log(nodeBuffer7.length);