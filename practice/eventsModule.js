
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('messegeLogged', (args) => {
    console.log('Listener Called', args);
})

emitter.emit('messegeLogged', { name: 'jai', grade: 'A+' });