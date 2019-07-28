# liri-node-app
 
Hello! Here's my LIRI- she can find you information on any given song, movie, or upcoming concert.

    simply enter "node ./liri.js x y" in the command line

    where x = movie-this, spotify-this-song, or concert-this

    and y = the name of the movie, song, or artist you are searching for.


alternatively, you can alter the random.txt file in this format: 
x,"y"

and enter 'do-what-it-says' for x in the command line. 



# here are some screenshots of my work.
**First, we'll search a song using the spotify API:**

![before spotify entry](/images/spotify-ready.png)
![after running spotify query](/images/spotify-ran.png)
    and here you can see it logs to the log.txt file:
    ![query result in the log.txt file](/images/spotify-log.png)


**Next we'll see the OMDB call using Axios**

![before OMDB entry](/images/ombd-ready.png)
![after running omdb query](/images/omdb-ran.png)
    and again, it logs to the log.txt file:
    ![query result in the log.txt file](/images/omdb-log.png)


**Bandsintown is next, again using Axios**
![before bandsintown entry](/images/bit-ready.png)
![after running bandsintown query](/images/bit-ran.png)
    don't forget, it appends to log.txt:
    ![query result in the log.txt file](/images/bit-log.png)

**Finally, we can use random.txt to run queries as well**
![the query in random.txt]()
![the command line before the call]()
![search result from the txt file]()



