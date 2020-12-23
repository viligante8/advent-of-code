const { group, Console } = require('console');
const fs = require('fs');

const getGroupCustomsUniqueAnswerSums = () => {
  const input = fs.readFileSync('./input').toString().split('\n\n');

  let answer = 0;
  for (let i = 0; i < input.length; i++) {
    const groupAnswers = input[i].split('\n');

    let letterOccurrences = {};
    for(let j = 0; j < groupAnswers.length; j++) {
      for(let k = 0; k < groupAnswers[j].length; k++) {
        if(letterOccurrences[groupAnswers[j][k]]) 
          letterOccurrences[groupAnswers[j][k]]++;
        else 
          letterOccurrences[groupAnswers[j][k]] = 1;
      }
    }

    for(let letterOccurrence of Object.values(letterOccurrences)) {
      if(letterOccurrence === groupAnswers.length)
        answer++;
    }
  }
  return answer;
};

console.log(getGroupCustomsUniqueAnswerSums());

module.exports.getGroupCustomsUniqueAnswerSums = getGroupCustomsUniqueAnswerSums;