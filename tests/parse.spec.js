'use strict';
import test from 'ava';
const cssObject = require('./mock/mockcss.json');
const Parse =  require('../lib/break-shot/parse');
const getcss = new Parse().toJson(cssObject);

test('number of sizes', t => {
  t.is(getcss.length, 5);
});

test('is Array', t => {
  t.is(typeof getcss, 'object');
});

test('all items is number', t => {
  let isNumber = true;
  getcss.forEach(i => {
    if (Number.isInteger(i)) {
      isNumber = false;
    }
  });
  console.log('isnum', isNumber);
  t.is(isNumber, true);
});
