const calculateDoubleSum = (cb) => {
  const input = require('fs').readFileSync('./input').toString().split('\n').map(i => parseInt(i));
    
  for(let i = 0; i < input.length; i++) {
    const remainder = 2020 - input[i];
    if(input.includes(remainder)) {
      cb(remainder * input[i]);
      break;
    }
  }
};

// calculateDoubleSum((a) => console.log(a));
module.exports.calculateDoubleSum = calculateDoubleSum;
