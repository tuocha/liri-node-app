const axios = require("axios");
const fs = require("fs");
const Spotify = require("node-spotify-api");
const dotenv = require("dotenv").config();
const keys = require("./keys.js");

const divider = "\n\n\n-------------------------------------------------------------------\n\n"


//********************** SPOTIFY SEARCH
var spotify = new Spotify(keys.spotify);

const Query = function() {
  this.findTrack = function(song) {
    spotify.search(
      {
        type: "track",
        query: song,
        limit: 1
      },
      function(err, data) {
        if (err) {
          return console.log("error: " + err);
        }
        const jsonData = data.tracks.items[0]

        const songData = [
          "Song title is " + jsonData.name,
          "by " + jsonData.artist[0].name,
          "From the album: " + jsonData.album.name,
          "Listen to a clip here: " + jsonData.preview_url
        ].join("\n\n")

        if (!song) {
          song = "the Sign";
        }

        fs.appendFile("log.txt", repsonse, function(err) {
          if (err) throw err;
          console.log(err);
        });
      }
    );
  };

  //   ********************** OMDB SEARCH
  this.findMovie = function(movie) {
    let URL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    axios.get(URL).then(function(response) {

      let jsonData = response.data;

      var movieData = [
        "Move title is " + jsonData.Title,
        "It was released in " + jsonData.Year,
        "Its IMDB rating is " + jsonData.imdbRating,
        "Its rottentomates rating is " + jsonData.Ratings[0].Value,
        "It was produced in " + jsonData.Country,
        "Its native language is " + jsonData.Language,
        "Its plot is as follows: " + jsonData.Plot,
        "Starring " + jsonData.Actors
      ].join("\n\n")

      if (!movie) {
        movie = "Mr. Nobody"
      }

      fs.appendFile("log.txt", movieData + divider, function(err) {
        if (err) throw err;
        console.log(movieData);
      });
    });
  };

  // ********************************************************* BANDSINTOWN SEARCH
  this.findConcert = function(band) {
    let URL =
      "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp&date=upcoming";

    axios.get(URL).then(function(response) {
      // console.log(response)
      for (let i = 0; i < response.data.length; i++) {
        const jsonData = response.data[i]

        const concertData = [ 
          "venue name: " + jsonData.venue.name,
          "location: " + jsonData.venue.city + ", " + jsonData.venue.region,
          "date: " + jsonData.datetime
        ].join("\n\n")

        fs.appendFile("log.txt", concertData + divider, function(err) {
          if (err) throw err;
          console.log(concertData);
        });
  
      }
    });
  };
};

module.exports = Query;
