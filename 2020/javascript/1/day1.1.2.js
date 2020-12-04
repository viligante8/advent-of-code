const calculateDoubleSum = (cb) => {
  let complement = -1;

  var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input')
  });

  lineReader.on('line', line => {
    if (cb && line === complement)
      cb(complement * line);
    else
      complement = 2020 - line;
  });
};

module.exports.calculateDoubleSum = calculateDoubleSum;