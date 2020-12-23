const fs = require('fs');

const getIncrAmt = (input) => {
  const sign = input.split('')[0];
  const val = input.substring(1);
  const retVal = sign === '-'  ? -1 * parseInt(val) : parseInt(val);
  return retVal;
}

const findLoop = () => {
  const input = fs.readFileSync('./input').toString().split('\n');

  let acc = 0;
  let is = {};

  for(let i = 0;;) {    
    const command = input[i].split(' ');
    switch(command[0]) {
      case 'nop':
        i++;
        break;
      case 'acc':
        acc += getIncrAmt(command[1]);
        i++;
        break;
      case 'jmp':
        i += getIncrAmt(command[1]);
        break;
    }
    if(is[i]) return acc;
    is[i] = 1;
  }
};

console.log(findLoop());

module.exports.findLoop = findLoop;