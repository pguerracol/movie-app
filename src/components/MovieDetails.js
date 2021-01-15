import React, { useState, useEffect} from 'react';
import yts from '../axios';
import { Link } from 'react-router-dom';
import dbFake from './movies_data_mock.json';


const MovieDetails = ({ match }) => {
    const movie_id = match.params.id;
    const [movieDetail, setMovieDetail] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        (async () => {
            /*
            const fetchMovieDetails = await yts.get(`api/v2/movie_details.json/`, {
                params: {
                    movie_id,
                },
            });
            setMovieDetail(fetchMovieDetails.data.data.movie);
            setGenres(fetchMovieDetails.data.data.movie.genres);
            */

            const fetchMovieDetails = dbFake.data.movies[movie_id-1];
            setMovieDetail(fetchMovieDetails);
            setGenres(fetchMovieDetails.genres);

        }) ();
    },[movie_id] )

    return (
        <div className="movie-details">
            <div className="row">
                <div className="col-sm-5">
                    <img  className="img-fluid" src={movieDetail.large_cover_image} alt={movieDetail.title}/>
                </div>
                <div className="movie-details__all col-sm-7">
                    <h3 className="movie-details__all__title">{movieDetail.title}</h3>
                    <h4 className="movie-details__all__year"> {movieDetail.year}</h4>
                    <h5 className="movie-details__all__genre">{genres.map((genre, i) => {
                                return (<i key={i}>{genre} /</i>);
                            })}
                    </h5>
                    <p className="movie-details__all__description">{movieDetail.description_full}</p>
                    <button>
                         <Link  style={{ color: '#000', fontWeight: 'Bold' }} to="/">Back</Link>
                 </button>
                </div>
            </div>
            </div>

    )
}

export default MovieDetails
