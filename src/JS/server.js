//  /* Load the HTTP library */
//  var http = require("http");

//  /* Create an HTTP server to handle responses */

//  http.createServer(function(request, response) {
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.write("Hello World");
//    response.end();
//  }).listen(8888);

var request = require("request");
var token = "bearer";
var playlistUrl = "https://api.spotify.com/v1/users/"+user_id+"/playlists";
request({url:playlistUrl, headers:{"Authorization":token}}, function(err, res) {
    if(res) {
        var playlists = JSON.parse(res.body);
        var playlistUrl = playlists.items[0].href
        request({url:playlistUrl, headers:{"Authorization": token}}, function(err,res) { 
            if(res){
                var playlist = JSON.parse(res.body);
                playlist.tracks.forEach(function(track){
                    console.log(track.track.name)
                })
            }
        })
    }
} );