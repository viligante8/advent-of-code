const calculateDoubleSum = (cb) => {
  let result = {};

  var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('../input')
  });

  lineReader.on('line', line => {
    result[2020 - line] = line;

    if (result[line]) {
       if(cb) {
        cb(result[line] * line);
       }
    }
  });
};

module.exports.calculateDoubleSum = calculateDoubleSum;