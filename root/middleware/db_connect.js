module.exports = function() {
  var mongoose = require('mongoose');

  var env_url = {
    "test": "mongodb://localhost/{%= name %}-test",
    "development": "mongodb://localhost/{%= name %}-development"
  };

  var url = env_url[process.env.NODE_ENV || "development"];
  return mongoose.connect(url);
};