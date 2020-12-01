const fs = require('fs');

const input = fs.readFileSync('./input').toString().split('\n').map(i => parseInt(i));

let sums = {};

for (let i = 0; i < input.length; i++) {
  for (let j = 1; j < input.length; j++) {
    for (let k = 2; k < input.length; k++) {
      sums[input[i] + input[j] + input[k]] = [input[i], input[j], input[k]];
      if (input[i] + input[j] + input[k] === 2020) {
        console.log(`${input[i]} + ${input[j]} + ${input[k]} = ${input[i] + input[j] + input[k]}`);
      }
    }
  }
}

console.log(sums[2020][0] * sums[2020][1] * sums[2020][2]);