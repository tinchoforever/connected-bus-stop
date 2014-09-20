'use strict';
var ff = angular.module('connected-bus.controllers');

ff.controller('remoteController', function ($scope,$location, $timeout, $http) {
	var socket = io();
	$scope.nextBus= function(number){
		console.log(number);
		socket.emit('mock-bus', {id:number});
	}
});
