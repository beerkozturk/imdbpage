import React from "react";
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import Searchdene from "./Searchdene";
import Ratingimdb from './Ratingimdb'


class App extends React.Component {

    state = {
        movies: [],
        filteredMovies: [],
        searchQuery: ""

    }
    async componentDidMount() {
        const baseURL = "http://localhost:3002/movies";
        const response = await fetch(baseURL);
        console.log(response)
        const data = await response.json();
        console.log(data)
        this.setState({ movies: data, filteredMovies: data });
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
            filteredMovies: newMovieList
        }))

    }

    filterMovie = (category) => {

        if (category.length == 0) {
            this.setState(state => ({
                filteredMovies: state.movies,
            }));

            return;
        }

        const filtered = this.state.movies.filter(value => value.category == category);

        this.setState(state => ({
            filteredMovies: filtered
        }));
    }

    searchMovie = (event) => {
        // console.log(event.target.value) 

        this.setState({ searchQuery: event.target.value })
    }

    render() {

        let filterdMovies = this.state.filteredMovies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )
        return (
            <div className="container" style={{ backgroundColor: "black" }}>
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                </div>

                <Searchdene filter={this.filterMovie} ></Searchdene>

                <Ratingimdb></Ratingimdb>
                <MovieList
                    filteredMovies={filterdMovies}
                    deleteMovieProp={this.deleteMovie} />


            </div>
        )
    }
}

export default App;


