import axios from "axios";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import MovieCard from "../../component/MovieCard/MovieCard";
import SearchBox from "../../component/SearchBox/SearchBox";
import MovieModel from "../../model/MovieModel";
import "./MoviesPage.css"

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);
    function handleSearchChange(newSearchText) {
        setSearchText(newSearchText);

        if (newSearchText) {
            const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=80aa9e53b86dd9697f92df8248cf222d&language=en-US&query=" + newSearchText;
            axios.get(searchURL).then(response => {
                setResults(response.data.results);
            });
        } else {
            setResults([]);
        }
    }

    function addMovie(resultIndex) {
        // Adding the movie to the view
        const promise1 = axios.get("https://api.themoviedb.org/3/movie/" + results[resultIndex].id + "?api_key=80aa9e53b86dd9697f92df8248cf222d&language=en-US");
        const promise2 = axios.get("https://api.themoviedb.org/3/movie/" + results[resultIndex].id + "/credits?api_key=80aa9e53b86dd9697f92df8248cf222d&language=en-US");

        Promise.all([promise1, promise2]).then(responses => {
            const directors = responses[1].data.crew.filter(person => person.department === "Directing");
            const mainStars = responses[1].data.cast.filter(person => person.cast_id <= 5);
            const newMovie = new MovieModel(responses[0].data.title, responses[0].data.runtime, responses[0].data.poster_path, directors.map(director => director.name), mainStars.map(star => star.name));
            setMovies(movies.concat(newMovie));
        });


        setResults([]);
        setSearchText("");
    }
    return (
        <Container className="movie-page">
            <Form className="header-movie-page" >
                <SearchBox
                placeholder="Enter movie for search..." 
                searchText={searchText} 
                onSearchChange={handleSearchChange} 
                results={results.map(result => result.title)} 
                onResultSelected={addMovie} />
            </Form>
            <Row>
                {movies.map((movie, index) => <Col key={index} lg={3} md={6}><MovieCard key={index} movie={movie} /></Col>)}
            </Row>
        </Container>
    )
}