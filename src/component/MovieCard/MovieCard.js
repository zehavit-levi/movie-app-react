import { Card } from "react-bootstrap";
import './MovieCard.css';

export default function MovieCard({movie}){
    console.log(movie);
    return (
        <div className="c-actor">
        <Card>
        <Card.Img variant="top" src={movie.poster} />
            <Card.Body>
                <Card.Title>{movie.movieName}</Card.Title>
                <Card.Text>Runtime: {movie.timeout}</Card.Text>
                <Card.Text>Directors: {movie.directors}</Card.Text>
                <Card.Text>Main stars: {movie.stars}</Card.Text>
            </Card.Body>
        </Card>
    </div>
    )

}