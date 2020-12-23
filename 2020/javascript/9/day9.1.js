const fs = require('fs');

const findBadNumber = (preambleLength, fileName) => {
  const input = fs.readFileSync(`./${fileName}`).toString().split('\n');

  for (let i = preambleLength; i < input.length; i++) {
    const numToCheck = parseInt(input[i]);
    const preamble = input.slice(i - preambleLength, i).map(x => parseInt(x));
    
    let numCorrect = false;
    for(let j = 0; j < preambleLength; j++) {
      if(preamble.map((x,i) => i === j ? 0 : x).includes(numToCheck - preamble[j]))
        numCorrect = true;
    }
    if(!numCorrect) return numToCheck;
  }
};

module.exports.findBadNumber = findBadNumber;