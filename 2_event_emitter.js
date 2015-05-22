//event emitter constructor by requiring that class
var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();
logger.on('error', function(message){
    console.log("ERR: " + message);
});
logger.emit('error', 'spilled milk');
logger.emit('error', 'booohooo');

//when request event is emitted we are going to attach event listener on it
http.createServer(function(request, response) { ... });

//same as above but this is attaching event listener on event emitter
var server = http.createSever();
server.on('request', function(request, response){

});
//close server
server.on('close', function(){

});