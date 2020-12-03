const day211 = require('./day2.1.1');
const day21 = require('./day2.1');
const now = require('performance-now');

const INPUT_STR = "The quick brown fox jumps over the lazy dog";

t1 = now();
(INPUT_STR.match(/o/g) || []).length
t2 = now();
console.log(`1.\t${t2 - t1}`);

t1 = now();
INPUT_STR.split("o").length - 1
t2 = now();
console.log(`2.\t${t2 - t1}`);

t1 = now();
var stringsearch = "o", str = INPUT_STR;
for (var count = -1, index = -2; index != -1; count++, index = str.indexOf(stringsearch, index + 1));
t2 = now();
console.log(`3.\t${t2 - t1}`);

t1 = now();
var stringsearch = "o", str = INPUT_STR;
for (var i = count = 0; i < str.length; count += +(stringsearch === str[i++]));
t2 = now();
console.log(`4.\t${t2 - t1}`);

t1 = now();
var str = INPUT_STR
str.split('').map(function (e, i) { if (e === 'o') return i; })
  .filter(Boolean);
[9, 10].length
t2 = now();
console.log(`5.\t${t2 - t1}`);

t1 = now();
var str = INPUT_STR;
str.length - str.replace(/o/g, '').length
t2 = now();
console.log(`6.\t${t2 - t1}`);

t1 = now();
str2buffer = function (s) {
  var bu = new ArrayBuffer(s.length), aUint8 = new Uint8Array(bu);
  for (var i = 0; i < bu.byteLength; aUint8[i] = s.charCodeAt(i), i++); return aUint8;
};
var bstr = str2buffer(INPUT_STR)
  , schar = 'o'.charCodeAt()
  , cnt = 0;
for (var i = 0; i < bstr.byteLength; schar !== bstr[i++] || cnt++);
t2 = now();
console.log(`7.\t${t2 - t1}`);

t1 = now();
var ubstr = INPUT_STR.split('').map(function (e, i) { return e.charCodeAt(); }), schar = 'o'.charCodeAt(), cnt = 0;
for (var i = 0; i < ubstr.length; schar !== ubstr[i++] || cnt++);
t2 = now();
console.log(`8.\t${t2 - t1}`);

t1 = now();
var str = INPUT_STR, schar = 'o';
str.split('').reduce(
  function (p, c, i, a) { if (c === schar || p === schar) { return isNaN(parseInt(p)) ? 1 : +p + 1; } return p; }
)
t2 = now();
console.log(`9.\t${t2 - t1}`);

t1 = now();
var str = INPUT_STR, schar = 'o', hist = {};
for (si in str) {
  hist[str[si]] = hist[str[si]] ? 1 + hist[str[si]] : 1;
}
t2 = now();
console.log(`10.\t${t2 - t1}`);

t1 = now();
var str = INPUT_STR;
var count = [...str].filter(l => l === 'o').length;
t2 = now();
console.log(`11.\t${t2 - t1}`);

t1 = now();
day211.checkPasswords();
t2 = now();
console.log(`2.1.1:\t${t2 - t1}`);

t1 = now();
day21.checkPasswords();
t2 = now();
console.log(`2.1:\t${t2 - t1}`);

t1 = now();
var count = 0;
for(var i = 0; i < INPUT_STR.length; i++) {
  if(INPUT_STR[i] === 'o') count++;
}
t2 = now();
console.log(`Brian:\t${t2 - t1}`);