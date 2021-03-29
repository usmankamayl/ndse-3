const fs = require('fs');
const yargs = require("yargs/yargs");
const { hideBin } = require('yargs/helpers');
const { argv } = require("yargs");
 const args = yargs(hideBin(process.argv)).argv;

let randomInteger =  function (min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}



let oneOrTo = randomInteger(1, 2);

let history = '';


  if (!args.log) {
    console.log("Предлагаю тебе сыграть игру 'орел или решка'. Компьютер загадывает случайно число: 1 или 2. Напиши свой вариант ответа в консоли через команду --log и далее через пробел 1 или 2");
  } else if (oneOrTo == args.log) {
    history =  `компьютер загадал число: ${oneOrTo}, вы сказали: ${args.log}. Вы победили`;
    console.log(history);
    } else {
      history = `компьютер загадал число: ${oneOrTo}, вы сказали: ${args.log}. Вы проиграли`; 
      console.log(history)
    };
  
fs.appendFile('hw-3/log.txt', history, () => {
    console.log('Ведется история игры');
});
