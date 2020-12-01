const fs = require('fs');

let input = fs.readFileSync('./input').toString().split(',').map(x => parseInt(x));
input[1] = 12;
input[2] = 2;

for (let i = 0; i < input.length;) {
  const opCode = input[i];
  if (opCode === 1) {
    input[input[i + 3]] = input[input[i + 1]] + input[input[i + 2]];
  } else if (opCode === 2) {
    input[input[i + 3]] = input[input[i + 1]] * input[input[i + 2]];
  } else if (opCode === 99) {
    break;
  }

  i += 4;
}

console.log(input[0]);