'use strict';

const cheerio = require('cheerio');
const _ = require('lodash');

class GetCss {
  getStyles (data) {
    let css = data.body;
    let $ = cheerio.load(css);
    let links = $('link[rel=stylesheet]');
    let styles = {};
    styles.css = [];
    styles.url = data.url;
    styles.css = _.map(links, item => {
      return item.attribs.href;
    });
    return styles;
  }
}

module.exports = GetCss;
