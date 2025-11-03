const btn1 = document.querySelector('.btn');
btn1.addEventListener('click', ()=>{
  const a = new ArrayBuffer(4);
  const uint8Array = new Uint8Array(a);
  uint8Array[0] = 97
  uint8Array[1] = 98
  uint8Array[2] = 99
  uint8Array[3] = 100

  fetch("http://localhost:3000/",{
  method:"POST",
  //body:"Hameed Khan",
  body:a, // sending array buffer to server
})
.then((response)=> response.text())
.then((data)=> console.log(data))
})
