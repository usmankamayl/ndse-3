const readline = require('readline');
const fs = require('fs');
const input = readline.createInterface(process.stdin);

function randomInteger() {
  return Math.round(Math.random())+1;
}

let res = '';
console.log('Игра началась, загадано число 1 или 2. Любое другое число, символ или буква приравнивается к проигрышу. Угадайте:');
input.on('line', (n) => {
  const oneOrTwo = randomInteger();
  if (n == oneOrTwo) {
    res =  `компьютер загадал число: ${oneOrTwo}, вы написали: ${n} - вы победили.`;
    console.log(res);
  } else {
    res = `компьютер загадал число: ${oneOrTwo}, вы написали: ${n}: - вы проиграли.`; 
    console.log(res)
  }
  fs.appendFile('hw-3/log.txt', res, () => {
    fs.readFile('hw-3/log.txt', 'utf-8', (err, data) => {
      const victory = 'победили';
      const fiasco = 'проиграли';
      function findSub(data, charToCount){
        return data.split(charToCount).length - 1;
    }
    let countOfVictory = findSub(data, victory);
    let countOfFiasco = findSub(data, fiasco);
    let logOfPlay = `количество сыгранных игр: ${countOfVictory + countOfFiasco}.\n	Счет: ${countOfVictory} - ${countOfFiasco}`;
    console.log(logOfPlay);
    }) 
  });
})