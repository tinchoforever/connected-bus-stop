'use strict';
var ff = angular.module('connected-bus.controllers', []);

ff.controller('mainController', function ($scope,$location, $timeout, $http) {
    
    var bus = [];

    
    var recent = [];

    bus.push({
    	id:60,
    	timestamp: Date.parse('2014-09-20 14:22'), 
    	estimation: Date.parse('2014-09-20 15:03'), 
    });
    bus.push({
    	id:168,
    	timestamp: Date.parse('2014-09-20 14:23'), 
    	estimation: Date.parse('2014-09-20 15:04'), 
    });
    bus.push({
    	id:152,
		timestamp: Date.parse('2014-09-20 14:23'), 
    	estimation: Date.parse('2014-09-20 15:04'), 
    });
    bus.push({
    	id:71,
    	timestamp: Date.parse('2014-09-20 14:23'), 
    	estimation: Date.parse('2014-09-20 15:04'), 
    });





  	$scope.bus = bus; 	
	var socket =io();

	socket.on('new-bus',function(data){
		$scope.$apply(function(){
			console.log(data);
			for (var i = 0; i < $scope.bus.length; i++) {
				var b = $scope.bus[i];
				if (b.id == data.id){
					b.timestamp = new Date();
					b.estimation = new Date();
				}
			};	
		})
		
	})
});
