const EventEmitter = require('events');
class MyEvents extends EventEmitter {}
const myEvents = new MyEvents();

myEvents.on('event-1', () => console.log('On event!'));
myEvents.on('event-2', (arg1) => console.log(`event: ${arg1}`));

myEvents.emit('event-1');
myEvents.emit('event-2', 'something');

setInterval(() => myEvents.emit('tick', new Date()), 1000);
myEvents.on('tick', date => console.log(date));