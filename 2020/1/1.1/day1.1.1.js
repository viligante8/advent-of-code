const fs = require('fs');

let input = fs.readFileSync('../input').toString().split('\n').map(i => parseInt(i));

let result = {};

for(let i = 0; i < input.length; i++) {
  result[2020 - input[i]] = input[i];
}

for (const [key, value] of Object.entries(result)) {
  if(result[value]) {
    console.log(key * value);
  }
}