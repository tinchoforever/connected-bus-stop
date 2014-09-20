'use strict';
var ff = angular.module('fact-followers.controllers');

ff.controller('feedController', function ($scope,$location, $timeout, $http) {
  $('.article-container').masonry({
      itemSelector: '.articulo',
      columnWidth: 500
  });
});
