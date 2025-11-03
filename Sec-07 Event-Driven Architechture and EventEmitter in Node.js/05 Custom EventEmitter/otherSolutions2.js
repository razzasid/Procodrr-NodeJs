//my own module for event handling

class NileshEvent{

    constructor(){

        this._eventsCount = 0

        this._events = {}

    }

    on(name, fn){

        this._events[`${name}`] ={

            fn: fn,

            once:false,

            count:0

        }

        this._eventsCount++

    }

    once(name, fn){

        this._events[`${name}`] ={

            fn: fn,

            once:true,

            count:0

        }

        this._eventsCount++

    }



    emit(...arg) {

        let [name] = arg

        let parameters = arg.slice(1,arg.length)

        if(!this._events[`${name}`]){

            console.log('This event does not exits')

            return

        }

        if (this._events[`${name}`].once && this._events[`${name}`].count<1){

            this._events[`${name}`].fn(...parameters);

        }

        else {

            this._events[`${name}`].fn(...parameters);

        }

        this._events[`${name}`].count+=1

    }

}



let n1 = new NileshEvent()

n1.once('abc',(name,age)=>{

    console.log('hi friends',name,age)

})

// n1.on('pqr',()=>{

//     console.log('hi dosto')

// })



n1.emit('abc','Nilesh',10)

n1.emit('abc','Nilesh',30)

// n1.emit('pqr')



console.log(n1._eventsCount)