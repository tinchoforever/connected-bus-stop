'use strict';
var ff = angular.module('connected-bus.controllers', []);

ff.controller('mainController', function ($scope,$location, $timeout, $http) {
    
    var bus = [];

	var historyMock60 = [];
	for (var i = 4; i > 0; i--) {
		historyMock60.push(moment(new Date()).add(-i, 'minutes'));
	};  
	var historyMock168 = [];
	for (var i = 4; i > 0; i--) {
		historyMock168.push(moment(new Date()).add(-i*i, 'minutes'));
	};  
    var recent = [];

    bus.push({
    	id:60,
    	timestamp: moment(new Date()).add(-Math.floor((Math.random() * 10) + 1), 'minutes'),
    	estimation: moment(new Date()).add(Math.floor((Math.random() * 10) + 1), 'minutes'),
    	history:historyMock60
    });
    bus.push({
    	id:168,
    	timestamp: moment(new Date()).add(-Math.floor((Math.random() * 10) + 1), 'minutes'),
    	estimation: moment(new Date()).add(Math.floor((Math.random() * 10) + 1), 'minutes'),
    	history:historyMock168
    });
    bus.push({
    	id:152,
    	timestamp: moment(new Date()).add(-Math.floor((Math.random() * 10) + 1), 'minutes'),
    	estimation: moment(new Date()).add(Math.floor((Math.random() * 10) + 1), 'minutes'), 
    });
    bus.push({
    	id:71,
    	timestamp: moment(new Date()).add(-Math.floor((Math.random() * 10) + 1), 'minutes'),
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
		
		if (!b.history){
			b.history=[]
		}
		b.history.push(b.timestamp);
		
		if (b.history.lenght > 5){
			b.history.shift();
		}
		var results = [];
		
		for (var i = b.history.length-1; i > 0 ; i--) {
			
			if (i-1 >= 0){
				var first = moment(b.history[i]);
				var second =moment(b.history[i-1]);
				var r = first.diff(second, 'minutes', true);
				console.log(r);
				results.push(r);
			}
		};
		var average = 0;

		for (var i = 0; i < results.length; i++) {
			average += results[i];
		}
		if (results.length > 0 ){

			average = average /results.length;
			console.log('average',average);
		}
		else {
			result = moment(new Date()).add(Math.floor((Math.random() * 10) + 1), 'minutes');
			console.log('result',result);
		}

		var result = moment(new Date()).add(average, 'minutes');

		return result;
		
	}

});
