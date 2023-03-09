import React from "react";
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import searchCategory from "./searchcategory";

class App extends React.Component {

    state = {
        movies: [],
        searchQuery: ""

    }
    async componentDidMount() {
        const baseURL = "http://localhost:3002/movies";
        const response = await fetch(baseURL);
        console.log(response)
        const data = await response.json();
        console.log(data)
        this.setState({ movies: data })
    }
    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        /*    this.setState(
               {
                   movies: newMovieList
               }
           ) */

        this.setState(state => ({
            movies: newMovieList
        }))

    }

    searchMovie = (event) => {
        // console.log(event.target.value) 

        this.setState({ searchQuery: event.target.value })
    }

    render() {

        let filterdMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.searchMovie} />
                        <searchCategory></searchCategory>
                    </div>
                </div>



                <MovieList
                    movies={filterdMovies}
                    deleteMovieProp={this.deleteMovie} />
            </div>
        )
    }
}

export default App;


