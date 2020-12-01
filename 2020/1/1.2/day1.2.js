const fs = require('fs');

let input = fs.readFileSync('../input').toString().split('\n').map(i => parseInt(i));

let result = {};

for(let i = 0; i < input.length; i++) {
  for(let j = i + 1; j < input.length; j++) {
    const diff = 2020 - (input[i] + input[j]);
    if(diff > 0)
      result[diff] = [input[i], input[j]];
  }
}

for (const [key, value] of Object.entries(result)) {
  if(result[value[0]] && result[value[1]]) {
    console.log(key * value[0] * value[1]);
    break;
  }
}