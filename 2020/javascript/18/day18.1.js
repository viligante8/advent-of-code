const fs = require('fs');

const calculateMathProblems = (input) => {
  for (let i = 0; i < input.length; i++) {
    const equation = input[i];
    let result = input[i][0];
    for (let j = 1; j < equation.length; j++) {
      equation.indexOf('(');
    }
  }
};

const input = fs.readFileSync('./input').toString().split('\n');
console.log(calculateMathProblems(input));

module.exports.calculateMathProblems = calculateMathProblems;