'use strict';

const request = require('request');
const Q = require('q');

class ReadUrl {
  constructor (url) {
    return this.read(url).then( data => {
      return data;
    });
  }
  read (url) {
    var deferred = Q.defer();
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        let obj = {};
        obj.body = body.toString();
        obj.url = url;
        deferred.resolve(obj);
      } else {
        console.log('urlll', url, error);
        deferred.reject(new Error('Can\'t do it'));
      }
    });
    return deferred.promise;
  }
}

module.exports = ReadUrl;

