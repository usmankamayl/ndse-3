#!/usr/bin/env node
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { argv } = require("yargs");
const args = yargs(hideBin(process.argv)).argv;
const t = new Date();
yargs.command({
  command: "current",
  describe: "Команда для показа даты",
  builder: {
    month: {
      describe: 'Показать месяц',
      alias: 'm',
      type: 'boolean',
      default: false
    },
    year: {
      describe: 'Показать год',
      alias: 'y',
      type: 'boolean',
      default: false
    },
    date: {
      describe: 'Показать день',
      alias: 'd',
      type: 'boolean',
      default: false
    },
  },
  handler: function(argv) {
    switch(true) {
      case argv.year: console.log(`Текущий год: ${t.getFullYear()}`);
        break;
      case argv.month: console.log(`Текущий месяц ${t.getMonth()}`);
        break;
      case argv.date: console.log(`Сегодняшний день ${t.getDate()}`);
        break;
      default: console.log(`Сегодняшняя дата: ${t}`)  
        break;
    }
  }
}).argv

yargs.command({
  command: 'add',
  describe: 'Команда добавляющая дни',
  builder: {
    day: {
      describe: 'Прибавить  день',
      alias: 'd',
      demandOption: true
    }
  },

  handler: (argv) => {
    console.log(`Через ${argv.day}(дни)  будет ${new Date(t.setDate(t.getDate() + argv.day))}`);
  }
}).argv

yargs.command({
  command: 'sub',
  describe: 'Команда отнимающая месяци',
  builder: {
    month: {
      describe: 'Отнять месяц',
      alias: 'm',
      demandOption: true
    }
  },

  handler: (argv) => {
    console.log(`${argv.month} (месяцы) назад было ${new Date(t.setMonth(t.getMonth() - argv.month))}`);
  }
})
.argv
