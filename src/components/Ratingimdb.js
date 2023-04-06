import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieList from './MovieList';

function App() {
    const [movies, setMovies] = useState([]);
    const [minRating, setMinRating] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3002/movies")
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    function handleMinRatingChange(event) {
        setMinRating(parseFloat(event.target.value));
    }

    const filteredMovies = movies.filter(movie => movie.rating >= minRating);

    return (
        <div>
            <label htmlFor="min-rating-input" class="text-primary" >Minimum rating:</label>
            <input id="min-rating-input" type="number" step="0.1" min="0" max="10" value={minRating} onChange={handleMinRatingChange} />

            <MovieList filteredMovies={filteredMovies} />
        </div>
    );
}

export default App;
