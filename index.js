'use strict';

const readUrl = require('./lib/readurl');
const Q = require('q');
const getCss = require('./lib/getcss');
const readCss = require('./lib/readcss');
const parse = require ('./lib/parse');

class BreakShotCli {
  getMedia (url, error) {
    let readHtml = new readUrl(url);
    let deferred = Q.defer();
    deferred.resolve(readHtml);
    return deferred.promise
    .then( html => {
      return new getCss()
        .getStyles(html);
    }, err => {
      error(err);
    })
    .then( styles => {
      return new readCss().read(styles);
    }, err => {
      error(err);
    })
    .then( styles => {
      return new parse().toJson(styles);
    }, err => {
      error(err);
    })
    .then( sizes => {
      return sizes;
    }, err => {
      error(err);
    })
  }
  onError (error) {
    return error;
  }
}

module.exports = BreakShotCli;
