const fs = require('fs');
const requiredFields = [ 'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid' ];//, 'cid' ];

const validateCreds = () => {
  const input = fs.readFileSync('./input').toString().split('\n');

  let creds = '';
  let validCreds = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '') {
      const credFields = creds.split(' ').filter(Boolean).map(d => d.split(':')[0]);
      let diff = requiredFields.filter(x => !credFields.includes(x));
      validCreds += diff.length === 0 ? 1 : 0;
      creds = '';
    } else {
      creds += input[i] + ' ';
    }
  }

  return validCreds;
};

console.log(validateCreds());

module.exports.validateCreds = validateCreds;