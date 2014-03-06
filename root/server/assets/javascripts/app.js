var meanApp  = angular.module('meanApp', [
  'meanRoutes',
  'meanControllers',
  'meanServices'
]);
var meanRoutes      = angular.module('meanRoutes'     , ['ngRoute'   ]);
var meanControllers = angular.module('meanControllers', [            ]);
var meanServices    = angular.module('meanServices'   , ['ngResource']);
