export default class MovieModel {
    constructor(plainMovie, timeout, poster, director, actors) {
        if (typeof plainMovie === 'object') {
            this.movieName = plainMovie.movieName;
            this.timeout = plainMovie.timeout;
            this.poster = plainMovie.poster;
            this.director = plainMovie.director;
            this.actors = plainMovie.actors;
        }
        else {
            this.firstName = plainMovie;
            this.timeout = timeout;
            this.poster = poster;
            this.director = director;
            this.actors = actors;
        }
    }
}