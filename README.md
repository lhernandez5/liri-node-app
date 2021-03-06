# Liri-node-app::thought_balloon::movie_camera::musical_score:
While SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is command line node app that takes in parameters and gives you back data.
To retrieve the data that will power this app, I sent requests to the Twitter, Spotify and OMDB APIs.
<br>
<h2>1. node liri.js my-tweets</h2>
This will show your last 20 tweets and when they were created at in your terminal/bash window.
<br><br>
<img width="660" alt="my_tweets" src="https://user-images.githubusercontent.com/22462010/42546155-134e0e74-848a-11e8-904c-93011b384fe6.png">
<br>
<h2>2. node liri.js spotify-this-song 'song name here'</h2>
<ul>
<li>This will show the following information about the song in your terminal/bash window</li>
<ol>
<li>Artist(s)</li>
<li>The song's name</li>
<li>A preview link of the song from Spotify</li>
<li>The album that the song is from</li>
</ol>
  </ul>
<li>If no song is provided then your program will default to "The Sign" by Ace of Base.</li>
<br>
<img width="660" alt="spotify_this" src="https://user-images.githubusercontent.com/22462010/42546169-1dfe106c-848a-11e8-8757-06530b8262ea.png">
<br>
<img width="660" alt="let_it_be" src="https://user-images.githubusercontent.com/22462010/42546475-8164ff2a-848b-11e8-8b57-61ccfb19a16d.png">
<br>
<h2>3. node liri.js movie-this 'movie name here'</h2>
  <ul>
  <li>This will output the following information to your terminal/bash window:</li>
  <ol>
   <li>Title of the movie.</li>
   <li>Year the movie came out.</li>
   <li>IMDB Rating of the movie.</li>
   <li>Rotten Tomatoes Rating of the movie.</li>
   <li>Country where the movie was produced.</li>
   <li>Language of the movie.</li>
   <li>Plot of the movie.</li>
   <li>Actors in the movie.</li>
    </ol>
</ul>
<br>
<img width="660" alt="spotify" src="https://user-images.githubusercontent.com/22462010/42546162-1ad34a2e-848a-11e8-8754-99edeb6ce84b.png">
<br>
<img width="660" alt="movie_this_black_panther" src="https://user-images.githubusercontent.com/22462010/42546173-22537d0a-848a-11e8-873b-ee9fb9192c97.png">
<h2>4. node liri.js do-what-it-says</h2>
Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
<br><br>
<img width="625" alt="do_what_it_says" src="https://user-images.githubusercontent.com/22462010/42547603-0ad967be-8491-11e8-91c4-b351785358b4.png">
<br>
*In addition to logging the data to your terminal/bash window, data is appended to a .txt file called log.txt for all commands listed above.
