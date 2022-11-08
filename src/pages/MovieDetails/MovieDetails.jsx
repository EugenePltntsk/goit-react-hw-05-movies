import { getMovieById } from 'helpers/API';
import Movies from 'pages/Movies/Movies';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from "./MovieDetails.module.css"

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);
  const goBackPath = (location.state?.from.pathname + location.state?.from.search) || "/";

  useEffect(() => {
    getMovieById(movieId).then(resultData => {
      setMovie(resultData);
    });
  }, [movieId]);

  return (
    <>
      {movie && (
        <>

        <div className={css.DivForMovie}
          style={{

            backgroundImage: `linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
            
          }}
        >
          MovieDetails

         <Link to={goBackPath}>Go Back</Link>
          <img className={css.MovieImage} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>
        <span>{movie.release_date}</span>
        <span>Rating: {movie.vote_average}</span>
        <span>Votes: {movie.vote_count}</span>
        {movie.genres.map(genre => (<span key={genre.id}>{genre.name} </span>))}

        <Link state={{from: location.state?.from}} to="cast">Cast</Link>
        <Link state={{from: location.state?.from}} to="reviews">Reviews</Link>

        </div>
        
        <Outlet/>

        </>
      )}
    </>
  );
}
