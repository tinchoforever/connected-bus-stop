'use strict';
var mp3io = angular.module('mp3-io.controllers');

mp3io.controller('tracksController', function ($scope,$location, $timeout, $http) {

  $scope.saveConcert = function(){
     var url = "/api/v1/profiles/save";
     var concert ={
          video: $scope.video,
          name:$scope.name,
          where: $scope.where,
          when:  $scope.when,
          website: $scope.website,
     };

    $http.post(url,concert).success(function(data) {
           console.log(data);
      });
  };
  $scope.$watch("saveNow", function(e){
    if (e){
      $scope.saveConcert();
    }
  });

  $scope.next = function(){
    $scope.shootVideo = true;
    $scope.concertName = $scope.name + " will be playing @" + $scope.where + " " + $scope.when + " #2nite";

    // 2. Asynchronously load the Upload Widget and Player API code.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  }
});
