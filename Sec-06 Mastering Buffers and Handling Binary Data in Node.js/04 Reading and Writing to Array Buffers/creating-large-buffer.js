const a = new ArrayBuffer(1.99 * 1024 * 1024 * 1024)
const view = new DataView(a);

const b = new ArrayBuffer(1.99 * 1024 * 1024 * 1024)
const view2 = new DataView(a);

const c = new ArrayBuffer(1.99 * 1024 * 1024 * 1024)
const view3 = new DataView(a);

const d = new ArrayBuffer(1.99 * 1024 * 1024 * 1024)
const view4 = new DataView(a);


for(let i = 0; i < view.byteLength; i++){
  view.setInt8(i, i+1)
  view2.setInt8(i, i+1)
  view3.setInt8(i, i+1)
  view4.setInt8(i, i+1)
}
console.log(a)
console.log("End")

setInterval(function(){
  console.log("Running")
},2000)

