const fs = require('fs');
const part1 = require('./day9.1');

const findEncryptionWeakness = (preambleLength, fileName) => {
  const input = fs.readFileSync(`./${fileName}`).toString().split('\n').map(x=>parseInt(x));
  const badNum = part1.findBadNumber(preambleLength, fileName);

  for(let i = 0; i < input.length; i++) {
    let sum = input[i]
    for(let j = i + 1; j < input.length; j++) {
      sum += input[j];

      if(sum > badNum) {
        break;
      }
      if(sum === badNum) {
        let max = 0, min = Infinity;
        input.slice(i, j+1).forEach(x => {
          if(x > max) max = x;
          if(x < min) min = x;
        })
        return max + min;
      }
    }
  }
};

const answer = findEncryptionWeakness(25, 'input');
console.log(answer);

module.exports.findEncryptionWeakness = findEncryptionWeakness;