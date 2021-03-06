const { exception } = require('console');
const fs = require('fs');

const joltDifferenceFinder = (fileName) => {
  const input = fs.readFileSync(`./${fileName}`).toString().split('\n').map(x => parseInt(x)).sort((a, b) => a - b);

  let ones = 1, threes = 1;
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i + 1] - input[i] === 1) ones++;
    else threes++;
  }

  return ones * threes;
};

const answer = joltDifferenceFinder('input');
console.log(answer);

module.exports.joltDifferenceFinder = joltDifferenceFinder;
