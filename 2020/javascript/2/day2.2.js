const fs = require('fs');

// Sample Input
// 1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc

const checkPasswords = () => {
  const input = fs.readFileSync('./input').toString().split('\n');
  let correctCount = 0;

  for (let i = 0; i < input.length; i++) {
    let inputParts = input[i].replace(/-/g, ' ').replace(/:/g, '').split(' ');
    if(inputParts[3][inputParts[0] - 1] === inputParts[2] ^ inputParts[3][inputParts[1] - 1] === inputParts[2]) {
      correctCount++;
    }
  }

  return correctCount;
};

console.log(checkPasswords());

module.exports.checkPasswords;