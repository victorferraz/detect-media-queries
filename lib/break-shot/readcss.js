'use strict';

const readUrl = require('./readurl');
const Q = require('q');
const util = require('./util');

class ReadCss {
  read (styles) {
    this.styles = styles;
    this.url = styles.url;
    let promise = styles.css.map(this.readAll.bind(this));
    return Q.all(promise)
      .then((css) => {
        return css;
      });
  }
  readAll (cssUrl) {
    let formatedUrl = util.fixUrl(this.url, cssUrl);
    let readHtml = new readUrl(formatedUrl);
    let deferred = Q.defer();
    deferred.resolve(readHtml);
    return deferred.promise;
  }
}

module.exports = ReadCss;
