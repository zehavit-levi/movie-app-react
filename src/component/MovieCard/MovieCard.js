import { Card } from "react-bootstrap";
import './MovieCard.css';

export default function MovieCard({movie}){
    console.log(movie);
    return (
        <div className="c-actor">
        <Card>
            <Card.Body>
                <Card.Title>{movie.movieName}</Card.Title>
                <Card.Text>Runtime: {movie.timeout}</Card.Text>
            </Card.Body>
        </Card>
    </div>
    )

}