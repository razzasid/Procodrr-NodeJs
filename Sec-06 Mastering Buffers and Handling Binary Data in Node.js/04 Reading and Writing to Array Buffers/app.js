const a = new ArrayBuffer(4);
const view = new DataView(a);

//? Storing Unsigned Values to Array Buffer
// view.setInt8(0, 80)
// view.setInt8(1, 0b1010001)
// view.setInt8(2, 0x52)
// view.setInt8(3, 0o123)

//? Storing Signed Values to Array Buffer
view.setInt8(0, -1)
view.setInt8(1, 127)
view.setInt8(2, 128)
view.setInt8(3, 135)

//? will return signed value
console.log(view.getInt8(0))
console.log(view.getInt8(1))
console.log(view.getInt8(2))

//? will return unsigned value
console.log(view.getUint8(0))
console.log(view.getUint8(1))
console.log(view.getUint8(2))






console.log(a)