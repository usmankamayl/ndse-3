#!/usr/bin/env node
// console.log(new Date());
// console.log(process.argv);
// const numbers = process.argv.slice(2).map(a => Number(a));
// const sum = numbers.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);
const yargs = require("yargs/yargs");
const { hideBin } = require('yargs/helpers');
const { argv, require } = require("yargs");
const args = yargs(hideBin(process.argv)).argv;

// console.log(args);
// let d = 4;
// const data = new Date();
// console.log(data.getFullYear());

// const EventEmitter = require('events');
// class MyEvents extends EventEmitter {}
// const myEvents = new MyEvents;

// myEvents.on('event-1', () => console.log('on event!'));
// myEvents.on('event-1', () => console.log('on event!!'));

// myEvents.emit('event-1');
// const data = {
//   "year": false,
//   "month": false,
//   "date": false
// }

//  let {year, month, date} = argv;
// const data = new Date();
// if(data.year === true) {
//   console.log(dat.getFullYear())
// }

// console.log(year);

// if(argv.year) {
//   console.log(data.getFullYear())
// }

// if(argv.month) {
//   console.log(data.getMonth())
// }

// if(argv.date) {
//   console.log(data.getDate())
// }

// console.log(data);

