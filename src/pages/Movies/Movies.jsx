import { findMovie } from 'helpers/API';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

export default function Movies() {
  const [inputData, setInputData] = useState('');
  const [params, setParams] = useSearchParams();
  const query = params.get('query');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const getDataFromInput = event => {
    setInputData(event.target.value);
  };

  const submitDataFromInput = event => {
    event.preventDefault();
    setParams({ query: inputData });
  };

  useEffect(() => {
    if (query) {
      findMovie(query).then(resultData => {
        setMovies(resultData);
      });
    }
  }, [query]);

  return (
    <div>
      Movies
      <form className={css.Form} onSubmit={submitDataFromInput}>
        <label>
          Search form
          <input
            className={css.Input}
            value={inputData}
            onChange={getDataFromInput}
            placeholder="enter movie name"
            type="text"
          />
        </label>
        <button className={css.Button} type="submit">
          <span className={css.Span}>Search</span>
        </button>
      </form>
      <ul className={css.MoviesGallery}>
        {movies.map(item => (
          <li className={css.Lishka} key={item.id}>
            <Link state={{ from: location }} className={css.Link} to={`/movies/${item.id}`}>
              <img
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
