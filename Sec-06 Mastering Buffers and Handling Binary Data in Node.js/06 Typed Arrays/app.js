// const a = new ArrayBuffer(4);
// const view = new DataView(a);

// Till now we have seen that we can create ArrayBuffer() but we can not modify it directly, for modification we have used DataView() but DataView() is not the only way to modify ArrayBuffer() in node.js but we can also modify the ArrayBuffer() using TypedArray.
// If want maximum control on ArrayBuffer() then we use DataView() and if we know that our data or number that we want to store in ArrayBuffer(4) is of a fixed size then we use TypedArray to modify it.

//* Groups or Categories or Types of TypedArrays:

// 1: For Integer values
//? for signed integer 
// Int8Array
// Int16Array
// Int32Array
// BigInt64Array

//? for unsigned integer
// Uint8Array
// Uint8ClampedArray
// Uint16Array
// Uint32Array
// BigUint64Array

// 2:  For float values
// Float32Array
// Float64Array


// For TypedArray we do not need to create ArrayBuffer separately like we did while using DataView()
// const a = new ArrayBuffer(4);
// const view = new DataView(a);



// const uint8Array = new Uint8Array(4); // we can create ArrayBuffer and TypedArray at the same time, but while creating ArrayBuffer we need to take of the size of the ArrayBuffer, and it should be like below:
// For Uint8Array() ->  multiples of 1  Eg: Uint8Array(2)
// For Uint16Array() ->  multiples of 2  Eg: Uint16Array(4)
// For Uint32Array() ->  multiples of 4  Eg: Uint32Array(8)
// For BigUint64Array() ->  multiples of 8  Eg: BigUint64Array(16)

//* Methods to create a TypedArray
//: Method 1
// const a = new ArrayBuffer(4);
// const uint8Array1 = new Uint8Array(a);
// console.log(uint8Array1)

//: Method 2
// const uint8Array2 = new Uint8Array(4);
// console.log(uint8Array2.buffer);

//: Method 3
const uint8Array3 = new Uint8Array(4);
uint8Array3[0] = 0xfe;
uint8Array3[1] = 0xee;
uint8Array3[2] = 0x3a;
uint8Array3[3] = 0x8a;

// console.log(uint8Array3.buffer);


// The above code in short form:
const uint8Array4 = new Uint8Array([0xfe, 0xee, 0x3a, 0x8a]);
const uint8Array5 = new Uint8Array([0xfe, 0xee, 0, 0x8a]); // if we don't want to keep any value at certain position then cak skip it with zero ( 0 )
// console.log(uint8Array4.buffer)
//console.log(uint8Array5.buffer)

//* Create large ArrayBuffer using TypedArray:
// const uint8Array6 = new Uint8Array(1.9 * 1024 * 1024 * 1024);
// for ( let i = 0; i < uint8Array6.length; i++){
// uint8Array6[i] = i;
// }

// we can assign the the values in TypedArray using fill() method instead of using for loop.

// const uint8Array6 = new Uint8Array(1.9 * 1024 * 1024 * 1024).fill(0xff);

// console.log(uint8Array6.buffer)

// Experiment of memory usage
// setInterval(()=>{
// const a = [
//   new Uint8Array(1.9 * 1024 * 1024 * 1024).fill(0xff),
//   new Uint8Array(1.9 * 1024 * 1024 * 1024).fill(0xff),
//   new Uint8Array(1.9 * 1024 * 1024 * 1024).fill(0xff),
//   new Uint8Array(1.9 * 1024 * 1024 * 1024).fill(0xff),
// ]
// },1000)


//* Understanding detached, maxByteLength, resizable property of an ArrayBuffer:

 const a = new ArrayBuffer(4, { maxByteLength:16 }); // we can pass one more arguments here which is an object. the {maxByteLength:16} here  will set the 'resizable property' of the ArrayBuffer to 'true', so now we can resize or reset the size of the ArrayBuffer and {maxByteLength:16} will also set the maxByteLength to 16.

 a.resize(8) // now we are able to resize or reset the size of the ArrayBuffer.

const uint8Array7 = new Uint8Array(a);
uint8Array7[0]= 0xF
console.log(a) // Output: ArrayBuffer { [Uint8Contents]: <0f 00 00 00>, byteLength: 4 }

const b = a.transfer() // this will set the detached property of an ArrayBuffer to 'true' and the size and data of that 'ArrayBuffer' which 'a' in this case will be allocated or transferred to another variable which is 'b' in this case and will become empty.

console.log(b) // Output: ArrayBuffer { [Uint8Contents]: <0f 00 00 00>, byteLength: 4 }
console.log(a) // Output: ArrayBuffer { (detached), byteLength: 0 }


//const uint16Array = new Uint16Array(4);
//const uint32Array = new Uint32Array(8);

// console.log(uint16Array)
// console.log(uint32Array)




