'use strict';


class Util {
  static fixUrl (absoluteUrl, peace) {
    let urlFixed = '';
    let hasHttp = peace.indexOf('http://') > -1 || peace.indexOf('https://') > -1;
    urlFixed = peace;
    if (!hasHttp) {
      urlFixed = absoluteUrl.concat(peace);
    }
    return urlFixed;
  }
}

module.exports = Util;

