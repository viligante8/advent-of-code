const fs = require('fs');

const getGroupCustomsUniqueAnswerSums = () => {
  const input = fs.readFileSync('./input').toString().split('\n\n');

  let answer = 0;
  for (let i = 0; i < input.length; i++) {
    const groupAnswers = input[i].split('\n');

    let answers = {};
    for(let j = 0; j < groupAnswers.length; j++) {
      for(let k = 0; k < groupAnswers[j].length; k++) {
        answers[groupAnswers[j][k]] = 1;
      }
    }
    answer += Object.keys(answers).length;
  }
  return answer;
};

console.log(getGroupCustomsUniqueAnswerSums());

module.exports.getGroupCustomsUniqueAnswerSums = getGroupCustomsUniqueAnswerSums;