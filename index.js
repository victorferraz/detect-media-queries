'use strict';

const readUrl = require('./readurl');
const Q = require('q');
const getCss = require('./getcss');
const readCss = require('./readcss');
const parse = require ('./parse');
var fs = require('fs');

class BreakShotCli {
  getMedia (args, cb) {
    let readHtml = new readUrl('http://rccomunicacao.com.br/');
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
