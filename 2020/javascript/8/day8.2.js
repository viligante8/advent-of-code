const fs = require('fs');

const recFunc = (thing, color) => {
  if(!thing[color] || Object.keys(thing[color]).length === 0) return 1;

  recFunc()
};

const findHowManyPlacesMyBagCanBe = () => {
  const input = fs.readFileSync('./test').toString().split('\n');

  let thing = {};

  for (let i = 0; i < input.length; i++) {
    let mainString = input[i];
    const parts = mainString.split(' bags contain ');
    thing[parts[0]] = parts[1].split(', ').reduce((acc, curr) => {
      const parts = curr.match(/(^\d )*(.+)( bag[s.]*$)/); // number, color, bag(s.)
      if(parts[2] !== 'no other') acc[parts[2]] = parseInt(parts[1]);
      return acc;
    }, {});
  }

  // let sum = eval(Object.entries(thing['shiny gold']).join('+'));

  console.log(thing);

  let sum = 0;
  for(const [parentColor, childContents] of Object.entries(thing['shiny gold'])) {
    chil
  }

  // let validBags = {};

  // while (Object.entries(thing).length > 0) {
  //   let anythingChanged = false;
  //   for (const [key, value] of Object.entries(thing)) {
  //     for (let i = 0; i < value.length; i++) {
  //       if (value[i] === 'shiny gold' || validBags[value[i]]) {
  //         validBags[key] = 1;
  //         delete thing[key];
  //         anythingChanged = true;
  //       } else if (value[i] === 'no other') {
  //         delete thing[key];
  //         anythingChanged = true;
  //       }
  //     }
  //   }
  //   if(!anythingChanged) break;
  // }

  // return Object.keys(validBags).length;
};

console.log(findHowManyPlacesMyBagCanBe());

module.exports.findHowManyPlacesMyBagCanBe = findHowManyPlacesMyBagCanBe;