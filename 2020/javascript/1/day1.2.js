const fs = require('fs');

const calculateTripleSum = () => {
  let input = fs.readFileSync('./input').toString().split('\n').map(i => parseInt(i));

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const remainder = 2020 - (input[i] + input[j]);
      if (remainder > 0 && input.includes(remainder))
        return remainder * input[i] * input[j];
    }
  }
};

console.log(calculateTripleSum());

module.exports.calculateTripleSum = calculateTripleSum;