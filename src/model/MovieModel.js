export default class MovieModel {
    constructor(plainMovie, timeout, poster, directors, stars) {
        if (typeof plainMovie === 'object') {
            this.movieName = plainMovie.title;
            this.timeout = plainMovie.timeout;
            this.poster = "https://image.tmdb.org/t/p/w500" + plainMovie.poster;
            this.directors = plainMovie.directors;
            this.stars = plainMovie.stars;
        }
        else {
            console.log("parameters")
            this.movieName = plainMovie;
            this.timeout = timeout;
            this.poster = "https://image.tmdb.org/t/p/w500" + poster;
            this.directors = directors;
            this.stars = stars;
        }
    }
}