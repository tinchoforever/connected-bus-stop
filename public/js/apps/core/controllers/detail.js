'use strict';
var ff = angular.module('connected-bus.controllers');

ff.controller('detailController', function ($scope,$routeParams, $timeout, $http) {
	var socket =io();
	$scope.id =$routeParams.id;
});
