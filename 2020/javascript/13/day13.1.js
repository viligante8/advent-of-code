const fs = require('fs');

const getNextBusNumber = () => {
  const input = fs.readFileSync('./input').toString().split('\n');

  for(let i = 0; i < input.length; i+=2) {
    const earliestTime = input[i];
    const buses = input[i+1].split(',').filter(x => x !== 'x');

    let minWaitTime = Infinity;
    let answer = 0;
    for(let j = 0; j < buses.length; j++) {
      const busWaitTime = buses[j] - earliestTime % buses[j];
      if(busWaitTime < minWaitTime) {
        minWaitTime = busWaitTime;
        answer = buses[j] * minWaitTime;
      }
    }

    return answer;
  }
};

console.log(getNextBusNumber());

module.exports.getNextBusNumber = getNextBusNumber;