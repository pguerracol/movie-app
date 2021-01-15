import React from 'react';
import { Link } from 'react-router-dom';

const MovieDisplay = ({ movie }) => {

    return (
        <div className= "col-md-3">  
            <Link to={`/MovieDetails/${movie.id}`}>
                <img className="img-fluid" src={movie.medium_cover_image}  alt={movie.title_long}  />
            </Link>
            <h3 className='movies__title'>{movie.title}</h3>
            <p className="movies__year">{movie.year}</p>
        </div>
    )
}

export default MovieDisplay;
