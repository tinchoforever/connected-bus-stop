'use strict';

angular.module('connected-bus', ['connected-bus.controllers','angularMoment'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/views/main.html',
    controller: 'mainController'
  })
  .when('/remote', {
    templateUrl: '/views/remote.html',
    controller: 'remoteController'
  })
  .when('/detail', {
    templateUrl: '/views/detail.html',
    controller: 'detailController'
  })
  .otherwise({
    redirectTo: '/'
  });
}).run(function ($rootScope) {
    moment().lang('es');
});
