const answer = require('fs')
                .readFileSync('../input')
                .toString().split('\n')
                .map(i => parseInt(i))
                .reduce((acc, curr) => {
                  acc[2020 - curr] = curr;
                  if(acc[curr]) return acc[curr] * curr;
                  return acc;
                }, {});

console.log(answer);