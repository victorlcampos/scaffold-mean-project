module.exports = function(app) {
  var IndexController = {
    index: function(req, res) {
      res.sendfile('public/views/application.html');
    }
  };

  return IndexController;
}