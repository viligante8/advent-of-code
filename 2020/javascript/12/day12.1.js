const fs = require('fs');

let degreeRotation = 0;
let horizontal = '0';
let vertical = '0';

const getShipDirection = () => {
  const baseDegree = degreeRotation % 360;
  console.log(baseDegree);
};

const turnShip = (direction, degree) => {
  const posNeg = direction === 'L' ? -1 : 1;
  degreeRotation += degree * posNeg;
};

const moveShip = (dir, amt) => {
  switch (dir) {
    case 'N':
      vertical += amt;
      break;
    case 'S':
      vertical -= amt;
      break;
    case 'E':
      horizontal += amt;
      break;
    case 'W':
      horizontal -= amt;
      break;
  }

};

const joltDifferenceFinder = (fileName) => {
  const input = fs.readFileSync(`./${fileName}`).toString().split('\n');

  for (let i = 0; i < input.length - 1; i++) {
    var cmd = input[i][0];
    var amt = parseInt(input[i].substring(1));

    console.log(cmd);
    console.log(amt);

    if(cmd === 'L' || cmd === 'R')
      turnShip(cmd, amt);
    else if (cmd === 'F')
      moveShip(getShipDirection(), amt);
    else
      moveShip(cmd, amt);
  }
};

const answer = joltDifferenceFinder('test');
console.log(answer);

module.exports.joltDifferenceFinder = joltDifferenceFinder;