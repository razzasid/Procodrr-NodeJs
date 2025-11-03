import { Buffer, constants } from 'buffer';

// console.log(Buffer.poolSize); // Output: 8191 -> it's equivalent to 8 kibibyte or 8 * 1024 byte

Buffer.pool = 10000;

console.log(constants.MAX_LENGTH) // Output: 9007199254740991
 // 9007199254740991 is the size of the bytes and can create a Buffer of that much byte size, it varies system to system and RAM configuration.

//? condition for allocUnsafe() to use Buffer Pool
// BufferSize -> allocUnsafe(4095) should be less than the Buffer.poolSize >>> 1, here >>> means right shift.
// The Buffer Pool Size of node js is 8192

//? Creating Node Buffer
const a = Buffer.alloc(4);
const z = Buffer.alloc(4);


const b = Buffer.allocUnsafe(4095); // will use Buffer Pool 
const c = Buffer.allocUnsafe(4096) // will not use Buffer Poll and create a new buffer.

const e = Buffer.allocUnsafeSlow(4) // will creates the buffer and assign the random data but does not use 'Buffer Pool' unlike allocUnsafe() and it's slow as compared to allocUnsafe() but faster than alloc().

const d = Buffer.from('a'.repeat(constants.MAX_STRING_LENGTH))
// console.log(d.toString())

const joinBuffer = Buffer.concat([a, z]) // it will use Buffer Pool.

b[2] = 97;
c[0] = 101

// console.log(a.byteLength);
// console.log(b.byteLength);

console.log('**********')

// console.log(a.buffer.byteLength)
// console.log(b.buffer.byteLength)
// console.log(c.buffer.byteLength)

console.log(b.buffer === c.buffer);

console.log('End')


