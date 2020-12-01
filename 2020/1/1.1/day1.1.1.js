const fs = require('fs');

const calculateDoubleSum = () => {
  let input = fs.readFileSync('../input').toString().split('\n').map(i => parseInt(i));

  let result = {};
  
  for(let i = 0; i < input.length; i++) {
    result[2020 - input[i]] = input[i];
    
    if(result[input[i]]) {
      return result[input[i]] * input[i];
    }
  }
  
};

const answer = calculateDoubleSum();

console.log(answer);