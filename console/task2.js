#!/usr/bin/env node
const readline = require('readline');

const input = readline.createInterface(process.stdin);
console.log('Добро пожаловать в игру "Угадай число". Введите числа от 1 до 100');
input.on('line', (n) => {
  if (n < 63 && n < 100 && n > 0) {
    console.log('Введенное вами число меньше искомого');
  } else if (n > 63 && n < 100 && n > 0) {
    console.log('Введенное вами число больше искомого');
  } else if (n < 0 || n > 100) {
    console.log('Число не может быть меньше 0 или больше 100. Введите число от 1 до 100');
  } else  console.log('Поздравляю! Вы угадали!!!');
})
    
