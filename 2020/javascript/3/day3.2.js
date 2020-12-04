const fs = require('fs');

const countTreesInPath = () => {
  const input = fs.readFileSync('./input').toString().split('\n').map(line => line.split(''));

  let treeCount1 = 0;
  let treeCount3 = 0;
  let treeCount5 = 0;
  let treeCount7 = 0;
  let treeCount2 = 0;

  for (let i = 1; i < input.length; i++) {
    treeCount1 += input[i * 1][(i * 1) % input[i].length] === '#' ? 1 : 0;
    treeCount3 += input[i * 1][(i * 3) % input[i].length] === '#' ? 1 : 0;
    treeCount5 += input[i * 1][(i * 5) % input[i].length] === '#' ? 1 : 0;
    treeCount7 += input[i * 1][(i * 7) % input[i].length] === '#' ? 1 : 0;

    if(i * 2 < input.length)
      treeCount2 += input[i * 2][(i * 1) % input[i].length] === '#' ? 1 : 0;
  }

  return treeCount1 * treeCount3 * treeCount5 * treeCount7 * treeCount2;
};

console.log(countTreesInPath());

module.exports.countTreesInPath = countTreesInPath;