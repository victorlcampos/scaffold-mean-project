module.exports = function(app) {
  var indexController = app.server.controllers.index;
  app.get('/', indexController.index);
};