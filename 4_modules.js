//brought in modules from other libraries such as "fs" or "http"
//how does require find these libraries and return them

//custom_hello.js
var hello = function() {
    console.log("hello!");
}
module.exports = hello;

// app.js
var hello = require('./custom_hello');
hello();
gb.goodbye();

//custom_goodbye.js
exports.goodbye = function() {
    console.log("bye!");
}
require('.custom_goodbye').goodbye();


//my_module.js
var foo = function() { ... }
var bar = function() { ... }
exports.foo = foo
exports.bar = bar

var myMod = require('./my_module');
myMod.foo();
myMod.bar();

//bar is now private because we didn't do exports.bar

//making http requests
var http = require('http');

var message = "Hello"
var options = {
    host: 'localhost'
    port: 8080
    path: '/'
    method: 'POST'
}

var request = http.request(options, function(response) {
    response.on('data', function(data){
        console.log(data);
    });
});
request.write(message);
request.end();

//make_request.js
var makeRequest = function(message){

}
module.exports = makeRequest;
var makeRequest = require('./make_request') //look at the same directory
makeRequest("helloooooooooo");

