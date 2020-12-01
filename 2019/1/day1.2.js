
const fs = require('fs');

const input = fs.readFileSync('./input').toString().split('\n').map(x => parseInt(x));

const calculateFuelCost = (mass) => {
  if(mass <= 0) {
    return 0;
  }

  return calculateFuelCost(Math.floor(mass/3.0) - 2) + mass;
};

let sum = 0;

for(let i = 0; i < input.length; i++) {
  const num = input[i];

  sum += (calculateFuelCost(num) - num);
}

console.log(sum);