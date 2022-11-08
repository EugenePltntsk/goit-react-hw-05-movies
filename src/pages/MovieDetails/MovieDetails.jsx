import { getMovieById } from 'helpers/API';

import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);
  const goBackPath =
    location.state?.from?.pathname + location.state?.from?.search || '/';

  useEffect(() => {
    getMovieById(movieId).then(resultData => {
      setMovie(resultData);
    });
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
        <Link className={css.Link} to={goBackPath}>Go Back</Link>
          <div
            className={css.DivForMovie}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
            }}
          >
            
            
            <img
            alt={movie.original_title}
              className={css.MovieImage}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <h2 className={css.Title}>{movie.original_title}</h2>
            <p className={css.Overview}>Overview: {movie.overview}</p>
            <span className={css.ReleaseDate}>Release date: {movie.release_date}</span>
            <span className={css.Raiting}>Rating: {movie.vote_average}</span>
            <span className={css.Votes}>Votes: {movie.vote_count}</span>
            {movie.genres.map(genre => (
              <span className={css.Genre} key={genre.id}>{genre.name} </span>
            ))}
            <Link className={css.CastLink} state={{ from: location.state?.from }} to="cast">
              Cast
            </Link>
            <Link className={css.ReviewLink} state={{ from: location.state?.from }} to="reviews">
              Reviews
            </Link>
          </div>

          <Outlet />
        </>
      )}
    </>
  );
}
