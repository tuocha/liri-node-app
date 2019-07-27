const dotenv = require("dotenv").config();
const Spotify = require("node-spotify-api")

const keys = require("./keys.js");
const app = require("./app.js")

//********************** SPOTIFY SEARCH

// var spotify = new Spotify(keys.spotify);

// const songTitle = process.argv[2]
// spotify.search(
//     {
//     type: "track",
//     query: songTitle,
//     limit: 1
//     }, 
//     function(err, data)  {
//         if (err) {
//             return console.log("error: " + err)
//         } 
//         console.log("--------------")
//         console.log("SPOTIFY SEARCH")
//         console.log("Song title is " + data.tracks.items[0].name)
//         console.log("by " + data.tracks.items[0].artists[0].name)
//         console.log("From the album: " + data.tracks.items[0].album.name)
//         console.log("Listen to a clip here: " + data.tracks.items[0].preview_url)
//     }
//     )
 



// ********************** OMDB SEARCH

// const title = process.argv[2]
// axios.get(
//     "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy"
    
//     ).then(function (response) {
//         console.log("--------------")
//         console.log("OMDB SEARCH")
//         console.log("Move title is " + response.data.Title)
//         console.log("It was released in " + response.data.Year)
//         console.log("Its IMDB rating is " + response.data.imdbRating)
//         console.log("Its rottentomates rating is " + response.data.Ratings[0].Value)
//         console.log("It was produced in " + response.data.Country)
//         console.log("Its native language is " + response.data.Language)
//         console.log("Its plot is as follows: " + response.data.Plot)
//         console.log("Starring " + response.data.Actors)
//     })


// ********************************************************* BANDSINTOWN SEARCH
// const artist = process.argv[2]

// axios.get(
//     "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=upcoming"
    
//     ).then(function (response) {
//         console.log("--------------")
//         // console.log(response)
//         for (let i = 0; i < response.length; i++) {
//             console.log("venue name: " + response[i].venue.name)
//             console.log("location: " + response[i].venue.city + ", " + response[i].venue.region)
//             console.log("date: " +response[i].datetime)
//         }

// })
