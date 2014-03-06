module.exports = function() {
  var mongoose = require('mongoose');

  var env_url = {
    "test": "mongodb://localhost/test",
    "development": "mongodb://localhost/development"
  };

  var url = env_url[process.env.NODE_ENV || "development"];
  return mongoose.connect(url);
};