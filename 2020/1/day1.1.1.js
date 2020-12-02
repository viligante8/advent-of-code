const calculateDoubleSum = (cb) => {
  require('fs')
    .readFileSync('./input')
    .toString().split('\n')
    .map(i => parseInt(i))
    .reduce((acc, curr) => {
      acc[2020 - curr] = curr;
      if (acc[curr]) cb(acc[curr] * curr);
      return acc;
    }, {});
};

module.exports.calculateDoubleSum = calculateDoubleSum;
