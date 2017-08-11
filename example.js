const get = require('./index.js');
const result = new get().getMedia('http://rccomunicacao.com.br/').then(res => {
  console.log(res);
});
