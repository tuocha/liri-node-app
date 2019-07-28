const App = require("./app.js");
const fs = require("fs")

const app = new App();

let command = process.argv[2];
let term = process.argv.slice(3).join(' ');

switch (command) {
    case "spotify-this-song":
        app.findTrack(term);

        if (!term) {
            term = "the Sign";
          }
        
        break

    case "concert-this":
        app.findConcert(term);
        break

    case "movie-this":
        app.findMovie(term);

        if (!term) {
            term = "mr. nobody"
        }
        break

    case "do-what-it-says":
            fs.readFile("random.txt", "utf8", function (err, data) {
                // let slicedData = data.replace(/ /g, "%20")
                console.log(data)
                app.findTrack(data);
                // app.findMovie(data);
                // app.findConcert(data);
            });

}
