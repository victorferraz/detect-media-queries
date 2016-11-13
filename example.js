const get = require('./index.js');
const result = new get().getMedia('http://globo.com').then(res => {
  console.log(res);
});
