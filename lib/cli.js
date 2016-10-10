'use strict';

const breakShot = require('./break-shot');
exports.parse = require('minimist');
exports.exitCode = 0;

exports.run = function(args) {
  exports.exitCode = 0;
  console.log(args);
  breakShot.getMedia(args, onResult);
};

function onResult (err, result) {
  if (err) {
    exports.exitCode = 1;
    console.error(err.toString());
  }
  if (result) {

  }
}
