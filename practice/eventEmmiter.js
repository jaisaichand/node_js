const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('messegeLoaded', (arg) => {console.log('listener called ', arg);});

emitter.emit('messegeLoaded', {id: 1, url: 'http://'});

