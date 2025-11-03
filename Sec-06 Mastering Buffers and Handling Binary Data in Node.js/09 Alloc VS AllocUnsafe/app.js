import { Buffer } from 'buffer'
const nodeBuffer1 = Buffer.alloc(4500); // it creates the buffer alloted size and assign the value as zero ( 0 ) to every byte.
const nodeBuffer2 = Buffer.allocUnsafe(4500); // it only creates the buffer of the alloted size and it may assign any value randomly or it may be empty, the random values are assigned for large sized buffer.

// Buffer.allocUnsafe() is unsafe and can revel any sensitive data, even it can revel node.js code, but it's fast. so we should only use it if we want to prefill the data like below;

const nodeBuffer3 = Buffer.allocUnsafe(4500).fill(99); 
// console.log(nodeBuffer3)

// console.log(nodeBuffer1);
// console.log(nodeBuffer2);

// console.log(nodeBuffer1.toString());
// console.log(nodeBuffer2.toString());

//* Experiment execution time of Buffer.alloc() and Buffer.allocUnsafe()

//? Buffer.alloc()
console.time('Buffer.alloc');
for(let i = 0; i<100000; i++){
  Buffer.alloc(1024); // 1KB buffer
}
console.timeEnd('Buffer.alloc')

//? Buffer.allocUnsafe():
//  Buffer.allocUnsafe() is generally fast than the Buffer.alloc() due to 2 reasons 
// 1: Buffer Pool 
// 2: allocUnsafe() only creates the buffer of given size and does not assign any values to it, while .alloc() creates the buffer and assign zero to every byte.
console.time('Buffer.allocUnsafe');
for(let i = 0; i<100000; i++){
  Buffer.allocUnsafe(1024); // 1KB buffer
}
console.timeEnd('Buffer.allocUnsafe')

