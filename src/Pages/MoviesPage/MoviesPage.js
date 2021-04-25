import axios from "axios";
import {  useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "../../component/MovieCard/MovieCard";
import SearchBox from "../../component/SearchBox/SearchBox";
import MovieModel from "../../model/MovieModel";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);
    const [newMovie,setNewMovie] =useState();
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

    // "https://api.themoviedb.org/3/movie/" + result.id + "?api_key=80aa9e53b86dd9697f92df8248cf222d&language=en-US"

    

  

    function addMovie(resultIndex) {
        // Adding the movie to the view
        const searchURL = "https://api.themoviedb.org/3/movie/" + results[resultIndex].id + "?api_key=80aa9e53b86dd9697f92df8248cf222d&language=en-US"
        axios.get(searchURL).then(response => {
            setNewMovie(response.data);
        });
     
        setResults([]);
        setSearchText("");
    }

    useEffect(()=>{
        if(newMovie){
            console.log(newMovie);
            setMovies(movies.concat(new MovieModel(newMovie.title, newMovie.runtime)));
            setNewMovie();
            }
    },[newMovie, movies])

    return (
        <Container>
            <SearchBox placeholder="Enter movie for search..." searchText={searchText} onSearchChange={handleSearchChange} results={results.map(result => result.title)} onResultSelected={addMovie} />
            <Row>
                    {movies.map(movie => <Col lg={3} md={6}><MovieCard movie={movie}/></Col>)}
                </Row>
        </Container>
    )
}