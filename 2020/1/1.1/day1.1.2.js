let result = {};

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('../input')
});

lineReader.on('line', line => {
  result[2020 - line] = line;

  if(result[line]) {
    console.log(result[line] * line);
  }
});