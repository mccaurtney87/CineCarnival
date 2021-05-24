import React from 'react';
import "./Movie.css";
const IMG_API = "https://image.tmdb.org/t/p/w500/";
const setVoteClass=(vote)=>
{
    
}
const Movie = (props) => {
    return (
        <div className="movie">
            <img src={IMG_API + props.movie.poster_path} alt={props.movie.title} />
            <div className="movie-info">
                <h3 className="movie-title">{props.movie.title}</h3>
                <span className={`movie-rating ${(setVoteClass(props.movie.vote_average))}`}>{props.movie.vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{props.movie.overview}</p>
            </div>
        </div>
    )
}

export default Movie;