'use strict';
var ff = angular.module('connected-bus.controllers', []);

ff.controller('mainController', function ($scope,$location, $timeout, $http) {
    
    var bus = [];

    
    var recent = [];

    bus.push({
    	id:60,
    	timestamp: Date.parse('2014-09-20 14:22'), 
    	estimation: moment(new Date()).add(Math.floor((Math.random() * 10) + 1), 'minutes'),
    });
    bus.push({
    	id:168,
    	timestamp: Date.parse('2014-09-20 14:23'), 
    	estimation: moment(new Date()).add(Math.floor((Math.random() * 10) + 1), 'minutes'),
    });
    bus.push({
    	id:152,
		timestamp: Date.parse('2014-09-20 14:23'), 
    	estimation: moment(new Date()).add(Math.floor((Math.random() * 10) + 1), 'minutes'), 
    });
    bus.push({
    	id:71,
    	timestamp: Date.parse('2014-09-20 14:23'), 
    	estimation: moment(new Date()).add(Math.floor((Math.random() * 10) + 1), 'minutes'),
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
					b.estimation = $scope.getEstimate(b);
				}
			};	
		})
		
	});

	$scope.getEstimate =function(b){
		
		// if (b.history){
		// b.history.push(b);

		// if (b.history.lenght > 5){
		// 	b.history.shift();
		// }
		

		return moment(new Date()).add(Math.floor((Math.random() * 10) + 1), 'minutes');
		
	}

});
