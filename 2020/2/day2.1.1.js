const fs = require('fs');

// Sample Input
// 0 // 1-3 a: abcde
// 1 // 1-3 b: cdefg
// 2 // 2-9 c: ccccccccc

const checkPasswords = () => {
  const input = fs.readFileSync('./input').toString().split('\n');
  let correctCount = 0;

  for (let i = 0; i < input.length; i++) {
    let inputParts = input[i].replace(/-/g, ' ').replace(/:/g, '').split(' ');
    for(var letterCount=-1,index=-2; index != -1; letterCount++,index=inputParts[3].indexOf(inputParts[2],index+1) );
    if (letterCount >= inputParts[0] && letterCount <= inputParts[1]){
      correctCount++;
    }
  }

  return correctCount;
};

module.exports.checkPasswords = checkPasswords;