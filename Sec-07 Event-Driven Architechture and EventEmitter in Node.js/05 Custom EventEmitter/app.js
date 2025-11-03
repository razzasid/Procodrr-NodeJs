class MyEventEmitter {
  constructor(){
    this._events = {}
  }

  on(eventName, eventHandler){
  if(this._events[eventName]){
    this._events[eventName].push(eventHandler)
  }else{
    this._events[eventName] = [eventHandler]
    console.log(this._events)
  }
  }

  emit(eventName, ...args){
    // console.log(args)
    // console.log(...args)
    this._events[eventName]?.forEach((event) => {
        event(...args)
      });
  }

  once(eventName, eventHandler){
  if(this._events[eventName]){
    this._events[eventName].push(eventHandler)
  }else{
    this._events[eventName] = [eventHandler]
  }
  }
}

const emitter = new MyEventEmitter()
emitter.on('a',(a,b,c)=>{
  console.log('a event is fired')
   console.log(a,b,c)
});

emitter.emit('a', 1,2,3);

