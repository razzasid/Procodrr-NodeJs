**Q1:** can you clear these points in easy language: 

- When we create a Buffer (Buffer.alloc() or Buffer.allocUnsafe()):

- The buffer size (byteLength) is exactly what we specify.

- But under the hood, ArrayBuffer behaves differently. [Ans-1]()

---

**Q2:** what will be the output and why: 
```js
const a = Buffer.alloc(4);
const b = Buffer.allocUnsafe(4);
console.log(a.byteLength);
console.log(b.byteLength);

console.log(a.buffer.byteLength)
console.log(b.buffer.byteLength)
```
[Ans-2]()