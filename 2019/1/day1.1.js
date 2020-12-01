const fs = require('fs');

const input = fs.readFileSync('./input').toString().split('\n').map(x => parseInt(x));

let sum = 0;

for(let i = 0; i < input.length; i++) {
  const num = input[i];

  sum += Math.floor(num/3.0) - 2;
}

console.log(sum);

// take its mass, divide by three, round down, and subtract 2.

