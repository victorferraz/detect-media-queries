'use strict';
import test from 'ava';

const htmlObject = require('./mock/mockhtml.json');
const getCss = require('../lib/break-shot/getcss');
const html = new getCss().getStyles(htmlObject);
const _ = require('lodash');

test('has css property', t => {
  t.is(html.hasOwnProperty('css'), true);
});

test('has url property', t => {
  t.is(html.hasOwnProperty('url'), true);
});

test('is Array', t => {
  t.is(typeof html.css, 'object');
});

test('has valid css', t => {
  let isValidCss = true;
  html.css.forEach(i => {
    let cssExtension = _.last(i.split('.'));
    if (cssExtension !== 'css') {
      isValidCss = false;
    }
  });
  t.is(isValidCss, true);
});
