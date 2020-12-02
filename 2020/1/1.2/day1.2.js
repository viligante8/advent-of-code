const fs = require('fs');

const calculateTripleSum = () => {
  let input = fs.readFileSync('../input').toString().split('\n').map(i => parseInt(i));

  let result = {};

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const diff = 2020 - (input[i] + input[j]);
      if (diff > 0)
        result[diff] = [input[i], input[j]];
      if (result[input[i]] && result[input[j]]) {
        return diff * input[i] * input[j];
      }
    }
  }
};

module.exports.calculateTripleSum = calculateTripleSum;