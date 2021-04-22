import { useState } from "react";
import { Container } from "react-bootstrap";
import SearchBox from "../../component/SearchBox/SearchBox";
import MovieModel from "../../model/MovieModel";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);

    function handleSearchChange(newSearchText) {
        setSearchText(newSearchText);

        if (newSearchText) {
            // Here we should call TMDB
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
    
        setMovies(movies.concat(new MovieModel(results[resultIndex].name)));
        // Cleaning up the SearchBox
        setResults([]);
        setSearchText("");
    }




    return (
        <Container>
            <SearchBox placeholder="Enter movie for search..." searchText={searchText} onSearchChange={handleSearchChange} results, onResultSelected/>
            {movies}
        </Container>
    )
}