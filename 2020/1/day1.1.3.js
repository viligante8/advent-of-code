const fs = require('fs');
const TARGET_VALUE = 2020;

const calculateDoubleSum = () => {
  let input = fs.readFileSync('./input').toString().split('\n').map(i => parseInt(i)).sort((a,b) => a - b);

  let front = 0;
  let back = input.length - 1;

  do {
    const sum = input[front] + input[back];
    if(sum === TARGET_VALUE) {
       return input[front] * input[back];
    }
    if(sum < TARGET_VALUE) {
      front++;
    } else if(sum > TARGET_VALUE) {
      back--;
    }
  } while(front < back)
};

module.exports.calculateDoubleSum = calculateDoubleSum;