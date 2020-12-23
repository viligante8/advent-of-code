const fs = require('fs');

const joltDifferenceFinder = (fileName) => {
  let input = fs.readFileSync(`./${fileName}`).toString().split('\n').map(x => parseInt(x)).sort((a, b) => a - b);
  input.push(input[input.length - 1] + 3);
  let count = 0;
  let perms = 1;

  for (let i = 1; i < input.length; i++) {
    if (input[i] - input[i - 1] === 1) {
      count++; 
      
      continue;
    }
    if (count === 3) perms *= 7;
    else if (count === 2) perms *= 4;
    else if (count === 1) perms *= 2;
    count = -1;
  }

  return perms;
};

const answer = joltDifferenceFinder('input');
console.log(answer);

module.exports.joltDifferenceFinder = joltDifferenceFinder;