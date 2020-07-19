if(process.env.NODE_ENV === 'production'){
  //on heroku
  module.exports = require('./prod');
}else{
  module.exports = require('./dev');
}
