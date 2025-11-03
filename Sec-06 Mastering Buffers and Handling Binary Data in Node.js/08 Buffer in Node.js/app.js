import { Buffer } from 'buffer'
const unit8Array = new Uint8Array(4)
// const nodeBuffer = new Buffer(4) // it gives deprecated waring in the terminal that's why we use Buffer.alloc() and since it does not suggest it's methods automatically that's why we are importing the Buffer ( import { Buffer } from 'buffer' ) or else we can do ( npm i @types/node -D )

// console.log(nodeBuffer.buffer)
// console.log(unit8Array.buffer)

const nodeBuffer2 = Buffer.alloc(4) // this will create an array buffer in node.js
// console.log(nodeBuffer2.buffer)

// if we want to create a buffer in node js using ArrayBuffer() then we use Buffer.from() instead of Buffer.alloc()
const a = new ArrayBuffer(4) // we have connected this buffer to 'node Buffer' as well as to Uint8Array() ( TypedArray ) so if modify this whether using node Buffer ( nodeBuffer3 ) or Uint8Array() ( unit8Array2 ) the changes will be seen on both places because they both are pointing to the same array Buffer i.e 'a' in this case.
const nodeBuffer3 = Buffer.from(a);
// console.log(nodeBuffer3.buffer)


const unit8Array2 = new Uint8Array(a)
unit8Array2[0] = 97;
unit8Array2[1] = 98;
unit8Array2[2] = 99;
unit8Array2[3] = 100;

// console.log(unit8Array2.toString()) // toString() does node work on Uint8Array() ( TypedArray ) that's why we use TextDecoder() method here, but toString() works on node Buffer.
// console.log(nodeBuffer3.toString()) // toString() will work here

// console.log(nodeBuffer3.buffer === unit8Array2.buffer) // Output : true

// what is the difference between the Buffer.alloc() Buffer.from()
const nodeBuffer4 = Buffer.alloc(4);
const nodeBuffer5 = Buffer.from([97, 98, 99, 100]);
const nodeBuffer6 = Buffer.allocUnsafe(4);

console.log(nodeBuffer4.buffer.byteLength); // Output: 4
console.log(nodeBuffer5.buffer.byteLength); // Output: 8192
console.log(nodeBuffer6.buffer.byteLength) // Output: 8192

// why there is a difference in byteLength in buffer created from Buffer.alloc() and Buffer.from()