http.createServer(function(request, response){
    response.writeHead(200);
    request.on('readable', function(){
        var chunk = null;
        while (null !== (chunk = request.read())) {
            // console.log(chunk.toString()); response.write does this same line
            response.write(chunk);
        }
    });
    request.on('end', function(){
        response.end();
    });
}).listen(8080);

http.createServer(function(request, response){
    response.writeHead(200);
    request.pipe(response);
}).listen(8080);

// curl -d 'hello' http://localhost:8080
//
var fs = require('fs') //require filesystem module
var http = require('http');

http.createServer(function(request, response){
    var newFile = fs.createWriteStream("readme_copy.md")
    request.pipe(newFile);

    request.on('end', function() {
        response.end('uploaded!');
    });
}).listen(8080);

// curl --upload-file readme.md http://localhost:8080

// http://gulpjs.com/
//

var fs = require('fs') //require filesystem module
var http = require('http');

http.createServer(function(request, response){
    var newFile = fs.createWriteStream("readme_copy.md")
    var fileBytes = request.headers['content-length']
    var uploadedBytes = 0;

    request.on('readable', function() {
        var chunk = null;
        while(null !== (chunk = request.read())){
            uploadedBytes += chunk.length;
            var progress = (uploadedBytes / fileBytes) * 100;
            response.write("progress: " + parseInt(progress, 10) + "%\n");
        }
    })
    request.on('end', function() {
        response.end('uploaded!');
    });
    request.pipe(newFile);
}).listen(8080);
