'use strict';

const mensch = require('mensch');
const _ = require('lodash');

class Parse {
  toJson (styles) {
    let array = [];
    styles.forEach(style => {
      let css = style.body;
      let parsed = mensch.parse(css);
      let media = this.findMedia(parsed.stylesheet.rules);
      if (media.length >0){
        array.push(media);
      }
    });
    array = _.flattenDepth(array, 2);
    array = _.uniq(array);
    return array;
  }
  findMedia (parsed) {
    let sizes = [];
    parsed.forEach( item => {
      let checkMedia = item.type === 'media' && item.name.indexOf('width') > -1;
      if (checkMedia) {
        let width = parseInt(item.name.match( /\d+/g));
        let size = `${width}x768`;
        sizes.push(size);
      }
    });
    return sizes;
  }
}

module.exports = Parse;
