import { Card, ListGroup } from "react-bootstrap";
import './MovieCard.css';

export default function MovieCard({ movie }) {
    const directors = movie.directors.map((director, index) => <ListGroup.Item key={index}>{director}</ListGroup.Item>)
    const stars = movie.stars.map((star, index) => <ListGroup.Item key={index}>{star}</ListGroup.Item>)


    return (
        <div className="c-actor">
            <Card>
                <Card.Img variant="top" src={movie.poster} />
                <Card.Body>
                    <Card.Title>{movie.movieName}</Card.Title>
                    <Card.Text>Runtime: {movie.timeout}</Card.Text>
                    {directors.length > 0 ? <ListGroup>Directors: {directors}</ListGroup> : ""}
                    {stars.length > 0 ? <ListGroup>Main stars: {stars}</ListGroup> : ""}
                </Card.Body>
            </Card>
        </div>
    )

}