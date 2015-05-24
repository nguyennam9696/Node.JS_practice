var express = require('expres')
npm install --save express //add to our dependency files
var app = express();

app.get('/', function(request, response){
    response.sendFile(__dirname + "/index.html");
});
app.listen(8080);

//EXPRESS ROUTES

var request = require('request')
var url = require('url')

app.get('/tweets/:username', function(req, response){
    var username = req.params.username;
    options = {
        protocol: "http:",
        host: 'api.twitter.com',
        pathname: '/1/statuses/user_timeline.json',
        query: { screen_name: username, count: 10}
    }

    var twitterUrl = url.format(options);
    request(twitterUrl).pipe(response);
});

//npm install prettyjson -g
//curl -s http://localhost:8080/tweets/eallam | prettyjson
app.get('/tweets/:username', function(req, response){
    request(url, functino(err, res, body){
        var tweets = JSON.parse(body);
        response.locals = {tweets: tweets, name: username};
        response.render('tweets.ejs');
    });
});
<h1>Tweets for @<%= name %></h1>
<ul>
    <% tweets.forEach(function(tweet){ %>
        <li><%= tweet.text %></li>
    <% }); %>
</ul>