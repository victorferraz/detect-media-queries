'use strict';

const readUrl = require('./lib/readurl');
const Q = require('q');
const getCss = require('./lib/getcss');
const readCss = require('./lib/readcss');
const parse = require ('./lib/parse');

class BreakShotCli {
  getMedia (url, cb) {
    let readHtml = new readUrl(url);
    let deferred = Q.defer();
    deferred.resolve(readHtml);
    deferred.promise
    .then( html => {
      return new getCss()
        .getStyles(html);
    }, this.onError)
    .then( styles => {
      return new readCss().read(styles);
    }, this.onError)
    .then( styles => {
      return new parse().toJson(styles);
    }, this.onError)
    .then( sizes => {
      cb(sizes);
    }, this.onError);
  }
  onError (error) {
    console.log(error);
  }
}

module.exports = new BreakShotCli();
