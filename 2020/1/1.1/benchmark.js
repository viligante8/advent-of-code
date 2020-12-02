
const now = require('performance-now');
const day11 = require('./day1.1');
const day111 = require('./day1.1.1');
const day112 = require('./day1.1.2');
const day113 = require('./day1.1.3');

const t1 = now();
day11.calculateDoubleSum();
const t2 = now();
console.log(`It took ${t2 - t1} to run day11`);

const t3 = now();
day111.calculateDoubleSum((answer) => {
  const t4 = now();
  console.log(`It took ${t4 - t3} to run day111`);
});

const t5 = now();
day112.calculateDoubleSum((answer) => {
  const t6 = now();
  console.log(`It took ${t6 - t5} to run day112`);
});

const t7 = now();
day113.calculateDoubleSum();
const t8 = now();
console.log(`It took ${t8 - t7} to run day113`);
