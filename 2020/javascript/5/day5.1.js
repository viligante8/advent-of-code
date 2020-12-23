const fs = require('fs');

const getValue = (inputString, min, max, start, stop) => {
  for (let j = start; j < stop; j++) {
    if (inputString[j] === 'R' || inputString[j] === 'B') {
      const halfway = ((max - (min - 1)) / 2) + min;
      min = halfway;
    } else {
      const halfway = ((max - (min - 1)) / 2) + min - 1;
      max = halfway;
    }
  }

  return (inputString[stop] === 'R' || inputString[stop] === 'B' ? max : min) - 1;
};

const getHighestSeatId = () => {
  const input = fs.readFileSync('./input').toString().split('\n');

  let highestSeatId = -1;

  for (let i = 0; i < input.length; i++) {
    const row = getValue(input[i], 1, 128, 0, 6);
    const column = getValue(input[i], 1, 8, 7, 9);

    const seatId = row * 8 + column;

    if(seatId >= highestSeatId) highestSeatId = seatId;
  }

  return highestSeatId;
};

console.log(getHighestSeatId());

module.exports.getHighestSeatId = getHighestSeatId;