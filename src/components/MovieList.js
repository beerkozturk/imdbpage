import React from "react";
import "./App.css";

const MovieList = (props) => {
    return (
        <div className="row" style={{ alignContent: "end", marginTop: 90 }}>
            {props.filteredMovies.map((movie) => (
                <div className="col-lg-4 box" key={movie.id} >
                    <div className="card mb-4 shadow-sm" style={{ width: 410 }} >
                        <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{movie.overview}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" onClick={() => props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                                <span> <h2 className=".text-info">{movie.rating}</h2></span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}



export default MovieList;