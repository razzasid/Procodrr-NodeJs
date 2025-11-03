import EventEmitter from 'events'; // OR class MyEmitter extends EventEmitter {}
//console.log(EventEmitter)

const emitter = new EventEmitter() // OR // const emitter =  new MyEmitter()

emitter.setMaxListeners(2); // if we set more than 2 emitter of same name then we will get warning.

emitter.on('abc', () => {  // this registers an event
  console.log('abc event fired')
})

emitter.on('x', () => {
  console.log('x event fired 1')
})

emitter.on('x', () => {
  console.log('x event fired 2')
})

emitter.on('y', () => {
  console.log('y event fired')
})


emitter.once('z', () => { // this event can only be emitted or fired once and once it is emitted it will be remove from the '_events' object
  console.log('z event fired')
})



// emitter.emit("abc") // this will fire an event
// emitter.emit("x")
// emitter.emit("y")

// console.log(emitter._events)
emitter.emit("z")
// emitter.emit("z")
// emitter.emit("z")
// console.log(emitter._events)


//console.log(emitter)