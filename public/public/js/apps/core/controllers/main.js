'use strict';
var ff = angular.module('fact-followers.controllers', []);

ff.controller('mainController', function ($scope,$location, $timeout, $http) {
    $('.masonry').masonry({
        itemSelector: '.item',
        columnWidth: 250
    });
});
