'use strict';

angular.module('fact-followers', ['fact-followers.controllers'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/views/main.html',
    controller: 'mainController'
  })
  .when('/feed', {
    templateUrl: '/views/feed.html',
    controller: 'feedController'
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
