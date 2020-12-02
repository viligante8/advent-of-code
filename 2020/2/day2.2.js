const fs = require('fs');

// Sample Input
// 1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc

const checkPasswords = () => {
  const input = fs.readFileSync('./input').toString().split('\n');
  let correctCount = 0;

  for (let i = 0; i < input.length; i++) {
    const policyCountIndex1 = input[i].split(':')[0].split(' ')[0].split('-')[0]-1;
    const policyCountIndex2 = input[i].split(':')[0].split(' ')[0].split('-')[1]-1;
    const policyLetter = input[i].split(':')[0].split(' ')[1];
    const password = input[i].split(':')[1];
    const passwordArr = password.split('');
    passwordArr.shift();

    if(passwordArr[policyCountIndex1] === policyLetter ^ passwordArr[policyCountIndex2] === policyLetter) {
      correctCount++;
    }
  }

  return correctCount;
};

console.log(checkPasswords());

module.exports.checkPasswords;