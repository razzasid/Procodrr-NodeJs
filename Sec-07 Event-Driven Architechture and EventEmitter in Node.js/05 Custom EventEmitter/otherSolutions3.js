class MyEventEmitter {

  constructor() {

    this._events = {};

    this._onceEvents = {};

  }



  on(eventName, handler) {

    if (!this._events[eventName]) {

      this._events[eventName] = [];

    }



    this._events[eventName].push(handler);

  }



  once(eventName, handler) {

    this.on(eventName, handler);



    if (!this._onceEvents[eventName]) {

      this._onceEvents[eventName] = [];

    }



    this._onceEvents[eventName].push(handler);

  }



  emit(eventName, ...args) {

    if (!this._events[eventName]) return;



    this._events[eventName].forEach((eventHandler) => {

      eventHandler(...args);

    });



    this._events[eventName] = this._events[eventName].filter((eventHandler) => {

      return !this._onceEvents[eventName]?.includes(eventHandler);

    });



    if (this._events[eventName].length === 0) {

      delete this._events[eventName];

    }

  }



  off(eventName, handler) {

    if (!this._events[eventName]) return;



    this._events[eventName] = this._events[eventName].filter((eventHandler) => {

      return eventHandler !== handler;

    });

  }

}