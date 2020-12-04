const fs = require('fs');
const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];//, 'cid' ];

const validateField = (field) => {
  let valid;
  switch (field[0]) {
    case 'byr':
      valid = field[1].match(/^(19[2-8][0-9]|199[0-9]|200[0-2])$/gi);
      break;
    case 'iyr':
      valid = field[1].match(/^(201[0-9]|2020)$/gi);
      break;
    case 'eyr':
      valid = field[1].match(/^(202[0-9]|2030)$/gi);
      break;
    case 'hgt':
      valid = field[1].match(/^(1[5-8][0-9]|19[0-3])cm$|^(59|6[0-9]|7[0-6])in$/gi);
      break;
    case 'hcl':
      valid = field[1].match(/^#[0-9a-f]{6}$/gi);
      break;
    case 'ecl':
      valid = field[1].match(/^amb$|^blu$|^brn$|^gry$|^grn$|^hzl$|^oth$/gi);
      break;
    case 'pid':
      valid = field[1].match(/^\d{9}$/gi);
      break;
  }
  return valid;
}

const validateCreds = () => {
  const input = fs.readFileSync('./input').toString().split('\n');

  let creds = '';
  let validCreds = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '') {
      const credInfo = creds.split(' ').filter(Boolean).map(d => d.split(':'));
      validCreds += credInfo
                      .map(validateField)
                      .filter(Boolean)
                      .length >= 7 
                      ? 1 : 0;
      creds = '';
    } else {
      creds += input[i] + ' ';
    }
  }

  return validCreds;
};

console.log(validateCreds());

module.exports.validateCreds = validateCreds;