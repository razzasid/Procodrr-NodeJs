fetch('http://localhost:3000')
.then((response)=>response.arrayBuffer())
.then((data)=> {
const decoder = new TextDecoder('utf-8')
console.log(decoder.decode(data))
})