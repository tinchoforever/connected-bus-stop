// 3. Define global variables for the widget and the player.
//    The function loads the widget after the JavaScript code
//    has downloaded and defines event handlers for callback
//    notifications related to the widget.
var widget;
var player;

function onYouTubeIframeAPIReady() {
    widget = new YT.UploadWidget('widget', {
        width: 500,
        events: {
            'onUploadSuccess': onUploadSuccess,
                'onProcessingComplete': onProcessingComplete,
                'onApiReady': onApiReady
        }
    });
}

// 4. This function is called when a video has been successfully uploaded.
function onUploadSuccess(event) {

    var scope = angular.element(document.getElementById('app')).scope();
    scope.$apply(function($scope){
        $scope.video = event.data.videoId;
        $scope.uploaded = true;
        $scope.shootVideo = false;
        $scope.saveNow= true;
    });

}

// 5. This function is called when a video has been successfully
//    processed.
function onProcessingComplete(event) {
    var $scope = angular.element(document.getElementById('app')).scope();
    $scope.$apply(function(){
        $scope.ready = true;
        $scope.shootVideo = false;

    });
    player = new YT.Player('player', {
        height: 390,
        width: 640,
        videoId: event.data.videoId,
        events: {}
    });
}

function onApiReady(event) {
    console.log("onApiReady is fired");
    var $scope = angular.element(document.getElementById('app')).scope();
    widget.setVideoTitle($scope.concertName);
}

