const fs = require('fs');

const findHowManyPlacesMyBagCanBe = () => {
  const input = fs.readFileSync('./input').toString().split('\n');

  let thing = {};

  for (let i = 0; i < input.length; i++) {
    let mainString = input[i];
    const parts = mainString.split(' bags contain ');
    const regex = /(^\d )*(.+)( bag[s.]*$)/; // number, color, bag(s.), take color only
    thing[parts[0]] = parts[1].split(', ').map(x => x.replace(regex, '$2'));
  }

  console.log(thing);

  let validBags = {};

  while (Object.entries(thing).length > 0) {
    let anythingChanged = false;
    for (const [key, value] of Object.entries(thing)) {
      for (let i = 0; i < value.length; i++) {
        if (value[i] === 'shiny gold' || validBags[value[i]]) {
          validBags[key] = 1;
          delete thing[key];
          anythingChanged = true;
        } else if (value[i] === 'no other') {
          delete thing[key];
          anythingChanged = true;
        }
      }
    }
    if(!anythingChanged) break;
  }

  return Object.keys(validBags).length;
};

console.log(findHowManyPlacesMyBagCanBe());

module.exports.findHowManyPlacesMyBagCanBe = findHowManyPlacesMyBagCanBe;