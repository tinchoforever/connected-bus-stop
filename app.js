
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  // , user = require('./routes/user')
  // , profiles = require('./routes/API/profiles.js')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);


var server = http.createServer(app)
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


var mainSocket = {};
var io = require('socket.io').listen(server);
if (process.env.NODE_ENV ==='production'){
  //For Heroku
  io.configure(function () {
      io.set("transports", ["xhr-polling"]);
      io.set("polling duration", 10);
      io.set("log level", 1);
  });
}

io.sockets.on('connection', function(socket) {
  mainSocket = socket;
  socket.on('mock-bus',function(data){
    console.log('mock-bus', data);  
  	io.sockets.emit('new-bus', data);
  });
	 	
});


// var SerialPort = require("serialport").SerialPort
// var serialPort = new SerialPort("/dev/cu.usbmodemfd13141", {
//     baudrate: 9600
// });

// var receivedData = '';
// serialPort.on("open", function() {
//   console.log('Arudino online!');
//   serialPort.on('data', function(data) {
      

//       receivedData += data.toString();
//       // console.log(data.toString());
//       if (receivedData.indexOf('E') >= 0 && receivedData .indexOf('B') >= 0) {
//       //  // save the data between 'B' and 'E'
//          sendData = receivedData.substring(receivedData .indexOf('B') + 1, receivedData .indexOf('E'));
//          receivedData = '';
//          console.log('sending', sendData);
//          var id = 0;
//          if (sendData =='E24867484854505252535555683B'){
//           id=60;
//          }
//          else if (sendData =='E24867484852556850535067663B'){
//           id=168;
//          }
//         io.sockets.emit('new-bus', {id:id});
     	   
//        }

//   });

// });
