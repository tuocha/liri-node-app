const App = require("./app.js");

const app = new App();

let command = process.argv[2];
let term = process.argv.slice(3).join(' ');

switch (command) {
    case "spotify-this-song":
        app.findTrack(term);
        break
    case "concert-this":
        app.findConcert(term);
        break
    case "movie-this":
        app.findMovie(term);
        break
    case "do-what-it-says":
        fs.readFile("random.txt", function (err) {
            if (err) throw err;
            console.log(err)
        });
}
