if (process.env.NODE_ENV === "production") {
  //on heroku
  module.exports = require("./dev");
} else {
  module.exports = require("./dev");
}
