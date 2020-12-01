const fs = require('fs');

const input = fs.readFileSync('./input').toString().split('\n').map(i => parseInt(i));

let sums = {};

for(let i = 0; i < input.length; i++) {
  for(let j = 1; j < input.length; j++) {
    sums[input[i] + input[j]] = [input[i], input[j]];
    if(input[i] + input[j] === 2020) {
      console.log(`${input[i]} + ${input[j]} = ${input[i] + input[j]}`);
    }
  }
}

console.log(sums[2020][0] * sums[2020][1]);