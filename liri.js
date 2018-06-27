require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
var requestType=process.argv[2];

if(requestType==="my-tweets"){
    var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log("THIS IS WHERE IT STARTS: "+JSON.stringify(tweets, null, 4));
  }
});
}