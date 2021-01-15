import React, {useState, useEffect} from 'react';
import yts from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDisplay from './MovieDisplay';
import dbFake from './movies_data_mock.json';


  const myData = (data) => {
    return {
        error: false,
        data,
    };
  };

const fetchMovie = async (page, limit) => {
  try {
      let { data: res } = await yts.get(`https://yts.mx/api/v2/list_movies.json/?quality=3D`, {
          params: {
              page,
              limit,
          },
      });
      return myData(res.data.movies);
  } catch (err) {
      return ({
          message: 'Opps! Something went wrong while fetching the data',
      });
  }
};

const  Movies = () => {

  const limit = 12;
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // lifecycle in functional comp (as compDidupdate+compDidMount in class comps)
  useEffect(() => {
      (async () => {
          //const { data} = await fetchMovie(currentPage, limit);
          // setMovies((movies) => [...movies, ...data]);

          const data = dbFake.data.movies;
          setMovies(data);
      })();
  }, [currentPage]);

  return (
        <div className= "movies row pt-5">
            {movies.map((movie) => {
              return <MovieDisplay key={movie.id} movie={movie} />;
            })}
            <button  onClick={() => setCurrentPage(currentPage + 1)}>
              Show more movies...
            </button>
        </div >
  );
}

export default Movies;
