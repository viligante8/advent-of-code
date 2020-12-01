let result = {};

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('../test')
});

lineReader.on('line', line => {
  result[2020 - line] = line;
});

lineReader.on('close', () => {
  console.log(result);
  for (const [key, value] of Object.entries(result)) {
    if (result[value]) {
      console.log(key * value);
    }
  }
});