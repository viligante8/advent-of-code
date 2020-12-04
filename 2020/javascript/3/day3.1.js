const fs = require('fs');

const countTreesInPath = () => {
  const input = fs.readFileSync('./input').toString().split('\n').map(line => line.split(''));
  
  let treeCount = 0;

  for(let i = 1; i < input.length; i++) {
    treeCount += input[i][(i * 3) % input[i].length] === '#' ? 1 : 0;
  }

  return treeCount;
};

console.log(countTreesInPath());

module.exports.countTreesInPath = countTreesInPath;