import React from 'react';
import { getTrendingMovies } from 'helpers/API';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(resultMovies => {
      setMovies(resultMovies);
    });
  }, []);

  return (
    <div>
      Home
      <ul className={css.MoviesGallery}>
        {movies.map(item => (
          <li className={css.Lishka} key={item.id}>
            <Link className={css.Link} to={`/movies/${item.id}`}>
              <img
                alt={item.original_title}
                className={css.Image}
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              />

              {item.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
